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
    $buttonThemeStyle: {
      control: 'select',
      options: Object.keys(themes),
    },
    $buttonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $buttonRadius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large', 'pill'],
    },
    $buttonDropShadow: {
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
    $buttonSize: 'medium',
    $buttonThemeStyle: 'neoglow',
    $buttonRadius: 'medium',
    $buttonDropShadow: true,
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
    $buttonThemeStyle: 'neoglow',
    children: 'NeoGlow Button',
  },
};

export const BrandFocused: Story = {
  args: {
    children: 'BrandFocused Button',
    $buttonThemeStyle: 'brandfocused',
  },
};

export const GradientGlow: Story = {
  args: {
    children: 'GradientGlow Button',
    $buttonThemeStyle: 'gradientglow',
  },
};

export const SoftClay: Story = {
  args: {
    children: 'SoftClay Button',
    $buttonThemeStyle: 'softclay',
    $buttonSize: 'medium',
  },
};

export const GhostLine: Story = {
  args: {
    children: 'GhostLine Button',
    $buttonThemeStyle: 'ghostline',
    $buttonSize: 'medium',
  },
};

export const MoodPop: Story = {
  args: {
    children: 'MoodPop Button',
    $buttonThemeStyle: 'moodpop',
    $buttonSize: 'medium',
    $buttonLeftIcon: <Icon icon="mdi:home" />,
  },
};

export const MonoGrid: Story = {
  args: {
    children: 'MonoGrid Button',
    $buttonThemeStyle: 'monogrid',
    $buttonSize: 'medium',
  },
};

export const Large: Story = {
  args: {
    $buttonSize: 'large',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    $buttonSize: 'small',
    children: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
