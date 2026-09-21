import { Text, View, type ViewProps } from "react-native";
import { ReactNode } from "react";

export type SectionProps = ViewProps & {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
    title,
    description,
    children,
    className = "",
    ...props
}: SectionProps) {
  return (
      <View
          {...props}
          className={className}
      >
        {(title || description) && (
            <View className="mb-4">
              {title && (
                  <Text className="text-lg font-semibold text-foreground">
                    {title}
                  </Text>
              )}

              {description && (
                  <Text className="mt-1 text-sm leading-5 text-muted-foreground">
                    {description}
                  </Text>
              )}
            </View>
        )}

        {children}
      </View>
  );
}
