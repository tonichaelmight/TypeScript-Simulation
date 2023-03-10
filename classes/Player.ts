import { TStats, TLevelingMatrix } from "../interfaces/Stats";
import { Human } from "./Human";
import { Action, ActionWithRecipient, SoloAction, TActionsArray } from "./Action";
import { getRandomInt } from "../utils";
import { Cat } from "./Cat";

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
  new SoloAction('whistle', 2, (caller) => console.log(`${caller.screenName} whistles`)),
  new SoloAction('cough', 1, (caller) => console.log(`${caller.screenName} coughs`)),
  new SoloAction('sing', 5, (caller) => console.log(`${caller.screenName} sings`)),
  new SoloAction('think', 1, (caller) => console.log(`${caller.screenName} thinks`)),
  new ActionWithRecipient('pet', 10, (caller, recipient) => console.log(`${caller.screenName} pets ${recipient.screenName}`), {recipientType: typeof Cat})
]

export class Player extends Human {
  constructor(statsObject: TStats | number = Object.assign({}, baseStats), levelingMatrix: TLevelingMatrix = Object.assign({}, baseLevelingMatrix), level: number = 0) {
    if (typeof statsObject === 'number') {
      level = statsObject;
      statsObject = baseStats;
    }
    super(statsObject, levelingMatrix, level);
    this.actions = []; // total overwrite to avoid player trying to leave
    this.attachActions(playerActions);
    this.screenName = 'Player';
    // console.log(this);
  }
}
