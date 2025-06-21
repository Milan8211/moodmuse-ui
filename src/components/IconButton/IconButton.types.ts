import type { ReactNode } from 'react';
import { themes } from '../../styles';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRadius = 'no' | 'small' | 'medium' | 'large' | 'pill';
export type ButtonTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'gradientglow'
  | 'softclay'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';

export type FontFamily = keyof typeof themes.neoglow.typography.fontFamilies;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontFamily?: FontFamily;
  label?: ReactNode;
  size?: ButtonSize;
  themeStyle?: ButtonTheme;
  icon?: ReactNode;
  dropShadow?: boolean;
  radius?: ButtonRadius;
}
