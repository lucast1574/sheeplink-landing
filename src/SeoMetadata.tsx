import { structuredData } from "./structuredData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMetadata, SITE_URL } from "./shared/config/seo";
export default function SeoMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageMetadata(pathname);
    if (!page) return;
    document.title = page.title;
    const schema = document.querySelector("#public-structured-data");
    if (schema)
      schema.textContent = JSON.stringify(structuredData(page.path)).replace(
        /</g,
        "\\u003c",
      );
    for (const [selector, value] of [
      ['meta[name="description"]', page.description],
      ['meta[property="og:title"]', page.title],
      ['meta[name="twitter:title"]', page.title],
      ['meta[property="og:description"]', page.description],
      ['meta[name="twitter:description"]', page.description],
      ['meta[property="og:url"]', SITE_URL + page.path],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", SITE_URL + page.path);
  }, [pathname]);
  return null;
}
