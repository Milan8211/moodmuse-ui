import styled, { css, type DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
import type { CardProps, CardRadius, CardSize, CardTheme } from './Card.types';

const sizeStyles = {
  small: css`
    width: 300px;
    min-height: 150px;
  `,
  medium: css`
    width: 400px;
    min-height: 200px;
  `,
  large: css`
    width: 500px;
    min-height: 250px;
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
};

const themeStyles: Record<
  CardTheme,
  (props: {
    theme: DefaultTheme;
    dropShadow?: boolean;
  }) => ReturnType<typeof css>
> = {
  neoglow: ({ theme, dropShadow }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    ${dropShadow && `box-shadow: 0 0 12px ${theme.colors.primary}`};

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px ${theme.colors.primary};
    }
  `,
  brandfocused: ({ theme, dropShadow }) => css`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.border};
    ${dropShadow && `box-shadow: 4px 4px 8px ${theme.colors.primary}`};
    h3 {
      color: #000000;
    }
    p {
      color: #3b3b3b;
    }

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 12px 12px 8px ${theme.colors.primary};
    }
  `,
  softclay: ({ theme }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    box-shadow: 3px 3px 0px ${theme.colors.accent};

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 12px 12px 0px ${theme.colors.accent};
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
      box-shadow: 0 0 25px ${theme.colors.primary};
    }
  `,
  ghostline: ({ theme, dropShadow }) => css`
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.accent};
    ${dropShadow && `box-shadow: 0 0 8px ${theme.colors.accent};`};
    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.background};
    }
  `,
  moodpop: ({ theme, dropShadow }) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    ${dropShadow && `box-shadow: 3px 3px 0px ${theme.colors.primary};`};

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 12px 12px 0px ${theme.colors.primary};
    }
  `,
  monogrid: ({ theme, dropShadow }) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.black};
    font-family: 'Courier New', Courier, monospace;
    ${dropShadow && `box-shadow: 4px 4px 0px ${theme.colors.black};`};

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 12px 12px 0px ${theme.colors.black};
    }
  `,
};

export const CardWrapper = styled(motion.div)<CardProps>`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  position: relative;

  ${({ size = 'medium' }) => sizeStyles[size as CardSize]}
  ${({ radius = 'medium' }) => radiusStyles[radius as CardRadius]}
  ${(props) => themeStyles[props.themeStyle || 'neoglow'](props)}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const AvatarWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.md};
  img,
  svg {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const sizeTitleStyles = {
  small: css`
    font-size: 18px;
  `,
  medium: css`
    font-size: 24px;
  `,
  large: css`
    font-size: 32px;
  `,
};

export const CardTitle = styled.h3<{ size: CardSize }>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: inherit;
  margin: 0;
  ${({ size = 'medium' }) => sizeTitleStyles[size as CardSize]}
`;

const sizeContentStyles = {
  small: css`
    font-size: 16px;
  `,
  medium: css`
    font-size: 18px;
  `,
  large: css`
    font-size: 24px;
  `,
};

export const CardContent = styled.p<{ size: CardSize }>`
  color: inherit;
  margin: 0;
  line-height: 1.5;
  ${({ size = 'medium' }) => sizeContentStyles[size as CardSize]}
`;
