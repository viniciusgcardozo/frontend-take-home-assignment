import college from '../../assets/icons/college.svg';
import vacation from '../../assets/icons/vacation.svg';
import car from '../../assets/icons/car.svg';
import wedding from '../../assets/icons/wedding.svg';
import emergencyFund from '../../assets/icons/emergency-fund.svg';
import baby from '../../assets/icons/baby.svg';

export type GoalState = {
  icon: string;
  title: string;
};

export type GoalData = {
  amount: number;
  date: Date;
};

const GoalMap: { [prop: string]: GoalState } = {
  1: {
    icon: college,
    title: 'Go to college'
  },
  2: {
    icon: vacation,
    title: 'Take a vacation'
  },
  3: {
    icon: car,
    title: 'Buy a car'
  },
  4: {
    icon: wedding,
    title: 'Throw a wedding party'
  },
  5: {
    icon: emergencyFund,
    title: 'Build an emergency fund'
  },
  6: {
    icon: baby,
    title: 'Have a baby'
  }
};

export default GoalMap;
