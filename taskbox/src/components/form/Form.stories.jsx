// import { Form } from './Form';
// import { fn } from '@storybook/test';

// export default {
//   title: 'Components/Form',
//   component: Form,
//   parameters: {
//     layout: 'centered',
//   },
//   tags: ['autodocs'],
//     argTypes: {
//       type: {
//         control: 'select',
//         options: ['text', 'password', 'email', 'number'],
//       }
//     }
// };


// export const Regular = {
//   args: {
//     title: "Form Title",
//     subtitle: "Form subtitle",
//   },
// };

import { Form } from './Form';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { LinkTag } from '../link/LinkTag';
import { fn } from '@storybook/test';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Histoire pour le formulaire standard
export const Regular = {
  args: {
    title: "Form Title",
    subtitle: "Form subtitle",
    children: (
      <>
        <Input type="text" placeholder="Your Name" label="Name" name="name" />
        <Input type="email" placeholder="Your Email" label="Email" name="email" />
        <Button type="submit" content="Submit" />
      </>
    ),
  },
};

// Histoire pour un formulaire avec des champs password
export const LoginForm = {
  args: {
    title: "Login",
    subtitle: "Please enter your details",
    children: (
      <>
        <Input type="email" placeholder="Your Email" label="Email" name="email" />
        <Input type="password" placeholder="Your Password" label="Password" name="password" />
        <LinkTag content="Forgot Password?" link="#" />
        <Button type="submit" content="Login" />
      </>
    ),
  },
};

export const ResetPasswordForm = {
  args: {
    title: "Reset your password",
    subtitle: "Enter your credentials",
    children: (
      <>
        <Input type="email" placeholder="Your Email" label="Email" name="email" />
        <Button type="submit" content="Send" />
      </>
    ),
  },
};
