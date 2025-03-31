import { en } from "./en";
import { zhCn } from "./zhCn";
import { es } from "./es";
import { cs } from "./cs";
import { zhHant } from "./zhHant";
import { config } from "../consts";
const ui = {
  es,
  en,
  "zh-cn": zhCn,
  "zh-Hant": zhHant,
  cs,
} as const;
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key];
  };
}

export const t = useTranslations(config.lang as keyof typeof ui);
