export type Language = "es" | "en" | "pt";
export const SUPPORTED_LANGUAGES: readonly Language[] = ["es", "en", "pt"];
export function resolveLanguage(preferences: readonly string[] = []): Language {
  for (const preference of preferences) {
    const base = preference
      .trim()
      .replace(/_/g, "-")
      .split("-")[0]
      .toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(base as Language)) return base as Language;
  }
  return "es";
}
