import { Pressable, Text, View } from "react-native";
import Card from "../ui/Card";
import { Building2, ChevronRight } from "lucide-react-native";
import Badge from "../ui/Badge";

type ProgramStatus = "recommended" | "unknown";

export type ProgramCardProps = {
  name: string;
  provider: string;
  description: string;
  status?: ProgramStatus;
  onPress?: () => void;
};

const statusConfig: Record<
    ProgramStatus,
    {
      label: string;
      variant: "success" | "warning";
    }
> = {
  recommended: {
    label: "You may be eligible",
    variant: "success",
  },

  unknown: {
    label: "More information needed",
    variant: "warning",
  }
}

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
                  <Badge
                    variant={statusConfig[status].variant}
                    className="mb-3"
                  >
                    {statusConfig[status].label}
                  </Badge>
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
