class MilesConverter {
  MILE_CONVERSION_FACTOR = 69

  convert({ latitude, longitude = false }) {
    if (longitude) {
      return this.latitudeCorrect({
        equatorMiles: longitude * this.MILE_CONVERSION_FACTOR,
        latitude
      });
    }
    return latitude * this.MILE_CONVERSION_FACTOR;
  }

  latitudeCorrect({ equatorMiles, latitude }) {
    return Math.cos(latitude) * equatorMiles;
  }
}

export default MilesConverter;
