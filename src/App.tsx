import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/header';
import SavingGoal from './components/saving-goal';
import { GlobalStyle, theme } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SavingGoal />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
