"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const Coord_1 = __importDefault(require("./Coord"));
class Location {
    getCoords() {
        return new Coord_1.default(Math.random(), Math.random());
    }
}
exports.Location = Location;
