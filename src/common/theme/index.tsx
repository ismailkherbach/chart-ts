import { PropsWithChildren } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import primaryTheme from "./primaryTheme";

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProviderStyled theme={primaryTheme}>
      <GlobalStyle />
      {children}
    </ThemeProviderStyled>
  );
}
