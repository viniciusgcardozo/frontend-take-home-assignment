import * as React from 'react';

import { Container, Image, Title, Button } from './styles';
import { useHistory } from 'react-router-dom';

type BlankGoalProps = {
  goalId: string;
  icon: string;
  title: string;
};

const BlankGoal = ({ goalId, icon, title }: BlankGoalProps) => {
  const history = useHistory();

  const goToGoal = () => {
    history.push(`/saving-goal/${goalId}`);
  };

  return (
    <Container>
      <Image src={icon} />
      <Title>{title}</Title>
      <Button onClick={goToGoal}>Setup Goal</Button>
    </Container>
  );
};

export default BlankGoal;
