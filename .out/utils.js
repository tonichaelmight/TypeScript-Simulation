"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = void 0;
function getRandomInt(start, range) {
    if (range === undefined) {
        range = start;
        start = 0;
    }
    return Math.floor(Math.random() * range + start);
}
exports.getRandomInt = getRandomInt;
