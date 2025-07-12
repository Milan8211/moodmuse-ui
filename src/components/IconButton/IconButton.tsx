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
  ...props
}) => {
  return (
    <StyledButton
      $iconButtonSize={$iconButtonSize}
      $iconButtonThemeStyle={$iconButtonThemeStyle}
      $iconButtonRadius={$iconButtonRadius}
      $iconButtonDropShadow={$iconButtonDropShadow}
      disabled={disabled}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      {...props}
    >
      {$iconButtonIcon}
      <span>{$iconButtonLabel}</span>
    </StyledButton>
  );
};
