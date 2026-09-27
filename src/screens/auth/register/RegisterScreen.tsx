import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/types";
import { useState } from "react";
import {
  RegisterFormData,
  RegisterHouseholdIncomeFormData,
  RegisterPersonalFormData,
  RegisterResidenceFormData
} from "../../../schemas/auth";
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../contexts/AuthContext";
import { getStoredLanguage } from "../../../i18n/language";
import { RegistrationError, completeRegistration } from "../../../services/registrationService";

import AuthBackground from "../../../components/auth/AuthBackground";
import Screen from "../../../components/layout/Screen";
import RegisterAccountStep from "./RegisterAccountStep";
import RegisterPersonalStep from "./RegisterPersonalStep";
import RegisterResidenceStep from "./RegisterResidenceStep";
import RegisterHouseholdIncomeStep from "./RegisterHouseholdIncomeStep";
import RegisterLoading from "../../../components/auth/RegisterLoading";
import AlertDialog from "../../../components/ui/AlertDialog";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export default function RegisterScreen({
    navigation
}: Props) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const { refreshRegistrationStatus } = useAuth();

  const [accountData, setAccountData,] = useState<RegisterFormData | undefined>();
  const [personalData, setPersonalData,] = useState<RegisterPersonalFormData | undefined>();
  const [residenceData, setResidenceData,] = useState<RegisterResidenceFormData | undefined>();
  const [householdIncomeData, setHouseholdMemberIncomeData,] = useState<RegisterHouseholdIncomeFormData | undefined>();
  const [myKadError, setMyKadError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const handleAccountContinue = (
      data: RegisterFormData
  )=> {
    setAccountData(data);
    setStep(2);
  };

  const handlePersonalContinue = (
      data: RegisterPersonalFormData
  ) => {
    setPersonalData(data);
    setMyKadError(null);
    setRegistrationError(null);
    setStep(3);
  }

  const handleResidenceContinue = (
      data: RegisterResidenceFormData
  ) => {
    setResidenceData(data);
    setStep(4);
  }

  const handleHouseholdIncomeComplete = async (
      data: RegisterHouseholdIncomeFormData
  ) => {
    setHouseholdMemberIncomeData(data);

    // TODO-1: Supabase registration + profile persistence
    if (
        !accountData ||
        !personalData ||
        !residenceData
    ) {
      setRegistrationError(
          t("auth.register.errors.incompleteRegistration")
      )

      return;
    }

    const preferredLanguage = getStoredLanguage();

    if (!preferredLanguage) {
      setRegistrationError(
          t("auth.register.errors.languageUnavailable")
      );

      return;
    }

    setSubmitting(true);
    setRegistrationError(null);

    try {
      await completeRegistration({
        account: accountData,
        personal: personalData,
        residence: residenceData,
        householdIncome: data,
        preferredLanguage,
      });

      await refreshRegistrationStatus();
    } catch (error) {
      if (
          error instanceof RegistrationError &&
          error.code === "identificationNumberExists"
      ) {
        setMyKadError(t("auth.register.errors.identificationNumberExists"));
        setStep(2);
        return;
      }

      if (__DEV__) {
        console.error("[REGISTRATION] Registration failed:", error);
      }

      setRegistrationError(t("auth.register.errors.registrationFailed"));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitting) {
    return (
        <View className="flex-1 bg-background">
          <AuthBackground />

          <Screen transparent>
            <RegisterLoading />
          </Screen>
        </View>
    );
  }

  return (
      <View className="flex-1 bg-background">
        <AuthBackground />

        <Screen transparent>
          <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {step === 1 && (
                <View className="flex-1 justify-center">
                  <RegisterAccountStep onContinue={handleAccountContinue} defaultValues={accountData} />

                  <View className="mt-6 flex-row items-center justify-center">
                    <Text className="text-sm text-muted-foreground">
                      {t("auth.register.account.alreadyHaveAccount")}{" "}
                    </Text>

                    <Pressable
                      accessibilityRole="link"
                      onPress={() => navigation.goBack()}
                      hitSlop={8}
                    >
                      <Text className="text-sm font-semibold text-primary">
                        {t("auth.register.account.signIn")}
                      </Text>
                    </Pressable>
                  </View>
                </View>
            )}

            {step === 2 && (
                  <View className="flex-1 justify-center">
                    <RegisterPersonalStep
                      defaultValues={personalData}
                      onBack={() => setStep(1)}
                      onContinue={handlePersonalContinue}
                      myKadError={myKadError ?? undefined}
                    />
                  </View>
              )}

            {step === 3 && (
                <View className="flex-1 justify-center">
                  <RegisterResidenceStep
                    defaultValues={residenceData}
                    onBack={() => setStep(2)}
                    onContinue={handleResidenceContinue}
                  />
                </View>
            )}

            {step === 4 && (
                <View className="flex-1 justify-center">
                  <RegisterHouseholdIncomeStep
                    defaultValues={householdIncomeData}
                    onBack={() => setStep(3)}
                    onComplete={handleHouseholdIncomeComplete}
                  />

                  <AlertDialog
                    visible={registrationError !== null}
                    variant="error"
                    title={t("auth.register.errors.title")}
                    message={registrationError ?? undefined}
                    confirmText={t("common.ok")}
                    onConfirm={() => setRegistrationError(null)}
                    onDismiss={() => setRegistrationError(null)}
                  />
                </View>
            )}
          </KeyboardAvoidingView>
        </Screen>
      </View>
  );
}
