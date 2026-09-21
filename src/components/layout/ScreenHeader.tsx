import { Text, View, type ViewProps } from "react-native";

export type ScreenHeaderProps = ViewProps & {
  title: string;
  description?: string;
};

export default function ScreenHeader({
    title,
    description,
    className = "",
    ...props
}: ScreenHeaderProps) {
  return (
      <View
          {...props}
          className={className}
      >
        <Text className="text-2xl font-bold text-foreground">
          {title}
        </Text>

        {description && (
            <Text className="mt-2 text-base leading-6 text-muted-foreground">
              {description}
            </Text>
        )}
      </View>
  );
}
