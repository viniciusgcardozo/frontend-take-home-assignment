import * as React from 'react';

import { Container } from './styles';
import TotalAmount from './total-amount';
import GoalDate from './goal-date';

const SimulatorInput = () => {
  return (
    <Container>
      <TotalAmount />
      <GoalDate />
    </Container>
  );
};

export default SimulatorInput;
