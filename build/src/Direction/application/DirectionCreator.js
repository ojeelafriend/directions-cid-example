"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionCreator = void 0;
const Direction_1 = require("../domain/Direction");
class DirectionCreator {
    create(zipCode = 4432) {
        return new Promise((resolve, reject) => {
            if (!zipCode)
                return reject('Zip not exists');
            const newDirection = new Direction_1.Direction(zipCode);
            resolve(newDirection.direction());
        });
    }
}
exports.DirectionCreator = DirectionCreator;
