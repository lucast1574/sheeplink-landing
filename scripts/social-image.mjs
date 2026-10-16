import fs from "node:fs/promises";
import sharp from "sharp";
const logo = await fs.readFile("public/brand/sheeplink-logo-green.svg");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#fff"/><image href="data:image/svg+xml;base64,${logo.toString("base64")}" x="105" y="180" width="990" height="270"/></svg>`;
await fs.writeFile("public/og-sheeplink-20261016.svg", svg);
await sharp(Buffer.from(svg))
  .png({ palette: true, quality: 100, compressionLevel: 9 })
  .toFile("public/og-sheeplink-20261016.png");
