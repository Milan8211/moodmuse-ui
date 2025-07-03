import styled, { css, type DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';
import type {
  CardProps,
  CardRadius,
  CardSize,
  CardTheme,
  ImagePosition,
} from './Card.types';

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
  `,
  softclay: ({ theme }) => css`
    background-color: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.primary};
    box-shadow: 3px 3px 0px ${theme.colors.accent};
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
    ${dropShadow && `box-shadow: 3px 3px 0px ${theme.colors.secondary};`};
  `,
  monogrid: ({ theme, dropShadow }) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.black};
    font-family: 'Courier New', Courier, monospace;
    ${dropShadow && `box-shadow: 4px 4px 0px ${theme.colors.black};`};
  `,
};

const positionStyles: Record<ImagePosition, ReturnType<typeof css>> = {
  top: css`
    flex-direction: column;
  `,
  bottom: css`
    flex-direction: column-reverse;
  `,
  left: css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `,
  right: css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `,
};

export const CardWrapper = styled(motion.div)<CardProps>`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  ${({ size = 'medium' }) => sizeStyles[size as CardSize]}
  ${({ radius = 'medium' }) => radiusStyles[radius as CardRadius]}
  ${(props) => themeStyles[props.themeStyle || 'neoglow'](props)}
  ${({ imagePosition }) =>
    imagePosition && positionStyles[imagePosition as ImagePosition]}
`;

export const ImageWrapper = styled.div<{ position: ImagePosition }>`
  flex-shrink: 0;
  ${({ position }) =>
    position === 'left'
      ? 'position: absolute; width: 45%; height: 100%; top: 0; left: 0;'
      : position === 'right'
        ? 'position: absolute; width: 45%; height: 100%; top: 0; right: 0;'
        : position === 'bottom'
          ? 'width: 100%; height: 100%; position: relative; bottom: -4px;'
          : 'width: 100%; height: 100%;'}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div<{
  position?: ImagePosition;
  isImage?: boolean;
}>`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ isImage, position }) =>
    isImage &&
    (position === 'left'
      ? 'width: 55%; height: 100%;'
      : position === 'right'
        ? 'width: 55%; height: 100%;'
        : 'width: 100%; height: 100%;')}
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
