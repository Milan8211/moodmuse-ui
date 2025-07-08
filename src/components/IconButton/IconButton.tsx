import React from 'react';
import type { IconButtonProps } from './IconButton.types';
import { StyledButton } from './IconButton.styled';

export const IconButton: React.FC<IconButtonProps> = ({
  $size = 'medium',
  $themeStyle = 'neoglow',
  $radius = 'medium',
  $dropShadow = true,
  icon,
  label,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton
      $size={$size}
      $themeStyle={$themeStyle}
      $radius={$radius}
      $dropShadow={$dropShadow}
      disabled={disabled}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </StyledButton>
  );
};
