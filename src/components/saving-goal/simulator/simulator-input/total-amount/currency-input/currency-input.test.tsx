import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import CurrencyInput from '.';
import { SavingProvider } from '../../../../saving-state';

describe('CurrencyInput =>', () => {
  it('should have confirm button with no action', async () => {
    render(
      <SavingProvider>
        <CurrencyInput />
      </SavingProvider>
    );

    fireEvent.change(screen.getByTestId('currency-input'), {
      target: { value: '1234567' }
    });

    const input = await screen.findByDisplayValue('1,234,567');
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle('background-image: url()');
  });
});
