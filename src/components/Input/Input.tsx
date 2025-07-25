import React, { useId } from 'react';
import { useTheme } from 'styled-components';
import type { InputProps } from './Input.types.js';
import { InputWrapper, StyledInput, Label } from './Input.styled.js';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      leftIcon,
      rightIcon,
      $themeStyle = 'neoglow',
      $size = 'medium',
      $radius = 'medium',
      $dropShadow = true,
      $customClass,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const generatedId = useId();
    const inputId = props.id || generatedId;

    if (!theme) {
      console.error(
        'Input: ThemeProvider is missing. Please wrap your application in a ThemeProvider.',
      );
      return null;
    }

    return (
      <div className={$customClass}>
        {label && (
          <Label $size={$size} htmlFor={inputId}>
            {label}
          </Label>
        )}
        <InputWrapper
          $themeStyle={$themeStyle}
          $size={$size}
          $radius={$radius}
          $dropShadow={$dropShadow}
          {...props}
        >
          {leftIcon}
          <StyledInput id={inputId} ref={ref} {...props} />
          {rightIcon}
        </InputWrapper>
      </div>
    );
  },
);

Input.displayName = 'Input';
