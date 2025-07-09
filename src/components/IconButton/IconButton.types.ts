import type { ReactNode } from 'react';
import { themes } from '../../styles';

export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonRadius = 'no' | 'small' | 'medium' | 'large' | 'pill';
export type IconButtonTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'gradientglow'
  | 'softclay'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';

export type FontFamily = keyof typeof themes.neoglow.typography.fontFamilies;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $label?: ReactNode;
  $size?: IconButtonSize;
  $themeStyle?: IconButtonTheme;
  $icon?: ReactNode;
  $dropShadow?: boolean;
  $radius?: IconButtonRadius;
  className?: string;
}
