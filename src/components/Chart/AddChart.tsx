import { ChartType } from "chart.js";
import React, { useCallback, useState } from "react";
import InputField from "../reusable/Input";
import { Container, Row } from "../reusable/Layouts";
import styled from "styled-components";
import Button from "../reusable/Button";
import SelectInput, { TOption } from "../reusable/Select";
import Checkbox from "../reusable/Checkbox";
import { assertNotEmpty } from "../../utils/helpers";
import { toast } from "react-toastify";
import { AxixConfig, Styling } from "../../common/types/chart";

interface ChartFormProps {
  addChart: (
    title: string,
    type: ChartType,
    styling: Styling,
    axisConfig: AxixConfig
  ) => void;
}

const chartTypes = [
  { label: "Line", value: "line" },
  { label: "Bar", value: "bar" },
];
const ChartForm: React.FC<ChartFormProps> = ({ addChart }) => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<ChartType>("line");
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(75, 192, 192, 0.2)"
  );
  const [borderColor, setBorderColor] = useState("rgba(75, 192, 192, 1)");
  const [borderWidth, setBorderWidth] = useState(1);
  const [fill, setFill] = useState(false);

  const [axisConfig, setAxisConfig] = useState({
    xAxis: { title: { display: true, text: "X values" } },
    yAxis: { title: { display: true, text: "Y values" } },
  });

  const onTypeChange = useCallback((newValue: unknown) => {
    const option = newValue as TOption;
    setType(option.value as ChartType);
  }, []);

  const onAddChart = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      assertNotEmpty(title, type);
      const styling = {
        backgroundColor,
        borderColor,
        borderWidth,
        fill,
        axisConfig,
      };
      addChart(title, type, styling, axisConfig);
      setTitle("");
    } catch (error) {
      toast.error("Please fill the required inputs");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    axis: "xAxis" | "yAxis"
  ) => {
    const { value } = e.target;
    setAxisConfig((prevState) => ({
      ...prevState,
      [axis]: {
        ...prevState[axis],
        title: {
          ...prevState[axis].title,
          text: value,
        },
      },
    }));
  };

  const handleDispalyChange = (axis: "xAxis" | "yAxis") => {
    setAxisConfig((prevState) => ({
      ...prevState,
      [axis]: {
        ...prevState[axis],
        title: {
          ...prevState[axis].title,
          display: !prevState[axis].title.display,
        },
      },
    }));
  };

  return (
    <Wrapper>
      <StyledInputField
        label="Title:"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <SelectInput
        label="Type:"
        onChange={onTypeChange}
        options={chartTypes}
        selected={chartTypes[0]}
      />
      <Row width="100%" justifyContent="space-between" gap="0.5em">
        <StyledInputField
          label="Background Color:"
          name="backgroundColor"
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <StyledInputField
          label="Border Color:"
          name="bordercolor"
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
      </Row>

      <StyledInputField
        type="number"
        label="Border Width:"
        name="borderWidth"
        value={borderWidth}
        onChange={(e) => setBorderWidth(Number(e.target.value))}
      />
      <Row width="100%" justifyContent="space-between">
        <StyledContainer>
          <StyledInputField
            label="X Axe Label:"
            name="title"
            value={axisConfig.xAxis.title.text}
            onChange={(e) => handleInputChange(e, "xAxis")}
          />

          <StyledCheckbox
            onChange={() => handleDispalyChange("xAxis")}
            checked={axisConfig.xAxis.title.display}
            label="Display Label"
          />
        </StyledContainer>
        <StyledContainer>
          <StyledInputField
            label="Y Axe Label:"
            name="title"
            value={axisConfig.yAxis.title.text}
            onChange={(e) => handleInputChange(e, "yAxis")}
          />

          <StyledCheckbox
            onChange={() => handleDispalyChange("yAxis")}
            checked={axisConfig.yAxis.title.display}
            label="Display Label"
          />
        </StyledContainer>
      </Row>

      <StyledCheckbox
        onChange={() => setFill(!fill)}
        checked={fill}
        label="Fill Chart"
      />

      <StyledButton onClick={onAddChart}>Add Chart</StyledButton>
    </Wrapper>
  );
};

export default ChartForm;

const Wrapper = styled(Container)`
  align-items: flex-start;
`;

const StyledInputField = styled(InputField)`
  width: 100%;
  ${Container} {
    padding: 0 0.2em;
    background: ${(props) => props.theme.background.white};
    min-height: 2.375em;
  }
`;

const StyledButton = styled(Button)`
  background: ${(props) => props.theme.background.lightSuccess};
  min-height: 2.5em;
  border-radius: ${(props) => props.theme.borderRadius.primary};
  margin: 1em 0;
  width: 100%;
`;

const StyledCheckbox = styled(Checkbox)`
  margin: 0.5em 0;
`;
const StyledContainer = styled(Container)`
  align-items: flex-start;
`;
