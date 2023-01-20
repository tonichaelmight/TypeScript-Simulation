"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Person_1 = require("./Person");
const Action_1 = require("./Action");
const baseStats = {
    level: 0,
    health: 35,
    mana: 25,
    physicalAttack: 18,
    physicalDefense: 18,
    magicAttack: 12,
    magicDefense: 12,
    speed: 10,
    luck: 10
};
const baseLevelingMatrix = {
    health: 18,
    mana: 14,
    physicalAttack: 15,
    physicalDefense: 15,
    magicAttack: 12,
    magicDefense: 12,
    speed: 8,
    luck: 7
};
const playerActions = [
    new Action_1.Action('whistle', 2, (caller) => console.log(`${caller.screenName} whistles`)),
    new Action_1.Action('cough', 1, (caller) => console.log(`${caller.screenName} coughs`)),
    new Action_1.Action('sing', 5, (caller) => console.log(`${caller.screenName} sings`)),
    new Action_1.Action('leave', 1, (caller) => console.log(`${caller.screenName} thinks`)) // overwrite so player can't leave
];
class Player extends Person_1.Person {
    constructor(statsObject = Object.assign({}, baseStats), levelingMatrix = Object.assign({}, baseLevelingMatrix), level = 0) {
        if (typeof statsObject === 'number') {
            level = statsObject;
            statsObject = baseStats;
        }
        super(statsObject, levelingMatrix, level);
        this.attachActions(playerActions);
        this.screenName = 'Player';
    }
}
exports.Player = Player;
