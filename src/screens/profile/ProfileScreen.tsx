import Screen from "../../components/layout/Screen";
import ScreenHeader from "../../components/layout/ScreenHeader";
import Button from "../../components/ui/Button";
import { supabase } from "../../lib/supabase";

export default function ProfileScreen() {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign out failed:", error.message);
    }
  };

  return (
      <Screen>
        <ScreenHeader
            title="Profile"
            description="Manage your personal and household information."
        />

        <Button
            variant="outline"
            onPress={handleSignOut}
            className="mt-8"
        >
          Sign Out
        </Button>
      </Screen>
  );
}
