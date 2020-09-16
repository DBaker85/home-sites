// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    pink: string;
    green: string;
    blue: string;
    orange: string;
  }
}
