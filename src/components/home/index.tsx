import * as React from 'React';

import { Container, ListContainer, Text } from './styles';
import BlankGoal from './blank-goal';
import GoalMap from '../../utils/goal-map';

const Home = () => {
  const mappedList = () => {
    const keys = Object.keys(GoalMap);

    return keys.map(key => {
      const { icon, title, data } = GoalMap[key];

      return data ? (
        <h1>FILLED DATA</h1>
      ) : (
        <BlankGoal goalId={key} icon={icon} title={title} />
      );
    });
  };

  return (
    <Container>
      <Text>Here are your saving goals!</Text>
      <ListContainer>{mappedList()}</ListContainer>
    </Container>
  );
};

export default Home;
