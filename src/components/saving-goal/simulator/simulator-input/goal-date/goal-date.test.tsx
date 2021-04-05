import * as React from 'react';
import { screen, render } from '@testing-library/react';
import GoalDate from '.';
import { SavingProvider } from '../../../saving-state';

describe('Somulator =>', () => {
  it('should display label', () => {
    render(
      <SavingProvider>
        <GoalDate />
      </SavingProvider>
    );

    expect(screen.getByText('Reach goal by')).toBeInTheDocument();
  });
});
