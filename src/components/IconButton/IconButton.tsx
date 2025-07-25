import React from 'react';
import type { IconButtonProps } from './IconButton.types';
import { StyledButton } from './IconButton.styled';

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  icon,
  $size = 'medium',
  $themeStyle = 'neoglow',
  $radius = 'medium',
  $dropShadow = true,
  $customClass,
  ...props
}) => {
  return (
    <StyledButton
      aria-label={label as string}
      $size={$size}
      $themeStyle={$themeStyle}
      $radius={$radius}
      $dropShadow={$dropShadow}
      className={$customClass}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </StyledButton>
  );
};
