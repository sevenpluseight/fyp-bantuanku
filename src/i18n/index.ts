import i18n from "i18next";
import { SupportedLanguage } from "./types";
import { getStoredLanguage, isSupportedLanguage, storeLanguage } from "./language";
import { getLocales } from "expo-localization";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ms from "./locales/ms";
import zh from "./locales/zh";

const getInitialLanguage =
    (): SupportedLanguage => {
      const storedLanguage = getStoredLanguage();

      if (storedLanguage) {
        return storedLanguage;
      }

      const deviceLanguage = getLocales()[0]?.languageCode;

      if (deviceLanguage && isSupportedLanguage(deviceLanguage)) {
        return deviceLanguage;
      }

      return "en";
    };

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ms,
      zh,
    },

    lng: getInitialLanguage(),
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export async function changeLanguage(
    language: SupportedLanguage
) {
  await i18n.changeLanguage(language);
  storeLanguage(language);
}

export default i18n;
