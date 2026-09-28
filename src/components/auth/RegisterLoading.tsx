import { useTranslation } from "react-i18next";
import { ActivityIndicator, Text, View } from "react-native";
import RegistrationProgress from "./RegistrationProgress";

export default function RegisterLoading() {
  const { t } = useTranslation();

  return (
      <View className="flex1 justify-center">
        <RegistrationProgress currentStep={4} completed />

        <View className="items-center px-6">
          <ActivityIndicator size="large" color="#0352CE" />

          <Text className="mt-6 text-center text-xl font-semibold text-foreground">
            {t("auth.register.registering")}
          </Text>

          <Text className="mt-2 text-center text-sm leading-5 text-muted-foreground">
            {t("auth.register.registeringDescription")}
          </Text>
        </View>
      </View>
  );
}
