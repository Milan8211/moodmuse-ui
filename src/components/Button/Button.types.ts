import type { ReactNode } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'softclay'
  | 'gradientglow'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';
export type ButtonRadius = 'no' | 'small' | 'medium' | 'large' | 'pill';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $size?: ButtonSize;
  $themeStyle?: ButtonTheme;
  $leftIcon?: ReactNode;
  $rightIcon?: ReactNode;
  disabled?: boolean;
  $radius?: ButtonRadius;
  $dropShadow?: boolean;
  className?: string;
}
