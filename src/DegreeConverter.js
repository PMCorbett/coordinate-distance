class DegreeConverter {
  convert({ latitude, longitude = false }) {
    if (longitude) {
      return longitude;
    }
    return latitude;
  }
}

export default DegreeConverter;
