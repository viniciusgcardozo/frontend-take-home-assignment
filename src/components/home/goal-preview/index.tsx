import React from 'react';
import { GoalData } from '../../../utils/goal-map';
import {
  Container,
  Image,
  Title,
  DataContainer,
  Text,
  AmountText,
  DateText
} from './styles';

type GoalPreviewProps = {
  goalId: string;
  icon: string;
  title: string;
  data: GoalData;
};

const GoalPreview = ({ goalId, icon, title, data }: GoalPreviewProps) => {
  return (
    <Container>
      <Image src={icon} />
      <Title>{title}</Title>
      <DataContainer>
        <Text>Goal Amount</Text>
        <AmountText>{data.amount}</AmountText>
        <Text>Reach goal by</Text>
        <DateText>{data.date?.toString()}</DateText>
      </DataContainer>
    </Container>
  );
};

export default GoalPreview;
