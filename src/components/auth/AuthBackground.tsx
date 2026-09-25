import { Image, useWindowDimensions, View } from "react-native";

export default function AuthBackground() {
  const { width, height } = useWindowDimensions();
  return (
      <View
        pointerEvents="none"
        className="absolute inset-0 overflow-hidden"
      >
        {/* Top-left circles */}
        <Image
          source={require("../../../assets/backgrounds/circle-left-top-lg.png")}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: width * 0.6,
            height: width * 0.6,
            left: -width * 0.2,
            top: -width * 0.15,
          }}
        />

        <Image
          source={require("../../../assets/backgrounds/circle-left-top-sm.png")}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: width * 0.38,
            height: width * 0.38,
            left: width * -0.2,
            top: height * 0.08,
          }}
        />

        {/* Bottom-right circle */}
        <Image
          source={require("../../../assets/backgrounds/circle-right-bottom-md.png")}
          resizeMode="contain"
          style={{
            position: "absolute",
            width: width * 0.5,
            height: width * 0.5,
            right: -width * 0.18,
            bottom: height * 0.03,
          }}
        />

        {/* Bottom waves */}
        <Image
          source={require("../../../assets/backgrounds/wave-curved-bottom-1.png")}
          resizeMode="stretch"
          style={{
            position: "absolute",
            width: width * 1.2,
            height: height * 0.18,
            left: -width * 0.1,
            bottom: 0,
          }}
        />

        <Image
          source={require("../../../assets/backgrounds/wave-curved-bottom-2.png")}
          resizeMode="stretch"
          style={{
            position: "absolute",
            width: width * 1.2,
            height: height * 0.15,
            left: -width * 0.1,
            bottom: 0,
          }}
        />
      </View>
  );
}
