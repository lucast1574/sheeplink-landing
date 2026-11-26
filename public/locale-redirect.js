/* Choose a localized URL before the page renders. */
(() => {
  const languages = ["es", "en", "pt"];
  const preferenceKey = "sheeplink-site-language";
  const pages = [
    "/",
    "/software-para-iglesias",
    "/terminos",
    "/privacidad",
    "/cookies",
    "/soporte",
  ];
  const pathname = location.pathname.replace(/\/$/, "") || "/";

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-site-language]");
    if (
      !link ||
      event.defaultPrevented ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const chosen = link.dataset.siteLanguage;
    if (!languages.includes(chosen)) return;
    try {
      localStorage.setItem(preferenceKey, chosen);
    } catch {
      // The language link still works when storage is unavailable.
    }
  });

  if (!pages.includes(pathname)) return;
  let chosen;
  try {
    chosen = localStorage.getItem(preferenceKey);
  } catch {
    // Browser language remains available when storage is unavailable.
  }

  const preferences = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  const browserLanguage = preferences
    .map((value) => value?.trim().toLowerCase().split(/[-_]/)[0])
    .find((value) => languages.includes(value));
  const language = languages.includes(chosen) ? chosen : browserLanguage;
  if (language === "en" || language === "pt") {
    location.replace(
      "/" +
        language +
        (pathname === "/" ? "" : pathname) +
        location.search +
        location.hash,
    );
  }
})();
