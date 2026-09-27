import "expo-sqlite/localStorage/install"

import "./global.css";
import "./src/i18n"

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SplashScreen from "./src/screens/splash/SplashScreen";
import RootNavigator from "./src/navigation/RootNavigator";
import AuthProvider from "./src/contexts/AuthContext";
import {getStoredLanguage} from "./src/i18n/language";
import LanguageSelectionScreen from "./src/screens/language/LanguageSelectionScreen";

// [DEV] Reset the language preference for first-launch testing
localStorage.removeItem("bantuanku-language");

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(() => getStoredLanguage() !== null);

  return (
      <SafeAreaProvider>
        <AuthProvider>
          {showSplash ? (
              <SplashScreen
                  onFinish={() => setShowSplash(false)}
              />
          ) : !hasSelectedLanguage ? (
              <LanguageSelectionScreen
                  onComplete={() => {
                    setHasSelectedLanguage(true);
                  }}
              />
          ) : (
              <NavigationContainer>
                <RootNavigator/>
              </NavigationContainer>
          )}
        </AuthProvider>
      </SafeAreaProvider>
  );
}
