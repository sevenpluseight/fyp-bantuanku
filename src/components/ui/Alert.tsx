import {Text, View, type ViewProps} from "react-native";
import {CircleCheck, CircleX, Info, LucideIcon, TriangleAlert} from "lucide-react-native";

type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertProps = ViewProps & {
  variant?: AlertVariant;
  title?: string;
  children: string;
};

type AlertStyle = {
  container: string;
  title: string;
  message: string;
  icon: LucideIcon;
  iconColor: string;
};

const alertStyles: Record<AlertVariant, AlertStyle> = {
  info: {
    container: "border-info bg-info-background",
    title: "text-info-foreground",
    message: "text-foreground",
    icon: Info,
    iconColor: "#0352CE",
  },

  success: {
    container: "border-success bg-success-background",
    title: "text-success-foreground",
    message: "text-success-foreground",
    icon: CircleCheck,
    iconColor: "#16A34A",
  },

  warning: {
    container: "border-warning bg-warning-background",
    title: "text-warning-foreground",
    message: "text-warning-foreground",
    icon: TriangleAlert,
    iconColor: "#FD9E12",
  },

  error: {
    container: "border-error bg-error-background",
    title: "text-error-foreground",
    message: "text-error-foreground",
    icon: CircleX,
    iconColor: "#F5222D",
  },
};

export default function Alert({
    variant = "info",
    title,
    children,
    className = "",
    ...props
}: AlertProps) {
  const styles = alertStyles[variant];
  const Icon = styles.icon;

  return (
      <View
          {...props}
          accessibilityRole="alert"
          className={`
            w-full
            flex-row
            rounded-xl
            border
            p-4
            ${styles.container}
            ${className}
          `}
      >
        <View className="mr-3 pt-0.5">
          <Icon
            size={22}
            color={styles.iconColor}
            strokeWidth={2}
          />
        </View>

        <View className="flex-1">
          {title && (
              <Text
                className={`
                  text-base
                  font-semibold
                  ${styles.title}
                `}
              >
                {title}
              </Text>
          )}

          <Text
            className={`
              text-sm
              leading-5
              ${title ? "mt-1" : ""}
              ${styles.message}
            `}
          >
            {children}
          </Text>
        </View>
      </View>
  );
}
