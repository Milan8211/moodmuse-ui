import React from 'react';
import type { IconButtonProps } from './IconButton.types';
import { StyledButton } from './IconButton.styled';

export const IconButton: React.FC<IconButtonProps> = ({
  $iconButtonSize = 'medium',
  $iconButtonThemeStyle = 'neoglow',
  $iconButtonRadius = 'medium',
  $iconButtonDropShadow = true,
  $iconButtonIcon,
  $iconButtonLabel,
  disabled = false,
}) => {
  return (
    <StyledButton
      $iconButtonSize={$iconButtonSize}
      $iconButtonThemeStyle={$iconButtonThemeStyle}
      $iconButtonRadius={$iconButtonRadius}
      $iconButtonDropShadow={$iconButtonDropShadow}
      disabled={disabled}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      {$iconButtonIcon}
      <span>{$iconButtonLabel}</span>
    </StyledButton>
  );
};
