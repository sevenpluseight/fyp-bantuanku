import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/types";
import { useState } from "react";
import { RegisterFormData } from "../../../schemas/auth";
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from "react-native";
import AuthBackground from "../../../components/auth/AuthBackground";
import Screen from "../../../components/layout/Screen";
import RegisterAccountStep from "./RegisterAccountStep";


type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export default function RegisterScreen({
    navigation
}: Props) {
  const [step, setStep] = useState(1);

  const [
      accountData,
      setAccountData,
  ] = useState<RegisterFormData | undefined>();

  const handleAccountContinue = (
      data: RegisterFormData
  )=> {
    setAccountData(data);
    setStep(2);
  };

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
                  <Text className="text-lg font-semibold text-foreground">
                    Create Account
                  </Text>

                  <RegisterAccountStep onContinue={handleAccountContinue} defaultValues={accountData} />

                  <View className="mt-6 flex-row items-center justify-center">
                    <Text className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                    </Text>

                    <Pressable
                      accessibilityRole="link"
                      onPress={() => navigation.goBack()}
                      hitSlop={8}
                    >
                      <Text className="text-sm font-semibold text-primary">
                        Sign in
                      </Text>
                    </Pressable>
                  </View>
                </View>
            )}

            {step === 2 && (
                <View className="flex-1 items-center justify-center">
                  <Text className="text-lg font-semibold text-foreground">
                    Personal Details
                  </Text>

                  <Text className="mt-2 text-muted-foreground">
                    Step 2 coming next.
                  </Text>

                  <Pressable
                    onPress={() => setStep(1)}
                    className="mt-6"
                  >
                    <Text className="font-semibold text-primary">
                      Back
                    </Text>
                  </Pressable>
                </View>
            )}
          </KeyboardAvoidingView>
        </Screen>
      </View>
  );
}
