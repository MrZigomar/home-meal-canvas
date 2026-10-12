import { describe, expect, it } from "vitest";
import { cgvRules } from "../data/cgv";

describe("Conditions commerciales fournies par Julien", () => {
  it("annulation : délai de 48 heures", () => expect(cgvRules.cancellationNoticeHours).toBe(48));
  it("annulation : forfait possible de 30 %", () => expect(cgvRules.cancellationFeePercent).toBe(30));
  it("réponse du client sous 48 heures", () => expect(cgvRules.clientResponseHours).toBe(48));
  it("modalités connues 48 heures avant la prestation", () => expect(cgvRules.preparationNoticeHours).toBe(48));
  it("retard client : pénalité possible de 25 %", () => expect(cgvRules.clientDelayFeePercent).toBe(25));
  it("crédit d'impôt de 50 %", () => expect(cgvRules.taxCreditPercent).toBe(50));
  it("attestation avant le 31 mars", () => expect(cgvRules.taxCertificateDeadline).toEqual({ day: 31, month: 3 }));
  it("médiation après deux mois sans réponse", () => expect(cgvRules.mediationNoResponseMonths).toBe(2));
  it("saisine du médiateur dans l'année", () => expect(cgvRules.mediationDeadlineYears).toBe(1));
});
