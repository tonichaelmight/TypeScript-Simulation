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

export type ActionsArray = Action[];