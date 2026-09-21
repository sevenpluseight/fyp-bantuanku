import {Pressable, Text, View} from "react-native";
import Card from "../ui/Card";
import {Building2, ChevronRight} from "lucide-react-native";

type ProgramStatus = "recommended" | "unknown";

export type ProgramCardProps = {
  name: string;
  provider: string;
  description: string;
  status?: ProgramStatus;
  onPress?: () => void;
};

const statusStyles: Record<
    ProgramStatus,
    {
      label: string;
      container: string;
      text: string;
    }
> = {
  recommended: {
    label: "You may be eligible",
    container: "bg-success-background",
    text: "text-success-foreground",
  },

  unknown: {
    label: "More information needed",
    container: "bg-warning-background",
    text: "text-warning-foreground",
  },
};

export default function ProgramCard({
    name,
    provider,
    description,
    status,
    onPress,
}: ProgramCardProps) {
  return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${name}, provided by ${provider}`}
        onPress={onPress}
        disabled={!onPress}
      >
        <Card>
          <View className="flex-row items-start">
            <View className="flex-1 pr-3">
              {status && (
                  <View
                    className={`
                      mb-3
                      self-start
                      rounded-full
                      px-3
                      py-1
                      ${statusStyles[status].container}
                    `}
                  >
                    <Text
                      className={`
                        text-xs
                        font-semibold
                        ${statusStyles[status].text}
                      `}
                    >
                      {statusStyles[status].label}
                    </Text>
                  </View>
              )}

              <Text className="text-lg font-semibold leading-6 text-foreground">
                {name}
              </Text>

              <View className="mt-2 flex-row items-center">
                <Building2
                  size={16}
                  color="#626775"
                  strokeWidth={2}
                />

                <Text className="ml-2 flex-1 text-sm text-muted-foreground">
                  {provider}
                </Text>
              </View>

              <Text
                className="mt-3 text-sm leading-5 text-muted-foreground"
                numberOfLines={3}
              >
                {description}
              </Text>
            </View>

            {onPress && (
                <View className="pt-1">
                  <ChevronRight
                    size={22}
                    color="#626775"
                    strokeWidth={2}
                  />
                </View>
            )}
          </View>
        </Card>
      </Pressable>
  );
}
