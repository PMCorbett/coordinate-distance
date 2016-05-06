import chai, { expect } from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
import DistanceCalculator from './DistanceCalculator';
import DegreeConverter from './DegreeConverter';
import MilesConverter from './MilesConverter';

describe('distanceCalculator', () => {
  describe('latitudeDistance', () => {
    it('returns the difference in latitude', () => {
      const converterSpy = chai.spy();
      class DummyConverter {
        convert(props) {
          return converterSpy(props);
        }
      }
      const points = {
        point1: { latitude: 51, long: 1 },
        point2: { latitude: 56, long: 1 },
        unitConverter: new DummyConverter()
      };
      const calc = new DistanceCalculator(points);

      calc.latitudeDistance();
      expect(converterSpy).to.have.been.called.with({
        latitude: 5
      });
    });
  });

  describe('longitudeDistance', () => {
    it('returns the difference in longitude', () => {
      const converterSpy = chai.spy();
      class DummyConverter {
        convert(props) {
          return converterSpy(props);
        }
      }
      const points = {
        point1: { latitude: 0, long: 1 },
        point2: { latitude: 6, long: 6 },
        unitConverter: new DummyConverter()
      };
      const calc = new DistanceCalculator(points);

      calc.longitudeDistance();
      expect(converterSpy).to.have.been.called.with({
        latitude: 3,
        longitude: 5
      });
    });
  });

  describe('crowflyDistance', () => {
    it('returns the line distance', () => {
      const points = {
        point1: { latitude: 0, long: 1 },
        point2: { latitude: 3, long: 5 },
        unitConverter: new DegreeConverter()
      };
      const calc = new DistanceCalculator(points);

      const result = calc.crowflyDistance();

      expect(result).to.eql(5);
    });

    it('returns a reasonable approximation of a known distance', () => {
      const points = {
        point1: { latitude: 52.547125, long: -1.3947593 }, // Hinckley
        point2: { latitude: 52.6370281, long: -1.1407814 }, // Leicester
        unitConverter: new MilesConverter()
      };
      const calc = new DistanceCalculator(points);

      const result = parseFloat(calc.crowflyDistance().toFixed(1));

      expect(result).to.eql(13.5);
    });
  });
});
