import { TStats, TLevelingMatrix } from "../interfaces/Stats";
import { Person } from "./Person";
import { Action, TActionsArray } from "./Action";

const baseStats: TStats = {
  level: 0,
  health: 35,
  mana: 25,
  physicalAttack: 18,
  physicalDefense: 18,
  magicAttack: 12,
  magicDefense: 12,
  speed: 10,
  luck: 10
}

const baseLevelingMatrix: TLevelingMatrix = {
  health: 18,
  mana: 14,
  physicalAttack: 15,
  physicalDefense: 15,
  magicAttack: 12,
  magicDefense: 12,
  speed: 8,
  luck: 7
}

const playerActions: TActionsArray = [
  new Action('whistle', 2, () => console.log('Player whistles')),
  new Action('cough', 1, () => console.log('Player coughs')),
  new Action('sing', 5, () => console.log('Player sings'))
]

export class Player extends Person {
  constructor(statsObject: TStats | number = Object.assign({}, baseStats), levelingMatrix: TLevelingMatrix = Object.assign({}, baseLevelingMatrix), level: number = 0) {
    if (typeof statsObject === 'number') {
      level = statsObject;
      statsObject = baseStats;
    }
    super(statsObject, levelingMatrix, level);
    this.attachActions(playerActions);
  }
}