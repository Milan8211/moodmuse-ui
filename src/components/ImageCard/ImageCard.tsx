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
  $imageCardTitle,
  $imageCardContent,
  $imageSrc,
  $imageAlt = '',
  $imageCardThemeStyle = 'neoglow',
  $imagePosition = 'top',
  $imageCardSize = 'small',
  $imageCardDropShadow = true,
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
      $imageCardThemeStyle={$imageCardThemeStyle}
      $imageCardTitle={$imageCardTitle}
      $imageCardContent={$imageCardContent}
      $imageSrc={$imageSrc}
      $imageAlt={$imageAlt}
      $imagePosition={$imagePosition}
      $imageCardSize={$imageCardSize}
      $imageCardDropShadow={$imageCardDropShadow}
    >
      <ImageWrapper
        $imageCardSize={$imageCardSize}
        $imagePosition={$imagePosition}
      >
        <CardImage src={$imageSrc} alt={$imageAlt} />
      </ImageWrapper>
      <TextWrapper
        $imageCardSize={$imageCardSize}
        $imagePosition={$imagePosition}
      >
        <CardHeader>
          <CardTitle $imageCardSize={$imageCardSize}>
            {$imageCardTitle}
          </CardTitle>
          <CardContent $imageCardSize={$imageCardSize}>
            {$imageCardContent}
          </CardContent>
        </CardHeader>
      </TextWrapper>
    </CardWrapper>
  );
};

ImageCard.displayName = 'ImageCard';
