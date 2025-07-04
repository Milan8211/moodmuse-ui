import { tokens } from './tokens';

const baseTheme = {
  ...tokens,
};

export const themes = {
  brandfocused: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#ffffff',
      text: '#8F8F8F',
      primary: '#FF5858',
      secondary: '#FF00E4',
      border: '#8F8F8F',
      surface: '#F5F5F5',
      accent: '#FFD700',
    },
  },
  neoglow: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#ffffff',
      text: '#E0E0E0',
      primary: '#00F5D4',
      secondary: '#FF00E4',
      surface: '#162447',
      accent: '#F5F5F5',
    },
  },
  softclay: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#F4E9DE',
      text: '#4A4A4A',
      primary: '#D97A5B',
      secondary: '#A8DADC',
      surface: '#FFFFFF',
      accent: '#E0AFA0',
    },
  },
  gradientglow: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#ffffff',
      text: '#E0E0E0',
      primary: '#0FF1CE',
      secondary: '#9C27B0',
      surface: '#162447',
      accent: '#F5F5F5',
    },
  },
  ghostline: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#121212',
      text: '#EAEAEA',
      label: '#FFFFFF',
      primary: 'transparent',
      secondary: '#444444',
      surface: '#1E1E1E',
      accent: '#FFFFFF',
    },
  },
  moodpop: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#FDF0D5',
      text: '#3A3A3A',
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      surface: '#FFFFFF',
      accent: '#FFD166',
    },
  },
  monogrid: {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      background: '#F5F5F5',
      text: '#212121',
      primary: '#212121',
      secondary: '#BDBDBD',
      surface: '#EEEEEE',
      accent: '#424242',
    },
  },
};

export type ThemeName = keyof typeof themes;
export type Theme = (typeof themes)[ThemeName];
