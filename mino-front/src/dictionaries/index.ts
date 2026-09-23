import type ruDictionary from "./ru.json";

export const LOCALES = ["ru"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ru";

export type Dictionary = typeof ruDictionary;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale = DEFAULT_LOCALE): Promise<Dictionary> =>
  dictionaries[locale]();
