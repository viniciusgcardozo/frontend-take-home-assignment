import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from '.';

describe('Header =>', () => {
  it('should redirect to home when clicking logo image', () => {
    render(
      <MemoryRouter initialEntries={['/other-page']}>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('logo-img'));

    expect(window.location.pathname).toEqual('/');
  });
});
