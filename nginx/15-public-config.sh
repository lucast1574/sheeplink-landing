#!/bin/sh
set -eu
site_app_url="${PUBLIC_APP_URL:-}"
case "$site_app_url" in *[!A-Za-z0-9:/.-]*) echo "PUBLIC_APP_URL contains invalid characters" >&2;exit 1;; esac
if ! printf '%s\n' "$site_app_url" | grep -Eq '^https?://[A-Za-z0-9.-]+(:[0-9]+)?/?$'; then
 echo "PUBLIC_APP_URL must be an HTTP(S) origin" >&2;exit 1
fi
site_app_url="${site_app_url%/}"
printf 'window.__SHEEPLINK_CONFIG__={"appUrl":"%s"};\n' "$site_app_url" > "${PUBLIC_CONFIG_PATH:-/usr/share/nginx/html/config.js}"
