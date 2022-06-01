import { createTheme, ThemeProvider } from '@rneui/themed';
import React from 'react';
import Index from './src/Index';
import Navegacion from './src/utils/Navegacion';

const myTheme = createTheme({
  lightColors: {
    primary: '#BD2020',
    // secondary: '#fff',
    // background: '#fff',
    // text: '#fff',
    // border: '#fff',
  },
  darkColors: {
    primary: '#BD2020',
  },
  Header: {
    backgroundColor: '#A8C926',
  },
  mode: 'dark',
});

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Index />
    </ThemeProvider>
  );
};

export default App;
