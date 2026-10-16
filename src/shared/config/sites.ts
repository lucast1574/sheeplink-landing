declare global {
  interface Window {
    __SHEEPLINK_CONFIG__?: { appUrl?: string };
  }
}
export const appPath = (path: string) =>
  `${window.__SHEEPLINK_CONFIG__?.appUrl ?? "http://localhost:3000"}${path}`;
