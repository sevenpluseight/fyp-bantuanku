import { LucideIcon } from "lucide-react-native";
import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

type AnimatedTabIconProps = {
  icon: LucideIcon;
  color: string;
  size: number;
  focused: boolean;
};

export default function AnimatedTabIcon({
    icon: Icon,
    color,
    size,
    focused
}: AnimatedTabIconProps) {
  const scale = useRef(new Animated.Value(focused ? 1 : 0.82)).current;
  const opacity = useRef(new Animated.Value(focused ? 1 : 0.6)).current;

  useEffect(() => {
    Animated.parallel([
        Animated.timing(scale, {
          toValue: focused ? 1 : 0.82,
          duration: 180,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(opacity, {
          toValue: focused ? 1 : 0.6,
          duration: 180,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
    ]).start();
  }, [focused, opacity, scale]);

  return (
      <Animated.View
        style={{
          opacity,
          transform: [{ scale }],
        }}
      >
        <Icon
          color={color}
          size={size}
          strokeWidth={focused ? 2.5 : 2}
        />
      </Animated.View>
  );
}
