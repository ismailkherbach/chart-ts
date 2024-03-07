import { ChartOptions, ChartType } from "chart.js";

export type ChartProps = {
  chartType: ChartType;
  title: string;
  xAxisConfig?: ChartOptions["scales"];
  yAxisConfig?: ChartOptions["scales"];
  styling?: Styling;
  axisConfig?: AxixConfig;
  id?: number;
};

export type Styling = {
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  fill: boolean;
  axisConfig?: AxixConfig;
};

export type AxixConfig = {
  xAxis: { title: { display: boolean; text: string } };
  yAxis: { title: { display: boolean; text: string } };
};
