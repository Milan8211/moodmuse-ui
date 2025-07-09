import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Icon } from '@iconify/react';
import { themes } from '../../styles/themes';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
    $radius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large', 'pill'],
    },
    $dropShadow: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Click Me',
    $size: 'medium',
    $themeStyle: 'neoglow',

    $radius: 'medium',
    $dropShadow: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const NeoGlow: Story = {
  args: {
    $themeStyle: 'neoglow',
    children: 'NeoGlow Button',
  },
};

export const BrandFocused: Story = {
  args: {
    children: 'BrandFocused Button',
    $themeStyle: 'brandfocused',
  },
};

export const GradientGlow: Story = {
  args: {
    children: 'GradientGlow Button',
    $themeStyle: 'gradientglow',
  },
};

export const SoftClay: Story = {
  args: {
    children: 'SoftClay Button',
    $themeStyle: 'softclay',
    $size: 'medium',
  },
};

export const GhostLine: Story = {
  args: {
    children: 'GhostLine Button',
    $themeStyle: 'ghostline',
    $size: 'medium',
  },
};

export const MoodPop: Story = {
  args: {
    children: 'MoodPop Button',
    $themeStyle: 'moodpop',
    $size: 'medium',
    $leftIcon: <Icon icon="mdi:home" />,
  },
};

export const MonoGrid: Story = {
  args: {
    children: 'MonoGrid Button',
    $themeStyle: 'monogrid',
    $size: 'medium',
  },
};

export const Large: Story = {
  args: {
    $size: 'large',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    $size: 'small',
    children: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
