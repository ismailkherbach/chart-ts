
import styled, { css } from 'styled-components';

export const addPropertyCss = (name: string, value?: string) => {
  if (value === undefined) return ``;
  return `${name}: ${value};`;
};

export type IFlexContainerProperties = {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  flexWrap?: string;
  gap?: string;
};

export const addCssFlexContainerProperties = (_props?: unknown) => {
  const props = _props as IFlexContainerProperties;

  return css`
    ${addPropertyCss('flex-direction', props?.flexDirection)};
    ${addPropertyCss('justify-content', props?.justifyContent)};
    ${addPropertyCss('alignItems', props?.alignItems)};
    ${addPropertyCss('alignContent', props?.alignContent)};
    ${addPropertyCss('flex-Wrap', props?.flexWrap)};
    ${addPropertyCss('gap', props?.gap)};
  `;
};

export type IFlexItemProperties = {
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  alignSelf?: string;
};

export const addCssFlexItemProperties = (_props?: unknown) => {
  const props = _props as IFlexItemProperties;

  return css`
    ${addPropertyCss('flex', props?.flex)};
    ${addPropertyCss('flex-grow', props?.flexGrow)};
    ${addPropertyCss('flex-shrink', props?.flexShrink)};
    ${addPropertyCss('flex-basis', props?.flexBasis)};
    ${addPropertyCss('align-self', props?.alignSelf)};
  `;
};

export type IBoxProperties = {
  width?: string;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  background?: string;
};

export const addCssBoxProperties = (_props?: unknown) => {
  const props = _props as IBoxProperties;

  return css`
    ${addPropertyCss('width', props?.width)};
    ${addPropertyCss('height', props?.height)};
    ${addPropertyCss('min-height', props?.minHeight)};
    ${addPropertyCss('min-width', props?.minWidth)};
    ${addPropertyCss('padding', props?.padding)};
    ${addPropertyCss('margin', props?.margin)};
    ${addPropertyCss('border', props?.border)};
    ${addPropertyCss('border-radius', props?.borderRadius)};
    ${addPropertyCss('color', props?.color)};
    ${addPropertyCss('background', props?.background)};
  `;
};

export type ITextProperties = {
  fontSize?: string;
  textAlign?: string;
  textTransform?: string;
  color?: string;
};

export const addCssTextProperties = (_props?: unknown) => {
  const props = _props as ITextProperties;

  return css`
    ${addPropertyCss('font-size', props?.fontSize)};
    ${addPropertyCss('text-align', props?.textAlign)};
    ${addPropertyCss('text-transform', props?.textTransform)};
    ${addPropertyCss('color', props?.color)};
  `;
};

export const flexCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const textCss = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const headCss = css`
  ${textCss};
  text-align: center;
  text-transform: none;
`;

export const clickBehaviorCss = css`
  cursor: pointer;
`;
export const commonCss = css`
  ${addCssFlexContainerProperties};
  ${addCssFlexItemProperties};
  ${addCssBoxProperties};
  ${addCssTextProperties};
`;

export type IStyleCss = IFlexContainerProperties &
  IFlexItemProperties &
  ITextProperties &
  IBoxProperties;

export const Container = styled.div<IStyleCss>`
  ${flexCss};
  ${commonCss};
`;

export const Row = styled(Container)<IStyleCss>`
  ${flexCss};
  flex-direction: row;
  ${commonCss};
`;