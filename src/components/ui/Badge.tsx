import { Text, View, type ViewProps } from "react-native";
import { ReactNode } from "react";

type BadgeVariant = "default" | "info" | "success" | "warning" | "error";

export type BadgeProps = ViewProps & {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantStyles: Record<
    BadgeVariant,
    {
      container: string;
      text: string;
    }
> = {
  default: {
    container: "bg-secondary",
    text: "text-muted-foreground",
  },

  info: {
    container: "bg-info-background",
    text: "text-info-foreground",
  },

  success: {
    container: "bg-success-background",
    text: "text-success-foreground",
  },

  warning: {
    container: "bg-warning-background",
    text: "text-warning-foreground",
  },

  error: {
    container: "bg-error-background",
    text: "text-error-foreground",
  },
};

export default function Badge({
    children,
    variant = "default",
    className = "",
    ...props
}: BadgeProps) {
  return (
      <View
        {...props}
        className={`
        self-start
        rounded-full
        px-3
        py-1
        ${variantStyles[variant].container}
        ${className}
      `}
      >
        <Text
          className={`
            text-xs
            font-semibold
            ${variantStyles[variant].text}
          `}
        >
          {children}
        </Text>
      </View>
  );
}
