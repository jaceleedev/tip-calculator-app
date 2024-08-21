import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Input from './Input';

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconConfig: {
      description:
        'Icon configuration including the source, dimensions, and margin settings',
      control: {
        type: 'object',
      },
    },
    isValid: {
      description: 'Indicates whether the input value is valid',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Message displayed when the input is invalid',
      control: 'text',
    },
    value: {
      description: 'The current value of the input field.',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text displayed when the input is empty',
      control: 'text',
    },
    onChange: {
      description: 'Event handler for input value changes',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dollar: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '311px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    iconConfig: {
      src: '/images/icon-dollar.svg',
      width: 11,
      height: 17,
      marginLeft: 19.26,
    },
    placeholder: '0',
    isValid: true,
  },
};

export const People: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '311px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    iconConfig: {
      src: '/images/icon-person.svg',
      width: 13,
      height: 16,
      marginLeft: 17,
    },
    placeholder: '0',
    isValid: true,
  },
};

export const Custom: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '147.5px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Custom',
  },
};

export const Valid: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '311px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    iconConfig: {
      src: '/images/icon-person.svg',
      width: 13,
      height: 16,
      marginLeft: 17,
    },
    isValid: true,
    value: 5,
    onChange: fn(),
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const Invalid: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '311px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    iconConfig: {
      src: '/images/icon-person.svg',
      width: 13,
      height: 16,
      marginLeft: 17,
    },
    isValid: false,
    errorMessage: `Can't be zero`,
    value: 0,
    onChange: fn(),
  },
  parameters: {
    pseudo: { focus: true },
  },
};
