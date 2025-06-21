import React from 'react';
import type { ButtonProps } from './IconButton.types.js';
import { StyledButton } from './IconButton.styled.js';

export const IconButton: React.FC<ButtonProps> = ({
  size = 'medium',
  themeStyle = 'neoglow',
  radius = 'pill',
  fontFamily,
  icon,
  label,
  disabled = false,
  dropShadow = true,
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      themeStyle={themeStyle}
      disabled={disabled}
      radius={radius}
      dropShadow={dropShadow}
      fontFamily={fontFamily}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </StyledButton>
  );
};
