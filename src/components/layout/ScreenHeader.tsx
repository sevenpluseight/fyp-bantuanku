import {Pressable, Text, View, type ViewProps} from "react-native";
import {ArrowLeft} from "lucide-react-native";

export type ScreenHeaderProps = ViewProps & {
  title: string;
  description?: string;
  onBack?: () => void;
};

export default function ScreenHeader({
    title,
    description,
    onBack,
    className = "",
    ...props
}: ScreenHeaderProps) {
  return (
      <View
          {...props}
          className={className}
      >
        <View className="flex-row items-center">
          {onBack && (
              <Pressable
                onPress={onBack}
                accessibilityRole="button"
                hitSlop={8}
                className="mr-3 h-10 w-10 items-center justify-center"
              >
                <ArrowLeft size={24} color="#111827" />
              </Pressable>
          )}

          <Text className="flex-1 text-2xl font-bold text-foreground">
            {title}
          </Text>
        </View>

        {description && (
            <Text
              className={`
                mt-2
                text-base
                leading-6
                text-muted-foreground
                ${onBack ? "ml-[52px]" : ""}
              `}
            >
              {description}
            </Text>
        )}
      </View>
  );
}
