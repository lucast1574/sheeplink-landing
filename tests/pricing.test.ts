import { test } from "node:test";
import assert from "node:assert/strict";
import { pricingCopy } from "../src/features/landing/pricing.ts";
const plan = {
  id: "nuevo",
  name: "Nuevo",
  description: "Plan",
  amount: 3750,
  currency: "usd",
  trialDays: 12,
  maxUsers: 10,
  maxMembers: 20,
  maxCells: 2,
  maxMinistries: 1,
};
test("todos los avisos comerciales cambian con el importe, nombre y prueba del catálogo", () => {
  const copy = pricingCopy([plan]);
  for (const text of [copy.introduction, copy.terms, copy.faq, copy.legal]) {
    assert.match(text, /Nuevo/);
    assert.match(text, /12 días/);
    assert.match(text, /US\$37.5/);
    assert.doesNotMatch(text, /Redil|US\$25|7 días/);
  }
  assert.equal(copy.cta, "Empezar mis 12 días gratis");
  assert.equal(copy.registrationPath, "/registro?plan=nuevo");
});
test("sin pruebas el registro y las condiciones indican pago desde el inicio", () => {
  const copy = pricingCopy([{ ...plan, trialDays: 0 }]);
  assert.equal(copy.cta, "Elegir mi plan");
  assert.match(copy.disclosure, /Pago desde el inicio/);
  assert.doesNotMatch(copy.faq, /gratis|Sí/);
  assert.equal(copy.navCta, "Elegir plan");
});
