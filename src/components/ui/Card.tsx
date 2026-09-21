import {ReactNode} from "react";
import {View, type ViewProps} from "react-native";

type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = ViewProps & {
  children: ReactNode;
  padding?: CardPadding;
};

const paddingStyles: Record<CardPadding, string> = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
};

export default function Card({
    children,
    padding = "md",
    className = "",
    ...props
}: CardProps) {
  return (
      <View
          {...props}
          className={`
            w-full
            rounded-xl
            border
            border-border
            bg-background
            ${paddingStyles[padding]}
            ${className}
          `}
      >
        {children}
      </View>
  );
}
