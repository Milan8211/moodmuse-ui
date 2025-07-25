import React from 'react';
import type { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button: React.FC<ButtonProps> = ({
  children,
  $size = 'medium',
  $themeStyle = 'neoglow',
  leftIcon,
  rightIcon,
  disabled = false,
  $radius = 'medium',
  $dropShadow = true,
  $customClass,
  ...props
}) => {
  return (
    <StyledButton
      $size={$size}
      $themeStyle={$themeStyle}
      disabled={disabled}
      $radius={$radius}
      $dropShadow={$dropShadow}
      className={$customClass}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
};
