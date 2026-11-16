import { structuredData } from "./structuredData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  pageMetadata,
  SITE_URL,
  pageAlternates,
  SOCIAL_IMAGE_ALT,
  OG_LOCALE,
} from "./shared/config/seo";
import { localizedPath } from "./shared/i18n/index.ts";
export default function SeoMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageMetadata(pathname);
    if (!page) return;
    document.title = page.title;
    const schema = document.querySelector("#public-structured-data");
    if (schema)
      schema.textContent = JSON.stringify(
        structuredData(page.path, true),
      ).replace(/</g, "\\u003c");
    for (const [selector, value] of [
      ['meta[name="description"]', page.description],
      ['meta[property="og:title"]', page.title],
      ['meta[name="twitter:title"]', page.title],
      ['meta[property="og:description"]', page.description],
      ['meta[name="twitter:description"]', page.description],
      ['meta[property="og:url"]', SITE_URL + localizedPath(page.path)],
      ['meta[property="og:locale"]', OG_LOCALE],
      ['meta[property="og:image:alt"]', SOCIAL_IMAGE_ALT],
      ['meta[name="twitter:image:alt"]', SOCIAL_IMAGE_ALT],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", SITE_URL + localizedPath(page.path));
    for (const alternate of pageAlternates(page.path)) {
      let link = document.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${alternate.language}"]`,
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = alternate.language;
        document.head.append(link);
      }
      link.href = alternate.href;
    }
  }, [pathname]);
  return null;
}
