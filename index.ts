import { Being } from "./classes/Being";
import { Player } from "./classes/Player";

const active: Being[] = [];

const player = new Player();
// console.log(player.actions);
active.push(player);

const tick = () => {
  console.log(player);
  active.forEach(character => {
    character.tick();
  })
  player.levelUp();
}

const game = setInterval(() => {
  tick();
  if (player.stats.health <= 0) {
    clearInterval(game);
    console.log('You lost lol');
  }
}, 500); // this is the interval of tick() in milliseconds
