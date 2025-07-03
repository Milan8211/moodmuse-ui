import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Icon } from '@iconify/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    themeStyle: {
      control: 'select',
      options: [
        'neoglow',
        'brandfocused',
        'softclay',
        'gradientglow',
        'ghostline',
        'moodpop',
        'monogrid',
      ],
    },
    radius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    dropShadow: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
  args: {
    themeStyle: 'neoglow',
    radius: 'medium',
    size: 'small',
    dropShadow: true,
    title: 'Card Title',
    content:
      'This is the card content. It can be a short description or any other information.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: {
    avatar: <img src="https://i.pravatar.cc/48" alt="Avatar" />,
    title: 'User Card',
    content: 'This card represents a user profile with an avatar.',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Icon icon="mdi:star-circle-outline" width="48" height="48" />,
    title: 'Feature Card',
    content: 'This card highlights a specific feature using an icon.',
  },
};

export const NeoGlow: Story = {
  args: {
    themeStyle: 'neoglow',
  },
};

export const BrandFocused: Story = {
  args: {
    themeStyle: 'brandfocused',
  },
};

export const SoftClay: Story = {
  args: {
    themeStyle: 'softclay',
  },
};

export const GradientGlow: Story = {
  args: {
    themeStyle: 'gradientglow',
  },
};

export const GhostLine: Story = {
  args: {
    themeStyle: 'ghostline',
  },
};

export const MoodPop: Story = {
  args: {
    themeStyle: 'moodpop',
  },
};

export const MonoGrid: Story = {
  args: {
    themeStyle: 'monogrid',
  },
};
