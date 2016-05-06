import chai, { expect } from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies);
import DistanceCalculator from './DistanceCalculator';

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

      calc.crowflyDistance();
      expect(converterSpy).to.have.been.called.with({
        latitude: 6
      });
      expect(converterSpy).to.have.been.called.with({
        latitude: 3,
        longitude: 5
      });
    });
  });
});
