import { TLevelingMatrix, TStats } from "../interfaces/Stats";
import { Action } from "./Action";
import { Animal } from "./Animal";

const baseStats: TStats = {
  level: 0,
  health: 25,
  mana: 10,
  physicalAttack: 28,
  physicalDefense: 22,
  magicAttack: 12,
  magicDefense: 18,
  speed: 18,
  luck: 20
}

const baseLevelingMatrix: TLevelingMatrix = {
  health: 12,
  mana: 8,
  physicalAttack: 18,
  physicalDefense: 15,
  magicAttack: 15,
  magicDefense: 12,
  speed: 12,
  luck: 13
}

const catActions: Action[] = [
  new Action('meow', 5, () => console.log('Meow'))
]

export class Cat extends Animal {
  constructor(statsObject: TStats | number = Object.assign({}, baseStats), levelingMatrix: TLevelingMatrix = Object.assign({}, baseLevelingMatrix), level: number = 0) {
    if (typeof statsObject === 'number') {
      level = statsObject;
      statsObject = baseStats;
    }
    super(statsObject, levelingMatrix, level);
    this.attachActions(catActions);
  }
}
