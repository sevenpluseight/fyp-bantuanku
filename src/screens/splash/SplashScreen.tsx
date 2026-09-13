import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { Image, View } from "react-native";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.94);
  const translateY = useSharedValue(6);

  useEffect(() => {
    // Entrance
    opacity.value = withTiming(1, {
      duration: 700,
      easing: Easing.out(Easing.ease),
    });

    scale.value = withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });

    translateY.value = withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });

    // Exit
    opacity.value = withDelay(
        1400,
        withTiming(0, {
          duration: 500,
          easing: Easing.in(Easing.ease),
        }),
    );

    translateY.value = withDelay(
        1400,
        withTiming(-6, {
          duration: 500,
          easing: Easing.inOut(Easing.ease),
        }),
    );

    // Switch to the application after the animation
    const timer = setTimeout(() => {
      onFinish();
    }, 1900);

    return () => clearTimeout(timer);
  }, [onFinish, opacity, scale, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value }
    ],
  }));

  return (
      <View className="flex-1 items-center justify-center bg-white">
        <Animated.View style={animatedStyle}>
          <Image
            source={require("../../../assets/bantuanku-logo.png")}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
  );
}
