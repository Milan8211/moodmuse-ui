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
  $cardTitle,
  $cardContent,
  $cardAvatar,
  $cardIcon,
  $cardThemeStyle = 'neoglow',
  $cardRadius = 'medium',
  $cardSize = 'medium',
  $cardDropShadow = true,
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
      $cardTitle={$cardTitle}
      $cardContent={$cardContent}
      $cardThemeStyle={$cardThemeStyle}
      $cardRadius={$cardRadius}
      $cardSize={$cardSize}
      $cardDropShadow={$cardDropShadow}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <TextWrapper>
        <CardHeader>
          {($cardAvatar || $cardIcon) && (
            <AvatarWrapper>{$cardAvatar || $cardIcon}</AvatarWrapper>
          )}
          <CardTitle $cardSize={$cardSize}>{$cardTitle}</CardTitle>
        </CardHeader>
        <CardContent $cardSize={$cardSize}>{$cardContent}</CardContent>
      </TextWrapper>
    </CardWrapper>
  );
};

Card.displayName = 'Card';
