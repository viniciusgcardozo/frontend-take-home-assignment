import * as React from 'react';

import Header from './components/header';
import SavingGoal from './components/saving-goal';
import { GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <SavingGoal />
      <GlobalStyle />
    </>
  );
};

export default App;
