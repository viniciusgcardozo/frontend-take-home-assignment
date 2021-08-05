import * as React from 'react';

import { Container, SavingHeader } from './styles';
import Simulator from './simulator';
import { SavingProvider } from './saving-state';
import { useParams } from 'react-router-dom';
import GoalMap from '../../utils/goal-map';

const SavingGoal = () => {
  const { key } = useParams();
  const Goal = GoalMap[key];

  return (
    <Container>
      <SavingHeader>
        Let&apos;s plan your <b>saving goal</b>
      </SavingHeader>
      <SavingProvider>
        <Simulator goal={Goal} goalId={key} />
      </SavingProvider>
    </Container>
  );
};

export default SavingGoal;
