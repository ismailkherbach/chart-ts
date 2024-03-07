import { useCallback, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useGetSeriesQuery } from "../services/query/series";
import { IGetSeriesResponse } from "../common/types/api/getSeries";
import { ChartProps } from "../common/types/chart";

type IChartProps = {
  chart: ChartProps;
};
const UseChart = ({ chart }: IChartProps) => {
  const { chartType, title, axisConfig, styling, id } = chart;
  const { isLoading, isError, data } = useGetSeriesQuery();
  const chartRef = useRef<Chart>();

  const renderChart = useCallback(
    (data: IGetSeriesResponse) => {
      const ctx = document.getElementById(`myChart+${id}`) as HTMLCanvasElement;
      if (!ctx) return;

      const labels = data.observations.map((item) => item.date);
      const values = data.observations.map((item) => parseFloat(item.value));

      destroyChart();

      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              data: values,
              ...styling,
            },
          ],
        },
        options: {
          scales: {
            x: axisConfig?.xAxis,
            y: axisConfig?.yAxis,
          },
        },
      });
    },
    [axisConfig?.xAxis, axisConfig?.yAxis, chartType, id, styling, title]
  );

  useEffect(() => {
    if (!isLoading && !isError && data) {
      renderChart(data);
    }
    return () => {
      destroyChart();
    };
  }, [isLoading, isError, data, renderChart]);

  const destroyChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  };
  if (isLoading) return <>Loading ...</>;
  return <canvas id={`myChart+${id}`} />;
};

export default UseChart;
