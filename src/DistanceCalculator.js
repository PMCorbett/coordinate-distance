class DistanceCalculator {
  constructor({ point1, point2, unitConverter }) {
    this.point1 = point1;
    this.point2 = point2;
    this.unitConverter = unitConverter;
  }

  latitudeDistance() {
    return this.unitConverter.convert({
      latitude: this.latitudeDifference()
    });
  }

  longitudeDistance() {
    return this.unitConverter.convert({
      latitude: this.averagelatitude(),
      longitude: this.longitudeDifference()
    });
  }

  crowflyDistance() {
    const latDist = this.latitudeDistance();
    const longDist = this.longitudeDistance();
    return (latDist + longDist) / 2;
  }

  // Private

  averagelatitude() {
    return (this.point1.lat + this.point2.lat) / 2;
  }

  latitudeDifference() {
    return Math.abs(this.point1.lat - this.point2.lat);
  }

  longitudeDifference() {
    return Math.abs(this.point1.long - this.point2.long);
  }
}

export default DistanceCalculator;
