import type { ReactNode } from 'react';

export type CardRadius = 'no' | 'small' | 'medium' | 'large';
export type CardSize = 'small' | 'medium' | 'large';
export type CardTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'softclay'
  | 'gradientglow'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';

export interface CardProps {
  $themeStyle?: CardTheme;
  $radius?: CardRadius;
  $size?: CardSize;
  $dropShadow?: boolean;
  $title: string;
  $content: string;
  $avatar?: ReactNode;
  $icon?: ReactNode;
  className?: string;
}
