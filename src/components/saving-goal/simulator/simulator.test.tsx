import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Simulator from '.';
import { SavingProvider } from '../saving-state';

describe('Simulator =>', () => {
  it('should have confirm button with no action', () => {
    render(
      <SavingProvider>
        <Simulator />
      </SavingProvider>
    );

    const button = screen.getByText('Confirm');
    expect(button).toBeInTheDocument();
  });
});
