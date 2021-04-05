import * as React from 'react';
import { screen, render } from '@testing-library/react';
import SimulatorHeader from '.';

describe('SimulatorHeader =>', () => {
  beforeEach(() => render(<SimulatorHeader />));

  it('should diplay house image', () => {
    const house = screen.getByRole('img');
    expect(house).toBeInTheDocument();
  });

  it('should display title', () => {
    const text = screen.getByText('Buy a house');
    expect(text).toBeInTheDocument();
  });

  it('should display subtitle', () => {
    const text = screen.getByText('Saving goal');
    expect(text).toBeInTheDocument();
  });
});
