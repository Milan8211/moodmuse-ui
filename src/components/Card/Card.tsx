import React from 'react';
import { useTheme } from 'styled-components';
import type { CardProps } from './Card.types.js';
import {
  CardWrapper,
  CardHeader,
  AvatarWrapper,
  CardTitle,
  CardContent,
  ImageWrapper,
  CardImage,
  TextWrapper,
} from './Card.styled.js';

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  imageAlt = '',
  imagePosition = 'top',
  avatar,
  icon,
  size = 'small',
  themeStyle = 'neoglow',
  radius = 'medium',
  dropShadow = true,
  isImage = false,
  ...props
}) => {
  const theme = useTheme();

  if (!theme) {
    console.error(
      'Card: ThemeProvider is missing. Please wrap your application in a ThemeProvider.',
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
      themeStyle={themeStyle}
      radius={radius}
      size={size}
      dropShadow={dropShadow}
      isImage={isImage}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      {...props}
    >
      {isImage && (
        <ImageWrapper position={imagePosition}>
          <CardImage src={imageSrc} alt={imageAlt} />
        </ImageWrapper>
      )}
      <TextWrapper isImage={isImage} position={imagePosition}>
        <CardHeader>
          {(avatar || icon) && <AvatarWrapper>{avatar || icon}</AvatarWrapper>}
          <CardTitle size={size}>{title}</CardTitle>
        </CardHeader>
        <CardContent size={size}>{content}</CardContent>
      </TextWrapper>
    </CardWrapper>
  );
};

Card.displayName = 'Card';
