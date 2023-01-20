"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const Being_1 = require("./Being");
const baseStats = {
    level: 0,
    health: 20,
    mana: 10,
    physicalAttack: 22,
    physicalDefense: 22,
    magicAttack: 8,
    magicDefense: 10,
    speed: 15,
    luck: 20
};
const baseLevelingMatrix = {
    health: 12,
    mana: 5,
    physicalAttack: 15,
    physicalDefense: 15,
    magicAttack: 5,
    magicDefense: 12,
    speed: 10,
    luck: 10
};
// About Animals
// Generally less agressive than monsters, but more aggressive that Persons
// Generally excel in physical attack and defense and weak in magic
class Animal extends Being_1.Being {
    constructor(statsObject = Object.assign({}, baseStats), levelingMatrix = Object.assign({}, baseLevelingMatrix), level = 0) {
        super(statsObject, levelingMatrix, level);
    }
    getRandomName(names) {
        return super.getRandomName(names);
    }
}
exports.Animal = Animal;
