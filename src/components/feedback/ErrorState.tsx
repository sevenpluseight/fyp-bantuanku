import { Text, View, type ViewProps } from "react-native";
import { CircleAlert, LucideIcon } from "lucide-react-native";
import Button from "../ui/Button";

export type ErrorStateProps = ViewProps & {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export default function ErrorState({
    icon: Icon = CircleAlert,
    title = "Something went wrong",
    description = "We couldn't load this information. Please try again.",
    onRetry,
    className = "",
    ...props
}: ErrorStateProps) {
  return (
      <View
          {...props}
          className={`
            items-center
            px-6
            py-10
            ${className}
          `}
      >
        <View className="mb-4 items-center justify-center rounded-full bg-error-background p-4">
          <Icon
            size={28}
            color="#F5222D"
            strokeWidth={2}
          />
        </View>

        <Text className="text-center text-lg font-semibold text-foreground">
          {title}
        </Text>

        {description && (
            <Text className="mt-2 items-center text-sm leading-5 text-muted-foreground">
              {description}
            </Text>
        )}

        {onRetry && (
            <Button
              variant="outline"
              onPress={onRetry}
              className="mt-6"
            >
              Try Again
            </Button>
        )}
      </View>
  );
}
