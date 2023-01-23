import { Being } from "./Being";

type TActionConfig = {
  weight: number;
  recipientType:
}

export class Action {
  name: string;
  weight: number;
  execute: (caller: Being) => void;
  
  constructor(name: string, weight: number, execute: (caller: Being) => void) {
    this.name = name;
    this.weight = weight;
    this.execute = execute;
  }
}

export class SubmittedAction {
  action: Action;
  character: Being;

  constructor(action: Action, character: Being) {
    this.action = action;
    this.character = character;
  }

  execute() {
    this.character.callAction(this.action);
  }
}

export type TActionsArray = Action[];

export type TSubmittedActionsArray = SubmittedAction[];

export class TSubmittedActionsQueue {
  actionArray: TSubmittedActionsArray = [];
  length: number = 0;

  enqueue(arr: TSubmittedActionsArray) {
    const sortedArr = arr.sort((a, b) => b.character.stats.speed - a.character.stats.speed)
    sortedArr.forEach(action => {
      this.actionArray.push(action);
      this.length++;
    })
  }

  dequeue() {
    const nextAction = this.actionArray.shift();
    this.length--;
    return nextAction;
  }

  containsActionFromCharacter(character: Being) {
    return this.actionArray.some(action => action.character === character);
  }

  purge(active: Being[]) {
    this.actionArray = this.actionArray.filter(currentAction => {
      return active.includes(currentAction.character);
    });
    this.length = this.actionArray.length;
  }
}