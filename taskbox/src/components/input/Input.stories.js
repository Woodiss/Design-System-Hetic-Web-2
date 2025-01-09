import { Input } from './Input';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
    argTypes: {
      type: {
        control: 'select',
        options: ['text', 'password', 'email', 'number'],
      }
    }
};


export const Regular = {
  args: {
    id: "inputText",
    type: "text",
    label: "Label",
    placeholder: "Enter text",
    error: "",
    isRequired: false
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
