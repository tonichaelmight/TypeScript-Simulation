import { Being } from "./Being";
import { TStats, TLevelingMatrix } from "../interfaces/Stats";

const baseStats: TStats = {
  level: 0,
  health: 30,
  mana: 25,
  physicalAttack: 18,
  physicalDefense: 18,
  magicAttack: 12,
  magicDefense: 12,
  speed: 10,
  luck: 10
}

const baseLevelingMatrix: TLevelingMatrix = {
  health: 16,
  mana: 8,
  physicalAttack: 12,
  physicalDefense: 12,
  magicAttack: 10,
  magicDefense: 10,
  speed: 7,
  luck: 5
}

export abstract class Human extends Being {
  constructor(statsObject: TStats = Object.assign({}, baseStats), levelingMatrix: TLevelingMatrix = Object.assign({}, baseLevelingMatrix), level: number = 0) {
    super(statsObject, levelingMatrix, level);
  }

  getRandomName(names: string[]) {
    return super.getRandomName(names);
  }
}