"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    constructor(name, weight, execute) {
        this.name = name;
        this.weight = weight;
        this.execute = execute;
    }
}
exports.Action = Action;
