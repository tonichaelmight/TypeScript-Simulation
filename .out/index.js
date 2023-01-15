"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./classes/Player");
const active = [];
const player = new Player_1.Player();
// console.log(player.actions);
active.push(player);
const tick = () => {
    // console.log(player.stats);
    active.forEach(character => {
        character.tick();
    });
    player.levelUp();
};
const game = setInterval(() => {
    tick();
    if (player.stats.health <= 0) {
        clearInterval(game);
        console.log('You lost lol');
    }
}, 500);
