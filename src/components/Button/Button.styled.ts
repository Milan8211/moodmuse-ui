import styled, { css, type DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
import type {
  ButtonProps,
  ButtonSize,
  ButtonTheme,
  ButtonRadius,
} from './Button.types';

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
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
  ButtonTheme,
  (props: ButtonProps & { theme: DefaultTheme }) => ReturnType<typeof css>
> = {
  neoglow: ({ theme, dropShadow }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    border: 2px solid ${theme.colors.primary};
    ${dropShadow && `box-shadow: 0 0 12px ${theme.colors.primary};`}
  `,
  brandfocused: ({ theme, dropShadow }) => css`
    background-color: transparent;
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
    ${dropShadow && `box-shadow: 0 4px 12px 1px rgba(0,0,0,0.1);`}

    &:hover {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: #ffffff;
    }

    &:active {
      border-color: #ffd3d3;
      color: ${theme.colors.primary};
      ${dropShadow && `box-shadow: 0 4px 12px 1px rgba(255,88,88,1);`}
    }

    &:disabled {
      border-color: rgba(255, 88, 88, 0.25);
      background-color: rgba(255, 88, 88, 0.25);
      color: #ffffff;
      opacity: 1 !important;
    }
  `,
  gradientglow: ({ theme, dropShadow }) => css`
    background: linear-gradient(
      45deg,
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
    color: ${theme.colors.background};
    border: none;
    ${dropShadow && `box-shadow: 0 0 12px ${theme.colors.primary};`}

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    &:disabled {
      background: linear-gradient(
        90deg,
        rgba(85, 85, 85, 0.5),
        rgba(119, 119, 119, 0.5)
      );
      color: #ffffff;
      box-shadow: none;
      opacity: 1 !important;
    }
  `,
  softclay: ({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.surface};
    border: 2px solid ${theme.colors.primary};
    box-shadow: 3px 3px 0px ${theme.colors.accent};
  `,
  ghostline: ({ theme, dropShadow }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    ${dropShadow && `box-shadow: 0 0 8px ${theme.colors.accent};`};
    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.background};
    }
  `,
  moodpop: ({ theme, dropShadow }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    border: none;
    border-radius: ${theme.borderRadius.lg};
    font-weight: bold;
    ${dropShadow && `box-shadow: 0 4px 12px 1px rgba(0,0,0,0.1);`}
    &:hover {
      color: #ffffff;
      background: ${theme.colors.secondary};
    }
  `,
  monogrid: ({ theme, dropShadow }) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    border-radius: 0;
    font-family: 'Courier New', Courier, monospace;
    ${dropShadow && `box-shadow: 4px 4px 0px ${theme.colors.black};`}
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.background};
    }
  `,
};

export const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamilies[
      fontFamily as keyof typeof theme.typography.fontFamilies
    ] || theme.typography.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ size = 'medium' }) => sizeStyles[size as ButtonSize]}
  ${({ radius = 'medium' }) => radiusStyles[radius as ButtonRadius]}
  ${({ themeStyle = 'neoglow' }) => themeStyles[themeStyle as ButtonTheme]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
