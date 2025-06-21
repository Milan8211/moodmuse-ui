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
    fontFamily: {
      control: 'select',
      options: Object.keys(themes.neoglow.typography.fontFamilies),
    },
    themeStyle: {
      control: 'select',
      options: Object.keys(themes),
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
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    icon: <Icon icon="line-md:home" className="icon" />,
    label: 'Home',
    size: 'medium',
    radius: 'pill',
    themeStyle: 'neoglow',
    dropShadow: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Home',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const NeoGlow: Story = {
  args: {
    themeStyle: 'neoglow',
    label: 'NeoGlow',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const BrandFocused: Story = {
  args: {
    themeStyle: 'brandfocused',
    icon: <Icon icon="line-md:home" className="icon" />,
    label: 'BrandFocused',
  },
};

export const GradientGlow: Story = {
  args: {
    themeStyle: 'gradientglow',
    label: 'GradientGlow',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const SoftClay: Story = {
  args: {
    themeStyle: 'softclay',
    label: 'SoftClay',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const GhostLine: Story = {
  args: {
    themeStyle: 'ghostline',
    label: 'GhostLine',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const MoodPop: Story = {
  args: {
    themeStyle: 'moodpop',
    label: 'MoodPop',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const MonoGrid: Story = {
  args: {
    themeStyle: 'monogrid',
    label: 'MonoGrid',
    icon: <Icon icon="line-md:home" className="icon" />,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
};
