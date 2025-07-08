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
  $size?: ImageCardSize;
  $dropShadow?: boolean;
  title?: string;
  content?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  $imagePosition?: ImageCardPosition;
  $themeStyle?: ImageCardTheme;
}
