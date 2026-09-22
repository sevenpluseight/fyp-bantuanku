import MainTabNavigator from "./MainTabNavigator";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
  const { session, loading } = useAuth();

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

  if (!session) {
    return <AuthNavigator />;
  }

  return <MainTabNavigator />;
}
