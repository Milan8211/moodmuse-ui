import type { ReactNode } from 'react';
import { themes } from '../../styles/themes.js';

export type InputSize = 'small' | 'medium' | 'large';
export type InputRadius = 'no' | 'small' | 'medium' | 'large' | 'pill';
export type InputTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'softclay'
  | 'gradientglow'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';

export type FontFamily = keyof typeof themes.neoglow.typography.fontFamilies;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  fontFamily?: FontFamily;
  label?: string;
  size?: InputSize;
  themeStyle?: InputTheme;
  dropShadow?: boolean;
  radius?: InputRadius;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
