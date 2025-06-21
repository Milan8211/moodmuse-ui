import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes, type Theme } from '../styles/themes.js';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = themes.neoglow,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
