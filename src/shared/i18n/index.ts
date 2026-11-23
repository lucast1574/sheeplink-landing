import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es.ts";
import en from "./en.ts";
import pt from "./pt.ts";
import systemTemplates from "./system-templates.ts";
import { resolveLanguage, type Language } from "./language.ts";
export {
  resolveLanguage,
  SUPPORTED_LANGUAGES,
  type Language,
} from "./language.ts";

const environment = (
  globalThis as typeof globalThis & {
    process?: { env?: Record<string, string> };
  }
).process?.env;
const pathLanguage =
  typeof location === "undefined"
    ? undefined
    : /^\/(es|en|pt)(?:\/|$)/.exec(location.pathname)?.[1];
export const language: Language = resolveLanguage(
  pathLanguage
    ? [pathLanguage]
    : typeof window === "undefined"
      ? [environment?.SHEEPLINK_LANGUAGE ?? "es"]
      : ["es"],
);
export const locale = { es: "es-PE", en: "en-US", pt: "pt-BR" }[language];
export const i18n = createInstance();
void i18n.use(initReactI18next).init({
  lng: language,
  fallbackLng: "es",
  supportedLngs: ["es", "en", "pt"],
  resources: {
    es: { translation: es },
    en: { translation: en },
    pt: { translation: pt },
  },
  keySeparator: false,
  nsSeparator: false,
  initAsync: false,
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});
/** Source copy is the Spanish fallback. Values are interpolated after lookup. */
export function translate(
  source: string,
  values: Record<string, unknown> = {},
): string {
  return i18n.t(source, { ...values, defaultValue: source }) as string;
}
/** Only known system messages are translated; user-authored content stays intact. */
const messagePatterns = systemTemplates.map((key) => ({
  key,
  names: [...key.matchAll(/\{\{(p\d+)\}\}/g)].map((match) => match[1]),
  pattern: new RegExp(
    "^" +
      key
        .split(/\{\{p\d+\}\}/)
        .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("([\\s\\S]*?)") +
      "$",
  ),
}));
export function systemMessage(source: string): string {
  if (Object.prototype.hasOwnProperty.call(es, source))
    return translate(source);
  for (const { key, names, pattern } of messagePatterns) {
    const match = pattern.exec(source);
    if (match)
      return translate(
        key,
        Object.fromEntries(
          names.map((name, index) => [name, match[index + 1]]),
        ),
      );
  }
  if (source.includes("\n\n"))
    return source
      .split("\n\n")
      .map((paragraph) => systemMessage(paragraph.trim()))
      .join("\n\n");
  return source;
}
export function localizedPath(
  href: string,
  selected: Language = language,
): string {
  if (
    selected === "es" ||
    !href.startsWith("/") ||
    href.startsWith("//") ||
    /^\/(es|en|pt)(?:\/|$)/.test(href) ||
    /^\/(api|assets|fonts|brand|app|blog)(?:\/|$|[?#])/.test(href)
  )
    return href;
  return "/" + selected + (href === "/" ? "" : href);
}

if (typeof document !== "undefined") document.documentElement.lang = language;
