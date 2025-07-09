import React from 'react';
import { useTheme } from 'styled-components';
import type { InputProps } from './Input.types.js';
import { InputWrapper, StyledInput, Label } from './Input.styled.js';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      $label,
      $leftIcon,
      $rightIcon,
      $themeStyle = 'neoglow',
      $size = 'medium',
      $radius = 'medium',
      $dropShadow = true,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const inputId =
      props.id || `input-${Math.random().toString(36).substring(2, 9)}`;

    if (!theme) {
      console.error(
        'Input: ThemeProvider is missing. Please wrap your application in a ThemeProvider.',
      );
      return null;
    }

    return (
      <div>
        {$label && (
          <Label $size={$size} htmlFor={inputId}>
            {$label}
          </Label>
        )}
        <InputWrapper
          $themeStyle={$themeStyle}
          $size={$size}
          $radius={$radius}
          $dropShadow={$dropShadow}
        >
          {$leftIcon}
          <StyledInput id={inputId} ref={ref} {...props} />
          {$rightIcon}
        </InputWrapper>
      </div>
    );
  },
);

Input.displayName = 'Input';
