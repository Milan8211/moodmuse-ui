import type { ReactNode } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'softclay'
  | 'glassmorph'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  themeStyle?: ButtonTheme;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
}
