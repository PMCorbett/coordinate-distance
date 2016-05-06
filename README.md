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

## Installation

* Clone The directory
* Run `npm install`
* Run Tests: `npm run test:multi`
