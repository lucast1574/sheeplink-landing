import { test } from "node:test";
import assert from "node:assert/strict";
import { pricingCopy, capacityCopy } from "../src/features/landing/pricing.ts";
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

test("anuales muestran cobro anual sin ofrecer prueba", () => {
  const copy = pricingCopy([
    { ...plan, interval: "year", amount: 37500, trialDays: 0 },
  ]);
  assert.match(copy.terms, /US\$375\/año/);
  assert.match(copy.terms, /Sin prueba gratuita/);
  assert.equal(copy.navCta, "Elegir plan");
});

test("la respuesta para una iglesia grande selecciona capacidad suficiente y refleja el catálogo", () => {
  const unlimited = {
    ...plan,
    name: "Amplio",
    id: "amplio",
    amount: 6500,
    maxMembers: null,
  };
  const annual = {
    ...unlimited,
    id: "amplio-anual",
    interval: "year",
    amount: 60000,
  };
  const copy = capacityCopy([plan, unlimited, annual]);
  assert.match(copy, /Amplio.*US\$65 al mes/);
  assert.match(copy, /US\$600 por año/);
  assert.match(copy, /no tiene límite/);
  assert.doesNotMatch(copy, /Mies|US\$50|US\$500/);
  const bounded = capacityCopy([{ ...plan, name: "Grande", maxMembers: 1600 }]);
  assert.match(bounded, /Grande/);
  assert.match(bounded, /si tu iglesia supera ese límite/);
  assert.doesNotMatch(bounded, /no tiene límite|por año/);
  assert.equal(
    capacityCopy([plan]),
    "Consulta los planes vigentes para confirmar la capacidad que necesita tu iglesia.",
  );
});
