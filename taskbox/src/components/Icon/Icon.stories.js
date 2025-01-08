import Icon from './Icon';
import errorIcon from '../../components/assets/errorIcon.svg';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = {
  args: {
    src: errorIcon,
    alt: "",
    size: '50px',
    className: "",
    backgroundColor: "#000000",
  },
};

export const Large = {
  args: {
    src: errorIcon,
    alt: 'Icon Large',
    size: '100px',
  },
};

export const WithCustomClass = {
  args: {
    src: errorIcon,
    alt: 'Icon Custom Class',
    size: '60px',
    className: 'custom-icon',
  },
};
