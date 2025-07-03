import React from 'react';
import { useTheme } from 'styled-components';
import type { CardProps } from '../Card/Card.types';
import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardContent,
  ImageWrapper,
  CardImage,
  TextWrapper,
} from './ImageCard.styled';

export const ImageCard: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  imageAlt = '',
  imagePosition = 'top',
  size = 'small',
  radius = 'medium',
  dropShadow = true,
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
      title={title}
      content={content}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      imagePosition={imagePosition}
      radius={radius}
      size={size}
      dropShadow={dropShadow}
      isImage={true}
      {...props}
    >
      <ImageWrapper size={size} position={imagePosition}>
        <CardImage src={imageSrc} alt={imageAlt} />
      </ImageWrapper>
      <TextWrapper size={size} isImage={true} position={imagePosition}>
        <CardHeader>
          <CardTitle size={size}>{title}</CardTitle>
          <CardContent size={size}>{content}</CardContent>
        </CardHeader>
      </TextWrapper>
    </CardWrapper>
  );
};

ImageCard.displayName = 'ImageCard';
