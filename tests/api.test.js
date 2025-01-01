import { getLitterReports, createLitterReport, getLitterReport, deleteLitterReport, updateLitterReport } from "../src/services/litterService";
import logToFile from "./util/logToFile";

describe("API tests", () => {
  test("getLitterReports", async () => {
    const litterReports = await getLitterReports();
    // logToFile("get all :" + litterReports, "litterReports.json");
    expect(litterReports).toBeDefined();
  });

  test("createLitterReport", async () => {
    const litterReport = await createLitterReport({
      recordId: 1,
      longitude: 1,
      description: "test",
    });
    expect(litterReport).toBeDefined();
  });

  test("getLitterReport", async () => {
    const litterReport = await getLitterReport(1);
    // logToFile("get record :" + litterReport, "litterReports.json");
    expect(litterReport).toBeDefined();
  });

  test("updateLitterReport", async () => {
    const litterReport = await updateLitterReport(1, {
      longitude: 2,
      description: "test",
    });
    // logToFile("update record :" + litterReport, "litterReports.json");
    expect(litterReport).toBeDefined();
  });

  test("deleteLitterReport", async () => {
    const litterReport = await deleteLitterReport(1);
    // logToFile("delete record :" + litterReport, "litterReports.json");
    expect(litterReport).toBeDefined();
  });
});
