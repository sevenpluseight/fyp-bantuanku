import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/types";
import { useState } from "react";
import { RegisterFormData, RegisterPersonalFormData } from "../../../schemas/auth";
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import AuthBackground from "../../../components/auth/AuthBackground";
import Screen from "../../../components/layout/Screen";
import RegisterAccountStep from "./RegisterAccountStep";
import RegisterPersonalStep from "./RegisterPersonalStep";


type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export default function RegisterScreen({
    navigation
}: Props) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);

  const [
      accountData,
      setAccountData,
  ] = useState<RegisterFormData | undefined>();

  const [
      personalData,
      setPersonalData,
  ] = useState<RegisterPersonalFormData | undefined>();

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
    setStep(3);
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
                  />
                </View>
            )}
          </KeyboardAvoidingView>
        </Screen>
      </View>
  );
}
