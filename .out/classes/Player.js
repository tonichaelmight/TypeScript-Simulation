"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Human_1 = require("./Human");
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
    new Action_1.Action('think', 1, (caller) => console.log(`${caller.screenName} thinks`))
];
class Player extends Human_1.Human {
    constructor(statsObject = Object.assign({}, baseStats), levelingMatrix = Object.assign({}, baseLevelingMatrix), level = 0) {
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
exports.Player = Player;
