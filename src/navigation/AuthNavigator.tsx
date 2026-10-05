import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types/tabNavigator";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/register/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/forgot-password/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/auth/forgot-password/ResetPasswordScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

type Props = {
  initialRouteName?: keyof AuthStackParamList;
}

export default function AuthNavigator({
    initialRouteName="Login"
}: Props) {
  if (__DEV__) {
    console.log(
        "[AUTH NAVIGATOR] Initial route:",
        initialRouteName
    );
  }

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen
            name="Login"
            component={LoginScreen}
        />

        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
        />

        <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
        />

        <Stack.Screen
            name="Register"
            component={RegisterScreen}
        />
      </Stack.Navigator>
  );
}
