import * as React from 'react';
import { screen, render } from '@testing-library/react';

import { getByTextDeep } from '.';

describe('SpecHelper =>', () => {
  describe('GetByTextDeep =>', () => {
    it('should match simple text', () => {
      render(<p>Testing deep text match</p>);

      expect(getByTextDeep('Testing deep text match')).toBeInTheDocument();
    });

    it('should throw error trying to match text with queryByText when there is a HTML tag inside', () => {
      render(
        <p>
          Testing <b>deep</b> text match
        </p>
      );

      expect(screen.queryByText('Testing deep text match')).toBeNull();
    });

    it('should match sequence text when there is a HTML tag inside', () => {
      render(
        <p>
          Testing <b>deep</b> text match
        </p>
      );

      expect(getByTextDeep('Testing deep text match')).toBeInTheDocument();
    });
  });
});
