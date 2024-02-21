import { PropsWithChildren } from 'react';
import GlobalStyle from './GlobalStyle';

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
