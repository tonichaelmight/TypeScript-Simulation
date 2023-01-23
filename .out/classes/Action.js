"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSubmittedActionsQueue = exports.SubmittedAction = exports.Action = void 0;
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
class TSubmittedActionsQueue {
    constructor() {
        this.actionArray = [];
        this.length = 0;
    }
    enqueue(arr) {
        const sortedArr = arr.sort((a, b) => b.character.stats.speed - a.character.stats.speed);
        sortedArr.forEach(action => {
            this.actionArray.push(action);
            this.length++;
        });
    }
    dequeue() {
        const nextAction = this.actionArray.shift();
        this.length--;
        return nextAction;
    }
    containsActionFromCharacter(character) {
        return this.actionArray.some(action => action.character === character);
    }
    purge(active) {
        this.actionArray = this.actionArray.filter(currentAction => {
            return active.includes(currentAction.character);
        });
        this.length = this.actionArray.length;
    }
}
exports.TSubmittedActionsQueue = TSubmittedActionsQueue;
