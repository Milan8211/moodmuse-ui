import type { ReactNode } from 'react';

export type ImageCardRadius = 'no' | 'small' | 'medium' | 'large';
export type ImageCardSize = 'small' | 'medium' | 'large';
export type ImageCardPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ImageCardProps {
  radius?: ImageCardRadius;
  size?: ImageCardSize;
  dropShadow?: boolean;
  title?: string;
  content?: string;
  avatar?: ReactNode;
  icon?: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: ImageCardPosition;
}
