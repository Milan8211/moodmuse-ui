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
  $buttonSize?: ButtonSize;
  $buttonThemeStyle?: ButtonTheme;
  $buttonLeftIcon?: ReactNode;
  $buttonRightIcon?: ReactNode;
  $disabled?: boolean;
  $buttonRadius?: ButtonRadius;
  $buttonDropShadow?: boolean;
}
