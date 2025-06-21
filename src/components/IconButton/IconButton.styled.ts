import styled, { css, type DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
import type {
  ButtonProps,
  ButtonSize,
  ButtonTheme,
  ButtonRadius,
} from './IconButton.types';

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xs}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
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
      90deg,
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
  softclay: ({ theme, dropShadow }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.surface};
    border: 2px solid ${theme.colors.primary};
    ${dropShadow && `box-shadow: 2px 2px 5px rgba(0,0,0,0.2);`}
  `,
  ghostline: ({ theme, dropShadow }) => css`
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    ${dropShadow && `box-shadow: 0 0 8px ${theme.colors.accent};`}

    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.background};
    }
  `,
  moodpop: ({ theme, dropShadow }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    border: none;
    ${radiusStyles.large}
    font-weight: medium;
    ${dropShadow && `box-shadow: 3px 3px 0px ${theme.colors.secondary};`}

    &:hover {
      transform: scale(1.05);
    }
  `,
  monogrid: ({ theme, dropShadow }) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    ${radiusStyles.no}
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
  cursor: pointer;
  font-family: ${({ theme, fontFamily }) =>
    theme.typography.fontFamilies[
      fontFamily as keyof typeof theme.typography.fontFamilies
    ] || theme.typography.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  overflow: visible;
  transition:
    box-shadow 1s,
    background 1s,
    color 1s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: color;

  ${({ size = 'medium' }) => sizeStyles[size as ButtonSize]}
  ${({ radius = 'medium' }) => radiusStyles[radius as ButtonRadius]}
  ${(props) => themeStyles[props.themeStyle || 'neoglow'](props)}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 1s cubic-bezier(0.22, 1, 0.36, 1);
    color: inherit;
    font-size: ${({ size }) =>
      size === 'small' ? '16px' : size === 'medium' ? '18px' : '22px'};
    margin: 0 0.3rem;
  }

  span {
    display: inline-block;
    overflow: hidden;
    opacity: 0;
    max-width: 0;
    white-space: nowrap;
    pointer-events: none;
    font-weight: 500;
    margin-left: 0;
    vertical-align: middle;
    transition:
      opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
      max-width 1s cubic-bezier(0.22, 1, 0.36, 1),
      margin-left 1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    span {
      opacity: 1;
      max-width: 200px;
      margin-left: 8px;
      pointer-events: auto;
    }
  }
`;
