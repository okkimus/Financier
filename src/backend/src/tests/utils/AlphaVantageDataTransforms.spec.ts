import {
  processAplhaVantageStockData,
  transformTickerSearchResult,
} from "../../utils/AlphaVantageDataTransforms";
import { beforeAll, describe, expect, it } from "@jest/globals";

describe("AlphaVantageDataTransforms", () => {
  describe("processAplhaVantageStockData", () => {
    it("should return empty list for empty data", () => {
      const emptyData = {
        "Time Series (Daily)": {},
      };
      const actual = processAplhaVantageStockData(emptyData);
      expect(actual).toStrictEqual([]);
    });

    it("should return list with one datapoint when one datapoint exists", () => {
      const data = {
        "Time Series (Daily)": {
          "2023-03-27": {
            "1. open": "159.94",
            "2. high": "160.77",
            "3. low": "157.87",
            "4. close": "158.28",
            "5. adjusted close": "158.28",
            "6. volume": "52390266",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0",
          },
        },
      };
      const actual = processAplhaVantageStockData(data);
      expect(actual).toHaveLength(1);
      const datapoint = actual[0];
      expect(datapoint[0]).toBe(1679875200000);
      expect(datapoint[1]).toBe(158.28);
    });

    it("should return list with two datapoints when two datapoints exist", () => {
      const data = {
        "Time Series (Daily)": {
          "2023-03-27": {
            "1. open": "159.94",
            "2. high": "160.77",
            "3. low": "157.87",
            "4. close": "158.28",
            "5. adjusted close": "158.28",
            "6. volume": "52390266",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0",
          },
          "2023-03-28": {
            "1. open": "158.28",
            "2. high": "161.77",
            "3. low": "159.70",
            "4. close": "161.28",
            "5. adjusted close": "161.28",
            "6. volume": "52390255",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0",
          },
        },
      };
      const actual = processAplhaVantageStockData(data);
      expect(actual).toHaveLength(2);
      const datapoint1 = actual[0];
      expect(datapoint1[0]).toBe(1679875200000);
      expect(datapoint1[1]).toBe(158.28);
      const datapoint2 = actual[1];
      expect(datapoint2[0]).toBe(1679961600000);
      expect(datapoint2[1]).toBe(161.28);
    });

    it("should return list with points in time order", () => {
      const data = {
        "Time Series (Daily)": {
          "2023-03-27": {
            "4. close": "161.28",
          },
          "2023-03-28": {
            "4. close": "161.28",
          },
          "2023-03-26": {
            "4. close": "161.28",
          },
        },
      };

      const actual = processAplhaVantageStockData(data);

      expect(actual).toHaveLength(3);
      expect(actual[0][0]).toBe(1679788800000);
      expect(actual[1][0]).toBe(1679875200000);
      expect(actual[2][0]).toBe(1679961600000);
    });
  });

  describe("transformTickerSearchResult", () => {
    it("should return empty list if tickers are not found", () => {
      const actual = transformTickerSearchResult({});

      expect(actual).toHaveLength(0);
      expect(actual).toStrictEqual([]);
    });

    it("should return list with correctly mapped ticker details", () => {
      const actual = transformTickerSearchResult({
        bestMatches: [
          {
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273",
          },
        ],
      });

      expect(actual).toHaveLength(1);

      const tickerDetails = actual[0];
      expect(tickerDetails.name).toBe("Tesco PLC");
      expect(tickerDetails.symbol).toBe("TSCO.LON");
      expect(tickerDetails.region).toBe("United Kingdom");
      expect(tickerDetails.currency).toBe("GBX");
    });
  });
});
