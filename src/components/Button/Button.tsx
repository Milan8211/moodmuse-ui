import React from 'react';
import type { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styled';

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  themeStyle = 'neoglow',
  fontFamily = 'inter',
  leftIcon,
  rightIcon,
  disabled = false,
  radius = 'medium',
  dropShadow = true,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      themeStyle={themeStyle}
      fontFamily={fontFamily}
      disabled={disabled}
      radius={radius}
      dropShadow={dropShadow}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </StyledButton>
  );
};
