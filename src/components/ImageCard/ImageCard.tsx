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
  $title,
  $content,
  $imageSrc,
  $imageAlt = '',
  $themeStyle = 'neoglow',
  $imagePosition = 'top',
  $size = 'small',
  $dropShadow = true,
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
      $title={$title}
      $themeStyle={$themeStyle}
      $content={$content}
      $imageSrc={$imageSrc}
      $imageAlt={$imageAlt}
      $imagePosition={$imagePosition}
      $size={$size}
      $dropShadow={$dropShadow}
      {...props}
    >
      <ImageWrapper $size={$size} $position={$imagePosition}>
        <CardImage src={$imageSrc} alt={$imageAlt} />
      </ImageWrapper>
      <TextWrapper $size={$size} $position={$imagePosition}>
        <CardHeader>
          <CardTitle $size={$size}>{$title}</CardTitle>
          <CardContent $size={$size}>{$content}</CardContent>
        </CardHeader>
      </TextWrapper>
    </CardWrapper>
  );
};

ImageCard.displayName = 'ImageCard';
