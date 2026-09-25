import {useTranslation} from "react-i18next";
import {Text, View} from "react-native";
import {Check} from "lucide-react-native";

type RegistrationProgressProps = {
  currentStep: number;
};

export default function RegistrationProgress({
    currentStep
}: RegistrationProgressProps) {
  const { t } = useTranslation();

  const steps = [
    t("auth.register.progress.account"),
    t("auth.register.progress.personal"),
    t("auth.register.progress.residence"),
    t("auth.register.progress.household"),
  ];

  return (
      <View className="mb-8">
        <View className="flex-row items-start">
          {steps.map((label, index) => {
            const step = index + 1;
            const isCompleted = step < currentStep;
            const isCurrent = step === currentStep;

            return (
                <View
                  key={step}
                  className="flex-1 items-center"
                >
                  <View className="w-full flex-row items-center">
                    <View className="h-0.5 flex-1">
                      {index > 0 && (
                          <View
                            className={`
                              h-0.5
                              w-full
                              ${
                                step <= currentStep
                                    ? "bg-primary"
                                    : "bg-border"
                              }
                            `}
                          />
                      )}
                    </View>

                    <View
                      className={`
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        ${
                          isCompleted
                              ? "border-primary bg-primary"
                              : isCurrent
                                  ? "border-primary bg-primary"
                                  : "border-border bg-background"
                        }
                      `}
                    >
                      {isCompleted ? (
                          <Check size={17} strokeWidth={3} color="#FFFFFF" />
                      ) : (
                          <Text
                            className={`
                              text-sm
                              font-semibold
                              ${
                                isCurrent
                                    ? "text-white"
                                    : "text-muted-foreground"  
                              }
                            `}
                          >
                            {step}
                          </Text>
                      )}
                    </View>

                    <View className="h-0.5 flex-1">
                      {index < steps.length - 1 && (
                          <View
                            className={`
                              h-0.5
                              w-full
                              ${
                                step < currentStep 
                                    ? "bg-primary"
                                    : "bg-border"
                              }
                            `}
                          />
                      )}
                    </View>
                  </View>

                  <Text
                    numberOfLines={1}
                    className={`
                      mt-2
                      text-center
                      text-xs
                      ${
                        isCurrent
                          ? "font-semibold text-primary"
                          : isCompleted
                              ? "font-medium text-foreground"
                              : "text-muted-foreground"
                      }
                    `}
                  >
                    {label}
                  </Text>
                </View>
            );
          })}
        </View>
      </View>
  );
}
