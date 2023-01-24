import { Being } from "./Being";

type TSoloActionCallback = (caller: Being) => void;
type TActionWithRecipientCallback = (caller: Being, recipient: Being) => void;

interface IExecuteNoRecipient {
  execute: TSoloActionCallback
}

interface IExecuteWithRecipient {
  execute: TActionWithRecipientCallback
  recipientType: string
}

type TActionConfig = {
  recipientType?: string;
  weightModifiers?: number; // this will take stats/behaviors into account
}

export abstract class Action {
  name: string;
  weight: number;
  execute: Function = () => {}
  weightModifiers?: number;
  recipientType?: string;
  
  constructor(name: string, weight: number, options?: TActionConfig) {
    this.name = name;
    this.weight = weight;

    this.weightModifiers = options?.weightModifiers;
  }
}

export class SoloAction extends Action implements IExecuteNoRecipient {
  execute: TSoloActionCallback;

  constructor(name: string, weight: number, execute: TSoloActionCallback, options?: TActionConfig) {
    super(name, weight, options);
    this.execute = execute;
  }
}

export class ActionWithRecipient extends Action implements IExecuteWithRecipient {
  execute: TActionWithRecipientCallback;
  recipientType: string;

  constructor(name: string, weight: number, execute: TActionWithRecipientCallback, options: TActionConfig) {
    super(name, weight, options);
    this.execute = execute;
    this.recipientType = options.recipientType || typeof Being;
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