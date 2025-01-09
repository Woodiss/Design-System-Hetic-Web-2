import { Select } from './Select';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'array',
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
  },
};

export const Regular = {
  args: {
    label: "Label",
    options: ["1 option", "1 option", "1 option"],
    error: "",
  },
};

export const WithError = {
  args: {
    label: "Label",
    options: ["1 option", "1 option", "1 option"],
    error: "Error message",
  },
};
