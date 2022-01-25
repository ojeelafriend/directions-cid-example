"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./dependency-injection/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json(), express_1.default.urlencoded({ extended: false }));
const serviceDirection = index_1.default.get('service.direction');
const direction = serviceDirection.create().then((success) => {
    console.log(success);
});
app.listen(4000, () => {
    console.log('Server is running');
});
