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
    $cardThemeStyle: {
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
    $cardRadius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large'],
    },
    $cardSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $cardDropShadow: {
      control: 'boolean',
    },
    $cardTitle: {
      control: 'text',
    },
    $cardContent: {
      control: 'text',
    },
  },
  args: {
    $cardThemeStyle: 'neoglow',
    $cardRadius: 'medium',
    $cardSize: 'small',
    $cardDropShadow: true,
    $cardTitle: 'Card Title',
    $cardContent:
      'This is the card content. It can be a short description or any other information.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: {
    $cardAvatar: <img src="https://i.pravatar.cc/48" alt="Avatar" />,
    $cardTitle: 'User Card',
    $cardContent: 'This card represents a user profile with an avatar.',
  },
};

export const WithIcon: Story = {
  args: {
    $cardIcon: <Icon icon="mdi:star-circle-outline" width="48" height="48" />,
    $cardTitle: 'Feature Card',
    $cardContent: 'This card highlights a specific feature using an icon.',
  },
};

export const NeoGlow: Story = {
  args: {
    $cardThemeStyle: 'neoglow',
  },
};

export const BrandFocused: Story = {
  args: {
    $cardThemeStyle: 'brandfocused',
  },
};

export const SoftClay: Story = {
  args: {
    $cardThemeStyle: 'softclay',
  },
};

export const GradientGlow: Story = {
  args: {
    $cardThemeStyle: 'gradientglow',
  },
};

export const GhostLine: Story = {
  args: {
    $cardThemeStyle: 'ghostline',
  },
};

export const MoodPop: Story = {
  args: {
    $cardThemeStyle: 'moodpop',
  },
};

export const MonoGrid: Story = {
  args: {
    $cardThemeStyle: 'monogrid',
  },
};
