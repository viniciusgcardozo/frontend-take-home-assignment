import { MediaSM } from '.';

describe('MediaQuery =>', () => {
  describe('MediaSM =>', () => {
    it('should return media query basic info', () => {
      const result = MediaSM``;

      expect(result).toMatch('@media screen and (max-width: ');
    });

    it('should return media query for sm', () => {
      const result = MediaSM``;

      expect(result).toMatch('560px');
    });

    it('should return props inside media query', () => {
      const result = MediaSM`
        width: 100px;
        display: flex;
      `;

      expect(
        result.replace(/\s/g, '').match('{width:100px;display:flex;}')
      ).toBeTruthy();
    });
  });
});
