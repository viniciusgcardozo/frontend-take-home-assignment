import * as React from 'react';

import { Container, Button } from './styles';
import SimulatorHeader from './simulator-header';
import SimulatorInput from './simulator-input';
import SimulatorOutput from './simulator-output';

const Simulator = () => {
  return (
    <Container>
      <SimulatorHeader />
      <SimulatorInput />
      <SimulatorOutput />
      <Button>Confirm</Button>
    </Container>
  );
};

export default Simulator;
