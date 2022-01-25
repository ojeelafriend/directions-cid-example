import Coord from './Coord';
import { CoordService } from './CoordService';

export class Location implements CoordService {
  getCoords(): Coord {
    return new Coord(Math.random(), Math.random());
  }
}
