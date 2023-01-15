import { Being } from "./Being";
import { TStats, TLevelingMatrix } from "../interfaces/Stats";

const baseStats: TStats = {
  level: 0,
  health: 20,
  mana: 10,
  physicalAttack: 22,
  physicalDefense: 22,
  magicAttack: 8,
  magicDefense: 10,
  speed: 15,
  luck: 20
}

const baseLevelingMatrix: TLevelingMatrix = {
  health: 12,
  mana: 5,
  physicalAttack: 15,
  physicalDefense: 15,
  magicAttack: 5,
  magicDefense: 12,
  speed: 10,
  luck: 10
}

// About Animals
  // Generally less agressive than monsters, but more aggressive that Persons
  // Generally excel in physical attack and defense and weak in magic

export abstract class Animal extends Being {
  constructor(statsObject: TStats = baseStats, levelingMatrix: TLevelingMatrix = baseLevelingMatrix, level: number = 0) {
    super(statsObject, levelingMatrix, level);
  }
}