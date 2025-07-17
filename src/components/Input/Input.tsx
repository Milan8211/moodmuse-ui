import React, { useId } from 'react';
import { useTheme } from 'styled-components';
import type { InputProps } from './Input.types.js';
import { InputWrapper, StyledInput, Label } from './Input.styled.js';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      $inputLabel,
      $inputLeftIcon,
      $inputRightIcon,
      $inputThemeStyle = 'neoglow',
      $inputSize = 'medium',
      $inputRadius = 'medium',
      $inputDropShadow = true,
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
      <div>
        {$inputLabel && (
          <Label $inputSize={$inputSize} htmlFor={inputId}>
            {$inputLabel}
          </Label>
        )}
        <InputWrapper
          $inputThemeStyle={$inputThemeStyle}
          $inputSize={$inputSize}
          $inputRadius={$inputRadius}
          $inputDropShadow={$inputDropShadow}
        >
          {$inputLeftIcon}
          <StyledInput id={inputId} ref={ref} {...props} />
          {$inputRightIcon}
        </InputWrapper>
      </div>
    );
  },
);

Input.displayName = 'Input';
