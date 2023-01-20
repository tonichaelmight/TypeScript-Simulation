import { EventEmitter } from "stream";
import { getRandomInt } from "../utils";
import { SubmittedAction } from "./Action";
import { Being } from "./Being";
import { Cat } from "./Cat";
import { Player } from "./Player";

export class Game {
  player: Player;
  active: Being[];
  instance: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1000);

  constructor() {
    this.player = new Player();
    this.active = [this.player, new Cat()];
  }

  start() {
    this.instance = setInterval(() => {
      this.tick();
      if (this.player.stats.health <= 0) {
        clearInterval(this.instance);
        console.log('You lost lol');
      }
    }, 500); // this is the interval of tick() in milliseconds    
  }

  tick() {
    const submittedActions = this.getSubmittedActions();

    if (getRandomInt(15) === 1) {
      this.spawn();
    }

    for (const action of submittedActions) {
      action.execute();
    }

    this.purgeActive();

  }
  
  getSubmittedActions() {
    const submittedActions: SubmittedAction[] = [];
    this.active.forEach(character => {
      const characterAction = character.tick();
      if (characterAction != null) {
        submittedActions.push(characterAction);
      }
    });
    return submittedActions;
  }

  purgeActive() {
    this.active.forEach(character => {
      if (character.stats.health <= 0) {
        console.log(`${character.screenName} has died.`)
      } else if (character.isLeaving) {
        console.log(`${character.screenName} left`)
      }
    })

    this.active = this.active.filter(character => {
      return (character === this.player || (!character.isLeaving && character.stats.health > 0));
    })
  }

  spawn() {

  }

}
