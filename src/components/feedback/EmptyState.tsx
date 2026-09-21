import { Text, View, type ViewProps } from "react-native";
import { LucideIcon } from "lucide-react-native";

export type EmptyStateProps = ViewProps & {
  icon?: LucideIcon;
  title: string;
  description?: string;
};

export default function EmptyState({
    icon: Icon,
    title,
    description,
    className = "",
    ...props
}: EmptyStateProps) {
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
        {Icon && (
            <View className="mb-4 items-center justify-center rounded-full bg-secondary p-4">
              <Icon
                size={28}
                color="#626775"
                strokeWidth={2}
              />
            </View>
        )}

        <Text className="text-center text-lg font-semibold text-foreground">
          {title}
        </Text>

        {description && (
            <Text className="mt-2 text-center text-sm leading-5 text-muted-foreground">
              {description}
            </Text>
        )}
      </View>
  );
}
