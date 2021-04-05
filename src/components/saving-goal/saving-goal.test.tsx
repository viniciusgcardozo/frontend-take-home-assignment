import * as React from 'react';
import { render } from '@testing-library/react';
import SavingGoal from '.';
import { getByTextDeep } from '../../utils/spec-helper';

describe('SavingGoal =>', () => {
  it('should display goal header', () => {
    render(<SavingGoal />);

    const text = getByTextDeep("Let's plan your saving goal");
    expect(text).toBeInTheDocument();
  });
});
