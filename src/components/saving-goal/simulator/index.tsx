import * as React from 'react';

import { Container, Button } from './styles';
import SimulatorHeader from './simulator-header';
import SimulatorInput from './simulator-input';
import SimulatorOutput from './simulator-output';
import { GoalState } from '../../../utils/goal-map';
import { SavingContext } from '../saving-state';

const Simulator = ({ goal, goalId }: { goal: GoalState; goalId: string }) => {
  const goalData = React.useContext(SavingContext);

  const persistGoal = () => {
    localStorage.setItem(goalId, JSON.stringify(goalData));
  };

  return (
    <Container>
      <SimulatorHeader icon={goal.icon} title={goal.title} />
      <SimulatorInput />
      <SimulatorOutput />
      <Button onClick={persistGoal}>Confirm</Button>
    </Container>
  );
};

export default Simulator;
