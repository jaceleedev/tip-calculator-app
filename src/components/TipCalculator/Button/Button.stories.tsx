import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The text content of the button',
      control: 'text',
    },
    variant: {
      description: 'The visual style variant of the button',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isButtonSelected: {
      description: 'Whether the button is in a selected state',
      control: 'boolean',
    },
    onClick: {
      description: 'Function to be called when the button is clicked',
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: 'boolean',
    },
  },
  args: {
    label: '15%',
    variant: 'primary',
    isButtonSelected: false,
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '150px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimarySelected: Story = {
  args: {
    isButtonSelected: true,
  },
};

export const PrimaryHover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'RESET',
    variant: 'secondary',
  },
};

export const SecondaryHover: Story = {
  args: {
    label: 'RESET',
    variant: 'secondary',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SecondaryDisabled: Story = {
  args: {
    label: 'RESET',
    variant: 'secondary',
    disabled: true,
  },
};
