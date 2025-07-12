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
    $inputThemeStyle: {
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
    $inputSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $inputRadius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large', 'pill'],
    },
    $inputDropShadow: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    $inputLabel: {
      control: 'text',
    },
  },
  args: {
    $inputThemeStyle: 'neoglow',
    $inputSize: 'medium',
    $inputRadius: 'medium',
    $inputDropShadow: true,
    disabled: false,
    placeholder: 'Enter text...',
    $inputLabel: 'Username',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    $inputLeftIcon: <Icon icon="mdi:account" />,
    $inputRightIcon: <Icon icon="mdi:eye" />,
  },
};

export const NeoGlow: Story = {
  args: {
    $inputThemeStyle: 'neoglow',
  },
};

export const BrandFocused: Story = {
  args: {
    $inputThemeStyle: 'brandfocused',
  },
};

export const GradientGlow: Story = {
  args: {
    $inputThemeStyle: 'gradientglow',
  },
};

export const SoftClay: Story = {
  args: {
    $inputThemeStyle: 'softclay',
  },
};

export const GhostLine: Story = {
  args: {
    $inputThemeStyle: 'ghostline',
  },
};

export const MoodPop: Story = {
  args: {
    $inputThemeStyle: 'moodpop',
  },
};

export const MonoGrid: Story = {
  args: {
    $inputThemeStyle: 'monogrid',
  },
};
