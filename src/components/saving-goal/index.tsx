import * as React from 'react';

import { Container, SavingHeader } from './styles';
import Simulator from './simulator';
import { SavingProvider } from './saving-state';

const SavingGoal = () => {
  return (
    <Container>
      <SavingHeader>
        Let&apos;s plan your <b>saving goal</b>
      </SavingHeader>
      <SavingProvider>
        <Simulator />
      </SavingProvider>
    </Container>
  );
};

export default SavingGoal;
