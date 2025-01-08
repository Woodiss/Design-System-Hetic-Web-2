import { Text } from './Text';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Text',
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
      styleTest: {
        control: 'select',
        options: ['title-1', 'title-2', 'title-3', 'title-4', 'title-5', 'subtitle-1', 'subtitle-2', 'text-1', 'text-2', 'text-3', 'text-4', 'text-5'],
      }
  }
};


export const Regular = {
  args: {
    tag: "p",
    content: "Content",
    styleTest: "text-3"
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
