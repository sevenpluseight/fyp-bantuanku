import { useTranslation } from "react-i18next";
import { SupportedLanguage } from "../../i18n/types";
import { languageOptions } from "../../i18n/language";
import { changeLanguage } from "../../i18n";
import { Pressable, Text, View } from "react-native";

export default function LanguageSwitcher() {
  const {i18n} = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const handleLanguageChange = (
      language: SupportedLanguage
  ) => {
    void changeLanguage(language);
  };

  return (
      <View
          className="flex-row items-center justify-center gap-2"
          accessibilityRole="radiogroup"
      >
        {languageOptions.map((option) => {
          const selected = currentLanguage === option.value;

          return (
              <Pressable
                  key={option.value}
                  onPress={() => handleLanguageChange(option.value)}
                  accessibilityRole="radio"
                  accessibilityState={{checked: selected}}
                  className={`
                    min-h-11
                    items-center
                    justify-center
                    rounded-full
                    px-4
                  ${
                    selected
                        ? "bg-primary"
                        : "border border-border bg-background"
                  }
                `}
              >
                <Text
                    className={`text-sm font-medium ${
                        selected
                            ? "text-white"
                            : "text-foreground"
                    }`}
                >
                  {option.label}
                </Text>
              </Pressable>
          );
        })}
      </View>
  );
}
