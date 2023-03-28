import { Drug, Pharmacy } from "./pharmacy";
import { verify } from "approvals/lib/Providers/Jest/JestApprovals";

describe("Pharmacy", () => {
  it("approve main case", () => {
    const drugs = [
      new Drug("test", 1, 2)];
    const trial = new Pharmacy(drugs);

    const log = [];
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.stringify(trial.updateBenefitValue()));
    }

    /* eslint-disable no-console */
    verify(log.toString());
  });

});
