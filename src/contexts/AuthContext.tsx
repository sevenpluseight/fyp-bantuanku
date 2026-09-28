import { Session, User } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

/**
 * Authentication and registration state flow:
 *
 * onAuthStateChange handles Supabase Auth session changes. During registration, this can run immediately
 * after sign-up before the registration RPC has finished creating the user's profile, so registrationComplete may
 * temporarily remain false.
 *
 * After the registration RPC succeeds, RegisterScreen explicitly calls refreshRegistrationStatus().
 * This checks the current Supabase session again and re-checks the profile which allows RootNavigator
 * to switch from the auth flow to MainTabNavigator.
 *
 * Profile status checks may occasionally receive a transient PostgREST PGRST303 "JWT issued at future" response.
 * In that case, the session is refreshed and the profile check is retried once. A failed profile check
 * does not automatically mean that registration is incomplete.
 *
 * [Summary]
 * Auth session created -> onAuthStateChange -> profile may not exist yet
 * Registration RPC succeeds -> refreshRegistrationStatus -> profile exists
 */

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  registrationComplete: boolean;
  refreshRegistrationStatus: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(
    undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({
    children
}: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const checkRegistrationStatus = async (
      currentSession: Session | null,
      retryOnJwtError = true
  ) => {
    if (!currentSession) {
      setRegistrationComplete(false);
      return;
    }

    const { data, error } = await supabase
        .from("profiles")
        .select("id")
        .eq(
            "user_id",
            currentSession.user.id
        )
        .maybeSingle();

    if (error) {
      const isJwtIssuedAtFuture =
          error.code === "PGRST303" &&
          error.message === "JWT issued at future";

      if (isJwtIssuedAtFuture && retryOnJwtError) {
        if (__DEV__) {
          console.log(
              "[AUTH] JWT timing error detected. Refreshing session and retrying profile check."
          );
        }

        const {
          data: { session: refreshedSession },
          error: refreshError
        } = await supabase.auth.refreshSession();

        if (refreshError || !refreshedSession) {
          if (__DEV__) {
            console.error(
                "[AUTH] Failed to refresh session:",
                refreshError
            );
          }

          return;
        }

        setSession(refreshedSession);

        await checkRegistrationStatus(
            refreshedSession,
            false
        );

        return;
      }

      if (__DEV__) {
        console.error(
            "[AUTH] Failed to check registration status:",
            error
        );
      }

      return;
    }

    setRegistrationComplete(data !== null);
  };

  const refreshRegistrationStatus = async () => {
    const {
      data: { session: currentSession },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      if (__DEV__) {
        console.error("[AUTH] Failed to refresh registration status:", error);
      }

      return;
    }

    setSession(currentSession);

    await checkRegistrationStatus(currentSession);
  }

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!mounted) {
        return;
      }

      if (error) {
        if (__DEV__) {
          console.error("[AUTH] Failed to restore session:", error);
        }

        setSession(null);
        setRegistrationComplete(false);
        setLoading(false);

        return;
      }

      setSession(data.session);

      await checkRegistrationStatus(data.session);

      if (mounted) {
        setLoading(false);
      }
    };

    void initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
        (_event, nextSession) => {
          setSession(nextSession);

          if (!nextSession) {
            setRegistrationComplete(false);
            return;
          }

          setTimeout(() => {
            void checkRegistrationStatus(nextSession);
          }, 0);
        }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const value: AuthContextValue = {
    session,
    user: session?.user ?? null,
    loading,
    registrationComplete,
    refreshRegistrationStatus
  };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
