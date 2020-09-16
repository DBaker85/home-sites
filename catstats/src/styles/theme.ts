import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  secondary: 'hsl(67, 15%, 88%)',
  primary: 'hsl(207, 8%, 21%)',
  pink: 'hsl(317, 36%, 65%)',
  green: 'hsl(89, 47%, 40%)',
  blue: 'hsl(187, 68%, 36%)',
  orange: 'hsl(24, 85%, 56%)',
};

const dark: DefaultTheme = {
  secondary: 'hsl(207, 8%, 21%)',
  primary: 'hsl(67, 15%, 88%)',
  pink: 'hsl(318, 22%, 65%)',
  green: 'hsl(89, 29%, 40%)',
  blue: 'hsl(188, 42%, 36%)',
  orange: 'hsl(24, 53%, 56%)',
};

export { light, dark };
