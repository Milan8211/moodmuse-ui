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
  $cardThemeStyle?: CardTheme;
  $cardRadius?: CardRadius;
  $cardSize?: CardSize;
  $cardDropShadow?: boolean;
  $cardTitle: string;
  $cardContent: string;
  $cardAvatar?: ReactNode;
  $cardIcon?: ReactNode;
}
