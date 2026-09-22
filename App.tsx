import "./global.css";

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SplashScreen from "./src/screens/splash/SplashScreen";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
      <SafeAreaProvider>
        {showSplash ? (
            <SplashScreen
                onFinish={() => setShowSplash(false)}
            />
        ) : (
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
        )}
      </SafeAreaProvider>
  );
}
