import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import type {
  ImageCardProps,
  ImageCardRadius,
  ImageCardSize,
  ImageCardPosition,
} from './ImageCard.types';

const sizeImageStyles = {
  small: css`
    max-width: 200px;
  `,
  medium: css`
    max-width: 250px;
  `,
  large: css`
    max-width: 275px;
  `,
};

const sizeTextStyles = {
  small: css`
    max-width: 200px;
  `,
  medium: css`
    max-width: 250px;
  `,
  large: css`
    max-width: 275px;
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

const positionStyles: Record<ImageCardPosition, ReturnType<typeof css>> = {
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
    min-width: 350px;
  `,
  right: css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-width: 350px;
  `,
};

export const CardWrapper = styled(motion.div)<ImageCardProps>`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  position: relative;
  width: 100%;
  ${({ radius = 'medium' }) => radiusStyles[radius as ImageCardRadius]}
  ${({ imagePosition }) =>
    imagePosition && positionStyles[imagePosition as ImageCardPosition]}

&:hover {
    > div {
      &:first-child {
        transform: translate(-5px, -5px) !important;
        box-shadow: 10px 10px 0 ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const ImageWrapper = styled.div<{
  position: ImageCardPosition;
  size: ImageCardSize;
}>`
  flex-shrink: 0;
  transition: all 0.3s ease-in-out;
  ${({ size }) => sizeImageStyles[size as ImageCardSize]}
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
  position?: ImageCardPosition;
  size: ImageCardSize;
  isImage?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ size }) => sizeTextStyles[size as ImageCardSize]}
  ${({ isImage, position }) =>
    isImage &&
    (position === 'left'
      ? 'width: 55%; height: 100%; padding: 0 0 0 1.5rem;'
      : position === 'right'
        ? 'width: 55%; height: 100%; padding: 0 1.5rem 0 0;'
        : position === 'bottom'
          ? 'width: 100%; height: 100%; padding: 0 0 1.5rem 0;'
          : 'width: 100%; height: 100%; padding: 1.5rem 0 0 0;')}
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-family: inherit;
`;

const sizeTitleStyles = {
  small: css`
    font-size: 16px;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  `,
  medium: css`
    font-size: 20px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  `,
  large: css`
    font-size: 22px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  `,
};

export const CardTitle = styled.h3<{ size: ImageCardSize }>`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: #000000;
  margin: 0;
  ${({ size = 'medium' }) => sizeTitleStyles[size as ImageCardSize]}
`;

const sizeContentStyles = {
  small: css`
    font-size: 14px;
  `,
  medium: css`
    font-size: 15px;
  `,
  large: css`
    font-size: 16px;
  `,
};

export const CardContent = styled.p<{ size: ImageCardSize }>`
  color: #3b3b3b;
  margin: 0;
  line-height: 1.5;
  ${({ size = 'medium' }) => sizeContentStyles[size as ImageCardSize]}
`;
