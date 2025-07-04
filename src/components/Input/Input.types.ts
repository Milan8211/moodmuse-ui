import type { ReactNode } from 'react';

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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: InputSize;
  themeStyle?: InputTheme;
  dropShadow?: boolean;
  radius?: InputRadius;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
