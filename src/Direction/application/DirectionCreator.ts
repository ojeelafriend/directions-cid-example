import { Direction } from '../domain/Direction';

export class DirectionCreator {
  create(zipCode: number = 4432) {
    return new Promise((resolve, reject) => {
      if (!zipCode) return reject('Zip not exists');

      const newDirection = new Direction(zipCode);
      resolve(newDirection.direction());
    });
  }
}
