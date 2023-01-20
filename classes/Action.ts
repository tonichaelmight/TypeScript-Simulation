import { Being } from "./Being";

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

