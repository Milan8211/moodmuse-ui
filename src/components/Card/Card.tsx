import React from 'react';
import { useTheme } from 'styled-components';
import type { CardProps } from './Card.types.js';
import {
  CardWrapper,
  CardHeader,
  AvatarWrapper,
  CardTitle,
  CardContent,
  TextWrapper,
} from './Card.styled.js';

export const Card: React.FC<CardProps> = ({
  $title,
  $content,
  $avatar,
  $icon,
  $themeStyle = 'neoglow',
  $radius = 'medium',
  $size = 'medium',
  $dropShadow = true,
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
      $title={$title}
      $content={$content}
      $themeStyle={$themeStyle}
      $radius={$radius}
      $size={$size}
      $dropShadow={$dropShadow}
      transition={{ type: 'spring', stiffness: 300 }}
      {...props}
    >
      <TextWrapper>
        <CardHeader>
          {($avatar || $icon) && (
            <AvatarWrapper>{$avatar || $icon}</AvatarWrapper>
          )}
          <CardTitle $size={$size}>{$title}</CardTitle>
        </CardHeader>
        <CardContent $size={$size}>{$content}</CardContent>
      </TextWrapper>
    </CardWrapper>
  );
};

Card.displayName = 'Card';
