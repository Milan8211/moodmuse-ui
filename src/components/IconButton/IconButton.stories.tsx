import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './IconButton';
import { Icon } from '@iconify/react';
import { themes } from '../../styles/themes';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    $iconButtonThemeStyle: {
      control: 'select',
      options: Object.keys(themes),
    },
    $iconButtonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    $iconButtonRadius: {
      control: 'select',
      options: ['no', 'small', 'medium', 'large', 'pill'],
    },
    $iconButtonDropShadow: {
      control: 'boolean',
    },
    $iconButtonLabel: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
    $iconButtonLabel: 'Home',
    $iconButtonSize: 'medium',
    $iconButtonRadius: 'pill',
    $iconButtonThemeStyle: 'neoglow',
    $iconButtonDropShadow: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $iconButtonLabel: 'Home',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const NeoGlow: Story = {
  args: {
    $iconButtonThemeStyle: 'neoglow',
    $iconButtonLabel: 'NeoGlow',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const BrandFocused: Story = {
  args: {
    $iconButtonThemeStyle: 'brandfocused',
    $iconButtonLabel: 'BrandFocused',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const GradientGlow: Story = {
  args: {
    $iconButtonThemeStyle: 'gradientglow',
    $iconButtonLabel: 'GradientGlow',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const SoftClay: Story = {
  args: {
    $iconButtonThemeStyle: 'softclay',
    $iconButtonLabel: 'SoftClay',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const GhostLine: Story = {
  args: {
    $iconButtonThemeStyle: 'ghostline',
    $iconButtonLabel: 'GhostLine',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const MoodPop: Story = {
  args: {
    $iconButtonThemeStyle: 'moodpop',
    $iconButtonLabel: 'MoodPop',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const MonoGrid: Story = {
  args: {
    $iconButtonThemeStyle: 'monogrid',
    $iconButtonLabel: 'MonoGrid',
    $iconButtonIcon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const Large: Story = {
  args: {
    $iconButtonSize: 'large',
    $iconButtonLabel: 'Large',
  },
};

export const Small: Story = {
  args: {
    $iconButtonSize: 'small',
    $iconButtonLabel: 'Small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    $iconButtonLabel: 'Disabled',
  },
};
