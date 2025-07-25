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
    $themeStyle: {
      control: 'select',
      options: Object.keys(themes),
    },
    $size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    $dropShadow: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
  args: {
    title: 'Image Card Title',
    content:
      'This is the card content. It can be a short description or any other information.',
    src: '/public/images/ImageReview.png',
    alt: 'Image Review',
    $size: 'medium',
    $dropShadow: true,
    $position: 'top',
    $themeStyle: 'neoglow',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
