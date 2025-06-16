import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/globalStyles';
import { themes } from '../src/styles/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'neoglow',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'brandfocused', title: 'BrandFocused' },
          { value: 'neoglow', title: 'NeoGlow' },
          { value: 'softclay', title: 'SoftClay' },
          { value: 'glassmorph', title: 'Glassmorph' },
          { value: 'ghostline', title: 'GhostLine' },
          { value: 'moodpop', title: 'MoodPop' },
          { value: 'monogrid', title: 'MonoGrid' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = themes[context.globals.theme as keyof typeof themes];
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
