import React from 'react';
import type { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button: React.FC<ButtonProps> = ({
  children,
  $buttonSize = 'medium',
  $buttonThemeStyle = 'neoglow',
  $buttonLeftIcon,
  $buttonRightIcon,
  $disabled = false,
  $buttonRadius = 'medium',
  $buttonDropShadow = true,
}) => {
  return (
    <StyledButton
      $buttonSize={$buttonSize}
      $buttonThemeStyle={$buttonThemeStyle}
      $disabled={$disabled}
      $buttonRadius={$buttonRadius}
      $buttonDropShadow={$buttonDropShadow}
    >
      {$buttonLeftIcon}
      <span>{children}</span>
      {$buttonRightIcon}
    </StyledButton>
  );
};
