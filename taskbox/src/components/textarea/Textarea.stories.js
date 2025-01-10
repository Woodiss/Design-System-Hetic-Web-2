import { Textarea } from './Textarea';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};


export const Regular = {
  args: {
    id: "TextareaId",
    label: "Label",
    placeholder: "Enter text",
    error: "",
    isRequired: false
  },
};