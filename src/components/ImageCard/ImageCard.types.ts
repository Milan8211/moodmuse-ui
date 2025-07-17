export type ImageCardSize = 'small' | 'medium' | 'large';
export type ImageCardPosition = 'top' | 'bottom' | 'left' | 'right';
export type ImageCardTheme =
  | 'neoglow'
  | 'brandfocused'
  | 'softclay'
  | 'gradientglow'
  | 'ghostline'
  | 'moodpop'
  | 'monogrid';

export interface ImageCardProps {
  $imageCardSize?: ImageCardSize;
  $imageCardDropShadow?: boolean;
  $imageCardTitle?: string;
  $imageCardContent?: string;
  $imageSrc?: string;
  $imageAlt?: string;
  $imagePosition?: ImageCardPosition;
  $imageCardThemeStyle?: ImageCardTheme;
}
