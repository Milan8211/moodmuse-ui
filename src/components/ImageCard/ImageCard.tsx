import React from 'react';
import { useTheme } from 'styled-components';
import type { ImageCardProps } from './ImageCard.types';
import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardContent,
  ImageWrapper,
  CardImage,
  TextWrapper,
} from './ImageCard.styled';

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  content,
  src,
  alt = '',
  $themeStyle = 'neoglow',
  $position = 'top',
  $size = 'small',
  $dropShadow = true,
  $customClass,
  ...props
}) => {
  const theme = useTheme();

  if (!theme) {
    console.error(
      'ImageCard: ThemeProvider is missing. Please wrap your application in a ThemeProvider.',
    );
    return null;
  }

  return (
    <CardWrapper
      $themeStyle={$themeStyle}
      title={title}
      content={content}
      src={src}
      alt={alt}
      $position={$position}
      $size={$size}
      $dropShadow={$dropShadow}
      className={$customClass}
      {...props}
    >
      <ImageWrapper $size={$size} $position={$position}>
        <CardImage src={src} alt={alt} />
      </ImageWrapper>
      <TextWrapper $size={$size} $position={$position}>
        <CardHeader>
          <CardTitle $size={$size}>{title}</CardTitle>
          <CardContent $size={$size}>{content}</CardContent>
        </CardHeader>
      </TextWrapper>
    </CardWrapper>
  );
};

ImageCard.displayName = 'ImageCard';
