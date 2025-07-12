import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageCard } from './ImageCard';
import { themes } from '../../styles/themes';

const meta: Meta<typeof ImageCard> = {
  title: 'Components/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    $imageCardThemeStyle: {
      control: 'select',
      options: Object.keys(themes),
    },
    $imageCardSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $imagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    $imageCardDropShadow: {
      control: 'boolean',
    },
    $imageCardTitle: {
      control: 'text',
    },
    $imageCardContent: {
      control: 'text',
    },
  },
  args: {
    $imageCardTitle: 'Image Card Title',
    $imageCardContent:
      'This is the card content. It can be a short description or any other information.',
    $imageSrc: '/public/images/ImageReview.png',
    $imageAlt: 'Image Review',
    $imageCardSize: 'medium',
    $imageCardDropShadow: true,
    $imagePosition: 'top',
    $imageCardThemeStyle: 'neoglow',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
