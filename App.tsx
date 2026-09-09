import "./global.css";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "./src/screens/splash/SplashScreen";
import { Text, View } from "react-native";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
      <SafeAreaProvider>
        {showSplash ? (
            <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
            <SafeAreaView className="flex-1 bg-white">
              <View className="flex-1 items-center justify-center">
                <Text className="text-2xl font-bold text-blue-600">
                  BantuanKu
                </Text>

                <Text className="mt-2 text-base text-gray-600">
                  Welcome to BantuanKu
                </Text>
              </View>
            </SafeAreaView>
        )}
      </SafeAreaProvider>
  );
}
