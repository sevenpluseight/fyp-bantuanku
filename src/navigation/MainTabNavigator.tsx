import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { MainTabParamList } from "./types";
import { FileText, Home, Search, UserRound } from "lucide-react-native";

import HomeScreen from "../screens/home/HomeScreen"
import ProgramsScreen from "../screens/programs/ProgramsScreen";
import ApplicationsScreen from "../screens/applications/ApplicationsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import AnimatedTabIcon from "./AnimatedTabIcon";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          // tabBarShowLabel: false,

          tabBarActiveTintColor: "#0352CE",
          tabBarInactiveTintColor: "#9CA3AF",

          tabBarStyle: {
            borderTopColor: "#E2E5EA",
            paddingTop: 8,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
        }}
      >
        {/* Home */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size, focused }) => (
                <AnimatedTabIcon
                    icon={Home}
                    color={color}
                    size={size}
                    focused={focused}
                />
            ),
          }}
        />

        {/* Programs */}
        <Tab.Screen
          name="Programs"
          component={ProgramsScreen}
          options={{
            title: "Programs",
            tabBarIcon: ({ color, size, focused}) => (
                <AnimatedTabIcon
                    icon={Search}
                    color={color}
                    size={size}
                    focused={focused}
                />
            ),
          }}
        />

        {/* Applications */}
        <Tab.Screen
          name="Applications"
          component={ApplicationsScreen}
          options={{
            title: "Applications",
            tabBarIcon: ({ color, size, focused }) => (
                <AnimatedTabIcon
                    icon={FileText}
                    color={color}
                    size={size}
                    focused={focused}
               />
            ),
          }}
        />

        {/* Profile */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
                <AnimatedTabIcon
                    icon={UserRound}
                    color={color}
                    size={size}
                    focused={focused}
                />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
