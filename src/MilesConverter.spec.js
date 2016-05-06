import { expect } from 'chai';
import MilesConverter from './MilesConverter';

describe('MilesConverter', () => {
  context('When longitude is set', () => {
    context('at the equator', () => {
      it('returns the longitude in miles (* 69)', () => {
        const input = {
          latitude: 0,
          longitude: 55
        };
        const converter = new MilesConverter();

        const result = converter.convert(input);

        expect(result).to.equal(3795);
      });
    });

    context('at elevation', () => {
      it('returns the longitude in miles (* 69)', () => {
        const input = {
          latitude: 45,
          longitude: 55
        };
        const converter = new MilesConverter();

        const result = converter.convert(input);

        expect(Math.round(result)).to.equal(1994);
      });
    });
  });

  context('When longitude is not set', () => {
    it('rreturns the latitude in miles (* 69)', () => {
      const input = {
        latitude: 14
      };
      const converter = new MilesConverter();

      const result = converter.convert(input);

      expect(result).to.equal(966);
    });
  });
});
