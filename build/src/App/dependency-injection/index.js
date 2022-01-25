"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_dependency_injection_1 = require("node-dependency-injection");
const container = new node_dependency_injection_1.ContainerBuilder();
const loader = new node_dependency_injection_1.YamlFileLoader(container);
try {
    loader.load(`${__dirname}/application.yaml`);
}
catch (err) {
    console.log('direccion: ' + `${__dirname}/application.yaml`);
    console.log('El error es ' + err);
}
exports.default = container;
