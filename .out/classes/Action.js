"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmittedAction = exports.Action = void 0;
class Action {
    constructor(name, weight, execute) {
        this.name = name;
        this.weight = weight;
        this.execute = execute;
    }
}
exports.Action = Action;
class SubmittedAction {
    constructor(action, character) {
        this.action = action;
        this.character = character;
    }
    execute() {
        this.character.callAction(this.action);
    }
}
exports.SubmittedAction = SubmittedAction;
