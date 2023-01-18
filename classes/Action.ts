import { Being } from "./Being";

export class Action {
  name: string;
  weight: number;
  execute: () => void;
  
  constructor(name: string, weight: number, execute: () => void) {
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
    this.action.execute();
  }
}

export type TActionsArray = Action[];
