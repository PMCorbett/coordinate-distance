import { expect } from 'chai';
import DegreeConverter from './DegreeConverter';

describe('DegreeConverter', () => {
  context('When longitude is set', () => {
    it('returns the longitude', () => {
      const input = {
        latitude: 1,
        longitude: 55
      };
      const converter = new DegreeConverter();

      const result = converter.convert(input);

      expect(result).to.equal(55);
    });
  });

  context('When longitude is not set', () => {
    it('returns the latitude', () => {
      const input = {
        latitude: 14
      };
      const converter = new DegreeConverter();

      const result = converter.convert(input);

      expect(result).to.equal(14);
    });
  });
});
