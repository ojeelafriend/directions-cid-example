"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
const Location_1 = require("./Location");
class Direction {
    constructor(zipCode) {
        this.zipCode = zipCode;
        this.location = new Location_1.Location();
    }
    direction() {
        const coords = this.location.getCoords();
        const raw = {
            zip: this.zipCode,
            location: coords,
        };
        return raw;
    }
}
exports.Direction = Direction;
