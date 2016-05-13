# Coordinate Distance Difference Calculator

Calculates distances between two latitude / longitude coordinates in degrees or miles.

## Example Usage

```javascript
  import DistanceCalculator from './DistanceCalculator';
  import MilesConverter from './MilesConverter';

  const Distance = new DistanceCalculator({
    point1: {
      latitude: 12,
      longitude: 45
    },
    point2: {
      latitude: 12.5,
      longitude: 33.7
    },
    unitConverter: MilesConverter
  });

  const length = Distance.crowflyDistance();
```

## Sanity Spec

```javascript
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
```

## Installation

* Clone The directory
* Run `npm install`
* Run Tests: `npm run test:multi`
