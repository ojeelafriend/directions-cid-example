import { Location } from './Location';

export class Direction {
  location: Location;
  zipCode: Number;

  constructor(zipCode: Number) {
    this.zipCode = zipCode;
    this.location = new Location();
  }

  direction(): object {
    const coords = this.location.getCoords();

    const raw = {
      zip: this.zipCode,
      location: coords,
    };

    return raw;
  }
}
