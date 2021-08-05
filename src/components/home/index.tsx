import * as React from 'React';

import { Container, ListContainer, Text } from './styles';
import BlankGoal from './blank-goal';
import GoalMap from '../../utils/goal-map';
import GoalPreview from './goal-preview';

const Home = () => {
  const mappedList = () => {
    const keys = Object.keys(GoalMap);

    return keys.map(key => {
      const data = localStorage.getItem(key);
      const { icon, title } = GoalMap[key];

      return data ? (
        <GoalPreview goalId={key} icon={icon} title={title} data={data} />
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
