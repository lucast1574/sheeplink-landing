import { APP_URL } from "./seo";
declare global {
  interface Window {
    __SHEEPLINK_CONFIG__?: { appUrl?: string };
  }
}
export const appPath = (path: string) =>
  `${typeof window === "undefined" ? APP_URL : (window.__SHEEPLINK_CONFIG__?.appUrl ?? APP_URL)}${path}`;
