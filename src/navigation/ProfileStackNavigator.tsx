import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../types/tabNavigator";
import ProfileScreen from "../screens/profile/ProfileScreen";
import PersonalInfoScreen from "../screens/profile/PersonalInfoScreen";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStackNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="ProfileOverview"
            component={ProfileScreen}
        />

        <Stack.Screen
            name="PersonalInformation"
            component={PersonalInfoScreen}
        />
      </Stack.Navigator>
  );
}
