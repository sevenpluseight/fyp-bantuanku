import { SupportedLanguage } from "./types";

export const LANGUAGE_STORAGE_KEY = "bantuanku-language";

export const supportedLanguages: readonly SupportedLanguage[] = [
  "en",
  "ms",
  "zh",
];

export const languageOptions: {
  label: string;
  value: SupportedLanguage;
}[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Bahasa Melayu",
    value: "ms",
  },
  {
    label: "中文",
    value: "zh",
  },
];

export function isSupportedLanguage(
    language: string
): language is SupportedLanguage {
  return supportedLanguages.includes(
      language as SupportedLanguage
  );
}

// export async function changeLanguage(
//     language: SupportedLanguage
// ) {
//   await i18n.changeLanguage(language);
//
//   localStorage.setItem(
//       LANGUAGE_STORAGE_KEY,
//       language
//   );
// }

export function storeLanguage(
    language: SupportedLanguage
) {
  localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language
  );
}

export function getStoredLanguage():
  | SupportedLanguage
  | null {
  const language = localStorage.getItem(
      LANGUAGE_STORAGE_KEY
  );

  if (language && isSupportedLanguage(language)) {
    return language;
  }

  return null;
}
