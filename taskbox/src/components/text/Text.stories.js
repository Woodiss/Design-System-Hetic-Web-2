import { Text } from './Text';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
        control: 'select',
        options: [null, 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'em'],
      },
      fontOptions: {
        control: 'select',
        options: ['title-1-semi-bold', 'title-2-semi-bold', 'title-3-semi-bold', 'title-4-semi-bold', 'title-5-semi-bold', 'subtitle-regular', 'subtitle-regular-semi-bold', 'text-regular', 'text-regular-medium', 'text-regular-semi-bold', 'text-small', 'text-small-medium'],
      }
  }
};


export const Regular = {
  args: {
    tag: "p",
    content: "Content",
    fontOptions: "text-regular"
  },
};

// export const Password = {
//   args: {
//     id: "inputPassword",
//     type: "password",
//     label: "Password Input",
//     placeholder: "Enter password",
//     error: "",
//     value: "",
//   },
// };

// export const Email = {
//   args: {
//     id: "inputEmail",
//     type: "email",
//     label: "Email Input",
//     placeholder: "Enter email",
//     error: "",
//     value: "",
//   },
// };
