import GraphOptions from "../configs/GraphOptions";
import { createOptions } from "../utils/OptionsUtils";
import StockDatapoint from "../types/StockDatapoint";
import {
  SeriesAreaOptions,
  SeriesOptions,
  SeriesOptionsType,
} from "highcharts";

describe("OptionsUtils", () => {
  describe("createOptions", () => {
    let defaultOptions: Highcharts.Options;

    beforeEach(() => {
      defaultOptions = GraphOptions;
    });

    it("should return new object", () => {
      const newOptions = createOptions(defaultOptions, "", []);

      expect(newOptions === defaultOptions).toBeFalsy();
    });

    it("should return options with new data", () => {
      const timestamp = Date.parse("01-01-2023").valueOf();
      const datapoint: StockDatapoint = [timestamp, 123.12];
      const newOptions = createOptions(defaultOptions, "", [datapoint]);
      const firstSeries = newOptions.series![0] as SeriesAreaOptions;

      expect(newOptions.series).toHaveLength(1);
      expect(firstSeries.data).toStrictEqual([datapoint]);
    });

    it("should return options with new title", () => {
      const title = "New title";
      const newOptions = createOptions(defaultOptions, title, []);

      expect(newOptions.title!.text).toBe(title);
    });
  });
});
