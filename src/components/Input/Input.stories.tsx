import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { Icon } from '@iconify/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    radius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large', 'pill'],
    },
    dropShadow: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    themeStyle: 'neoglow',
    size: 'medium',
    radius: 'medium',
    dropShadow: true,
    disabled: false,
    placeholder: 'Enter text...',
    label: 'Username',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    leftIcon: <Icon icon="mdi:account" />,
    rightIcon: <Icon icon="mdi:eye" />,
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

export const GradientGlow: Story = {
  args: {
    themeStyle: 'gradientglow',
  },
};

export const SoftClay: Story = {
  args: {
    themeStyle: 'softclay',
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
