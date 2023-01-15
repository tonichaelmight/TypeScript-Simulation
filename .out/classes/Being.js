"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Being = void 0;
const utils_1 = require("../utils");
const Action_1 = require("./Action");
const baseStats = {
    level: 0,
    health: 20,
    mana: 20,
    physicalAttack: 15,
    physicalDefense: 15,
    magicAttack: 10,
    magicDefense: 10,
    speed: 8,
    luck: 5
};
const baseLevelingMatrix = {
    health: 12,
    mana: 8,
    physicalAttack: 10,
    physicalDefense: 10,
    magicAttack: 7,
    magicDefense: 7,
    speed: 5,
    luck: 3
};
const beingActions = [
    new Action_1.Action('leave', 1, () => (0, utils_1.getRandomInt)(4) === 0 ? console.log('Player leaves') : console.log('Player thinks'))
];
// About Beings
// They have stats, including a level
// They are mutually interactive
// They can engage in combat with each other
// Can level up, using a leveling matrix
// Have a max level of 100 (no overriding)
// Subclasses of Being can overwrite the default stats and leveling matrix (or anything really)
// First level extensions should always include an overwrite, beyond that is more optional
// Have a tick() method
class Being {
    constructor(statsObject = baseStats, levelingMatrix = baseLevelingMatrix, level = 0) {
        this.actions = [];
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
    attachActions(actions) {
        // console.log(this.actions);
        // console.log(actions);
        this.actions = this.actions.concat(actions);
    }
    levelStat(stat) {
        this.stats[stat] += Math.round((0, utils_1.getRandomInt)((this.levelingMatrix[stat]) / 5) * Math.log2(this.stats.level * 2));
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
        const possibleActions = this.getPossibleActionArray();
        const randNum = (0, utils_1.getRandomInt)(possibleActions.length + (100 - (this.stats.level / 2)));
        console.log(randNum);
        if (possibleActions[randNum]) {
            possibleActions[randNum].execute();
        }
    }
    getPossibleActionArray() {
        const actionArray = [];
        for (const action of this.actions) {
            for (let i = 0; i < action.weight; i++) {
                actionArray.push(action);
            }
        }
        return actionArray;
    }
}
exports.Being = Being;
