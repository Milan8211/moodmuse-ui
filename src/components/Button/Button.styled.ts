import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import type { ButtonProps, ButtonSize, ButtonTheme } from './Button.types';

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

const themeStyles = {
  brandfocused: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
    }
  `,
  neoglow: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
  `,
  softclay: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 3px 3px 0px ${({ theme }) => theme.colors.accent};
  `,
  glassmorph: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  `,
  ghostline: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.background};
    }
  `,
  moodpop: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-weight: bold;
    &:hover {
      transform: scale(1.05);
    }
  `,
  monogrid: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0;
    font-family: 'Courier New', Courier, monospace;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  `,
};

export const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ size = 'medium' }) => sizeStyles[size as ButtonSize]}
  ${({ themeStyle = 'neoglow' }) => themeStyles[themeStyle as ButtonTheme]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
