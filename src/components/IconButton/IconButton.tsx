import React from 'react';
import type { IconButtonProps } from './IconButton.types';
import { StyledButton } from './IconButton.styled';

export const IconButton: React.FC<IconButtonProps> = ({
  size = 'medium',
  radius = 'pill',
  themeStyle = 'neoglow',
  dropShadow = true,
  icon,
  label,
  disabled = false,
  fontFamily,
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
