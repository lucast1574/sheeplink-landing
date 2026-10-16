const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs"),
  os = require("node:os"),
  path = require("node:path"),
  { spawnSync } = require("node:child_process");
const script = path
  .resolve(__dirname, "../nginx/15-public-config.sh")
  .replaceAll("\\", "/");
const shell =
  process.platform === "win32"
    ? "C:/Program Files/Git/bin/bash.exe"
    : "/bin/sh";
function run(origin) {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "sheeplink-public-"));
  const output = path.join(folder, "config.js");
  try {
    const result = spawnSync(shell, [script], {
      env: {
        ...process.env,
        PUBLIC_APP_URL: origin,
        PUBLIC_CONFIG_PATH: output.replaceAll("\\", "/"),
      },
      encoding: "utf8",
    });
    return {
      ...result,
      content: fs.existsSync(output) ? fs.readFileSync(output, "utf8") : "",
    };
  } finally {
    fs.rmSync(folder, { recursive: true, force: true });
  }
}
test("el destino de la app se configura al iniciar sin recompilar ni consultar la sesión", () => {
  for (const origin of [
    "https://app.example.test",
    "https://app.example.test/",
    "http://localhost:3000",
  ]) {
    const result = run(origin);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(
      result.content,
      `window.__SHEEPLINK_CONFIG__={"appUrl":"${origin.replace(/\/$/, "")}"};\n`,
    );
  }
});
test("rechaza destinos con credenciales, scripts, rutas o inyección en la configuración pública", () => {
  for (const origin of [
    "",
    "javascript:alert(1)",
    "https://user:pass@host",
    "https://app.test/path",
    "https://app.test?x=1",
    "https://app.test#x",
    'https://app.test";alert(1)',
    "https://app.test\nunsafe",
  ]) {
    const result = run(origin);
    assert.notEqual(result.status, 0, origin);
    assert.equal(result.content, "");
  }
});
