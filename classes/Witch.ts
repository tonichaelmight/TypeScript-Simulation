import { TLevelingMatrix, TStats } from "../interfaces/Stats"
import { Action } from "./Action";
import { Human } from "./Human"

const baseStats: TStats = {
  level: 0,
  health: 20,
  mana: 30,
  physicalAttack: 15,
  physicalDefense: 12,
  magicAttack: 20,
  magicDefense: 18,
  speed: 8,
  luck: 12
}

const baseLevelingMatrix: TLevelingMatrix = {
  health: 15,
  mana: 12,
  physicalAttack: 10,
  physicalDefense: 8,
  magicAttack: 15,
  magicDefense: 12,
  speed: 8,
  luck: 8
}

const witchActions: Action[] = [
  new Action('scry', 15, (caller) => console.log(`${caller.screenName} scries in her massive orb`))
];

export class Witch extends Human {
  constructor(statsObject: TStats = Object.assign({}, baseStats), levelingMatrix: TLevelingMatrix = Object.assign({}, baseLevelingMatrix), level: number = 0) {
    if (typeof statsObject === 'number') {
      level = statsObject;
      statsObject = baseStats;
    }
    super(statsObject, levelingMatrix, level);
    this.attachActions(witchActions);
    this.screenName = `${this.getRandomName()} the Witch`;
  }
  
  getRandomName() {
    const names = ['Isabel', 'Forlonica', 'Gertrude', 'Morticia'];
    return super.getRandomName(names);
  }
}