import * as React from 'react';
import { screen, render } from '@testing-library/react';
import TotalAmount from '.';

describe('TotalAmount =>', () => {
  it('should display label', () => {
    render(<TotalAmount />);

    expect(screen.getByText('Total amount')).toBeInTheDocument();
  });
});
