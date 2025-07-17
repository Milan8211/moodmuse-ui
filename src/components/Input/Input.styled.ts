import styled, { css, type DefaultTheme } from 'styled-components';
import type {
  InputProps,
  InputSize,
  InputRadius,
  InputTheme,
} from './Input.types';

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    svg {
      width: 16px;
      height: 16px;
    }
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    svg {
      width: 20px;
      height: 20px;
    }
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    svg {
      width: 24px;
      height: 24px;
    }
  `,
};

const labelSizeStyles = {
  small: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  `,
  large: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  `,
};

const radiusStyles = {
  no: css`
    border-radius: 0;
  `,
  small: css`
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  `,
  medium: css`
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
  large: css`
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  `,
  pill: css`
    border-radius: ${({ theme }) => theme.borderRadius.pill};
  `,
};

const themeStyles: Record<
  InputTheme,
  (props: {
    theme: DefaultTheme;
    $inputDropShadow?: boolean;
  }) => ReturnType<typeof css>
> = {
  neoglow: ({ theme, $inputDropShadow }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    ${$inputDropShadow && `box-shadow: 0 0 8px ${theme.colors.primary}`};

    &:focus-within {
      border-color: ${theme.colors.secondary};
      ${$inputDropShadow && `box-shadow: 0 0 12px ${theme.colors.secondary}`};
    }
  `,
  brandfocused: ({ theme, $inputDropShadow }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    ${$inputDropShadow && `box-shadow: 2px 2px 4px rgba(0,0,0,0.1);`}

    &:focus-within {
      border-color: ${theme.colors.primary};
      ${$inputDropShadow && `box-shadow: 0 0 8px ${theme.colors.primary};`}
    }
  `,
  gradientglow: ({ theme }) => css`
    outline: none;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );

    input {
      color: #ffffff;
      &::placeholder {
        color: #ffffff !important;
        opacity: 1 !important;
      }
    }
    &:focus-within {
      background: linear-gradient(
        45deg,
        ${theme.colors.primary},
        ${theme.colors.secondary}
      );
    }
  `,
  softclay: ({ theme, $inputDropShadow }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    ${$inputDropShadow && `box-shadow: 2px 2px 5px ${theme.colors.accent};`}

    &:focus-within {
      border-color: ${theme.colors.primary};
    }
  `,
  ghostline: ({ theme, $inputDropShadow }) => css`
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    ${$inputDropShadow && `box-shadow: 0 0 8px ${theme.colors.accent};`}

    &:focus-within {
      border-color: ${theme.colors.accent};
    }
  `,
  moodpop: ({ theme, $inputDropShadow }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    font-weight: bold;
    ${$inputDropShadow && `box-shadow: 3px 3px 0px ${theme.colors.secondary};`}

    &:focus-within {
      border-color: ${theme.colors.secondary};
    }
  `,
  monogrid: ({ theme, $inputDropShadow }) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.black};
    font-family: 'Courier New', Courier, monospace;
    ${$inputDropShadow && `box-shadow: 4px 4px 0px ${theme.colors.black};`}

    &:focus-within {
      border-color: ${theme.colors.primary};
    }
  `,
};

export const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    typeof prop === 'string' && !prop.startsWith('$'),
})<InputProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamilies.roboto};
  transition: all 0.2s ease-in-out;

  ${({ $inputSize = 'medium' }) => sizeStyles[$inputSize as InputSize]}
  ${({ $inputRadius = 'medium' }) => radiusStyles[$inputRadius as InputRadius]}
  ${(props) => themeStyles[props.$inputThemeStyle || 'neoglow'](props)}

  & > svg {
    color: ${({ theme }) => theme.colors.gray500};
    &:first-child {
      margin-right: 8px;
    }
    &:last-child {
      margin-left: 8px;
    }
  }
`;

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    typeof prop === 'string' && !prop.startsWith('$'),
})<InputProps>`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
    opacity: 0.7;
  }
`;

export const Label = styled.label.withConfig({
  shouldForwardProp: (prop) =>
    typeof prop === 'string' && !prop.startsWith('$'),
})<InputProps>`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamilies.roboto};
  ${({ $inputSize = 'medium' }) => labelSizeStyles[$inputSize as InputSize]}
  color: ${({ theme }) => theme.colors.label};
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
`;
