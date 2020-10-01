import React, { FunctionComponent } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

import { RootStateType } from './store/index';
import { light, dark } from './styles/theme';
import { globalStyle } from './styles';
import { Main } from './main/Main';

const GlobalStyle = createGlobalStyle`${globalStyle}`;

const App: FunctionComponent = () => {
  const theme = useSelector((state: RootStateType) => state.theme);
  return (
    <ThemeProvider theme={theme.dark ? dark : light}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export { App };
