import { TLevelingMatrix, TStats, IStats } from "../interfaces/Stats";
import { getRandomInt } from "../utils";
import { Action, SubmittedAction, TActionsArray } from "./Action";

const baseStats: TStats = {
  level: 0,
  health: 20,
  mana: 20,
  physicalAttack: 15,
  physicalDefense: 15,
  magicAttack: 10,
  magicDefense: 10,
  speed: 8,
  luck: 5
}

const baseLevelingMatrix: TLevelingMatrix = {
  health: 12,
  mana: 8,
  physicalAttack: 10,
  physicalDefense: 10,
  magicAttack: 7,
  magicDefense: 7,
  speed: 5,
  luck: 3
}

const beingActions: TActionsArray = [
  new Action('leave', 1, () => getRandomInt(4) === 0 ? console.log('Player leaves') : console.log('Player thinks'))
]


// About Beings
// They have stats, including a level
// They are mutually interactive
// They can engage in combat with each other
// Can level up, using a leveling matrix
// Have a max level of 100 (no overriding)
// Subclasses of Being can overwrite the default stats and leveling matrix (or anything really)
// First level extensions should always include an overwrite, beyond that is more optional
// Have a tick() method

export abstract class Being implements IStats {
  stats: TStats;
  levelingMatrix: TLevelingMatrix;
  actions: TActionsArray = [];

  constructor(statsObject: TStats = Object.assign({}, baseStats), levelingMatrix: TLevelingMatrix = Object.assign({}, baseLevelingMatrix), level: number = 0) {
    if (typeof statsObject === 'number') {
      level = statsObject;
      statsObject = baseStats;
    }
    this.stats = statsObject;
    this.levelingMatrix = levelingMatrix;
    this.attachActions(beingActions);
    while (this.stats.level < level) {
      this.levelUp();
    }
  }

  attachActions(actions: TActionsArray) {
    // console.log(this.actions);
    // console.log(actions);
    this.actions = this.actions.concat(actions);
  }

  levelStat(stat: string) {
    this.stats[stat] += Math.round(getRandomInt((this.levelingMatrix[stat]) / 5) * Math.log2(this.stats.level * 2));
    let matrixAddend = Math.round(Math.log2(getRandomInt(getRandomInt(this.stats[stat]) * getRandomInt(this.stats.luck)) / (100 * Math.sqrt(this.stats.level)) ))
    if (matrixAddend < 0 || matrixAddend === -Infinity || matrixAddend === Infinity) {
      matrixAddend = 0;
    }
    console.log(matrixAddend);
    this.levelingMatrix[stat] += matrixAddend;
  }

  levelUp() {
    if (this.stats.level < 100) {
      this.stats.level++;
      for (const stat in this.levelingMatrix) {
        this.levelStat(stat);
      }
    }
  }

  // tick should be overwritten in surface level classes
  tick() {
    const possibleActions = this.getPossibleActionsArray();
    const randNum = getRandomInt(possibleActions.length + (100 - (this.stats.level / 2)));
    console.log(randNum);
    if (possibleActions[randNum]) {
      return new SubmittedAction(possibleActions[randNum], this);
    }
    return null;
  }

  getPossibleActionsArray() {
    const actionArray = [];
    for (const action of this.actions) {
      for (let i = 0; i < action.weight; i++) {
        actionArray.push(action);
      }
    }
    return actionArray;
  }
}