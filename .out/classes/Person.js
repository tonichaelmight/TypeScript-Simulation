"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const Being_1 = require("./Being");
const baseStats = {
    level: 0,
    health: 30,
    mana: 25,
    physicalAttack: 18,
    physicalDefense: 18,
    magicAttack: 12,
    magicDefense: 12,
    speed: 10,
    luck: 10
};
const baseLevelingMatrix = {
    health: 16,
    mana: 8,
    physicalAttack: 12,
    physicalDefense: 12,
    magicAttack: 10,
    magicDefense: 10,
    speed: 7,
    luck: 5
};
class Person extends Being_1.Being {
    constructor(statsObject = baseStats, levelingMatrix = baseLevelingMatrix, level = 0) {
        super(statsObject, levelingMatrix, level);
    }
}
exports.Person = Person;
