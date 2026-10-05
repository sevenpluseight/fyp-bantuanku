import MainTabNavigator from "./MainTabNavigator";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";
import AuthNavigator from "./AuthNavigator";
import ResetPasswordScreen from "../screens/auth/forgot-password/ResetPasswordScreen";

export default function RootNavigator() {
  const {
    session,
    loading,
    registrationComplete,
    passwordRecoveryInProgress
  } = useAuth();

  if (loading) {
    return (
        <View className="flex-1 items-center justify-center bg-background">
          <ActivityIndicator
              size="large"
              color="#0352CE"
          />
        </View>
    );
  }

  if (passwordRecoveryInProgress) {
    return <ResetPasswordScreen />;
  }

  if (!session || !registrationComplete) {
    return <AuthNavigator />;
  }

  return <MainTabNavigator />;
}
