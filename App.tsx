import "expo-sqlite/localStorage/install"

import "./global.css";
import "./src/i18n"

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SplashScreen from "./src/screens/splash/SplashScreen";
import RootNavigator from "./src/navigation/RootNavigator";
import AuthProvider from "./src/contexts/AuthContext";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
      <SafeAreaProvider>
        <AuthProvider>
          {showSplash ? (
              <SplashScreen
                  onFinish={() => setShowSplash(false)}
              />
          ) : (
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
          )}
        </AuthProvider>
      </SafeAreaProvider>
  );
}
