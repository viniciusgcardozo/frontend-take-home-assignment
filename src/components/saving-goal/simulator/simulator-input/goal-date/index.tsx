import * as React from 'react';

import { Container, Label } from './styles';
import ArrowNavigation from './arrow-navigation';

const GoalDate = () => {
  return (
    <Container>
      <Label>Reach goal by</Label>
      <ArrowNavigation />
    </Container>
  );
};

export default GoalDate;
