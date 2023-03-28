import DataService from "../../service/DataService";
import { beforeAll, describe, expect, it } from "@jest/globals";

describe("DataService", () => {
  describe("processAplhaVantageStockData", () => {
    let sut: Function;

    beforeAll(() => {
      sut = DataService.processAplhaVantageStockData;
    });

    it("should return empty list for empty data", () => {
      const emptyData = {
        "Time Series (Daily)": {},
      };

      const actual = sut(emptyData);
      expect(actual).toStrictEqual([]);
    });
  });
});
