import styled from "styled-components";
import { Container, Row } from "../../components/reusable/Layouts";
import { ChartType } from "chart.js";
import { useCallback, useState } from "react";
import ChartForm from "../../components/Chart/AddChart";
import UseChart from "../../hooks/useChart";
import Button from "../../components/reusable/Button";
import { AxixConfig, ChartProps, Styling } from "../../common/types/chart";

const ChartPage = () => {
  const [charts, setCharts] = useState<ChartProps[]>([]);

  const addChart = (
    title: string,
    type: ChartType,
    styling: Styling,
    axisConfig: AxixConfig
  ) => {
    const newChart = {
      chartType: type,
      title,
      styling,
      id: charts.length + 1,
      axisConfig,
    };
    setCharts((prevChartData) => [...prevChartData, newChart]);
  };
  const onRemoveChart = useCallback((id: number) => {
    setCharts((prevCharts) => prevCharts.filter((chart) => chart.id !== id));
  }, []);

  return (
    <Row width="100%" alignItems="flex-start">
      <StyledContainer flex="1">
        <Title>Add Chart</Title>
        <ChartForm addChart={addChart} />
      </StyledContainer>
      <StyledContainer flex="2">
        <Title>Charts Display</Title>

        {charts.map((chart, i) => {
          return (
            <ChartWrapper key={chart.id}>
              <UseChart chart={chart} />
              <StyledButton onClick={() => onRemoveChart(chart.id as number)}>
                Remove Chart
              </StyledButton>
            </ChartWrapper>
          );
        })}
      </StyledContainer>
    </Row>
  );
};

export default ChartPage;

const StyledContainer = styled(Container)`
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: flex-start;
  padding: 1em 0;
`;

const Title = styled.h2`
  padding: 1em 0;
  color: grey;
`;

const StyledButton = styled(Button)`
  background-color: red;
  min-height: 2.5em;
  border-radius: ${(props) => props.theme.borderRadius.primary};
  width: 12em;
  color: white;
  margin: 1em 0;
`;
const ChartWrapper = styled(Container)`
  width: 80%;
  align-items: flex-end;
  border-bottom: 0.1em solid lightgrey;
`;
