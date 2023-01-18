import { Action, SubmittedAction } from "./Action";
import { Being } from "./Being";
import { Cat } from "./Cat";
import { Player } from "./Player";

export class Game {
  player: Player;
  active: Being[];
  instance: ReturnType<typeof setTimeout> = setTimeout(() => {}, 100000);

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
    const submittedActions: SubmittedAction[] = [];
    this.active.forEach(character => {
      const characterAction = character.tick();
      if (characterAction != null) {
        submittedActions.push(characterAction);
      }
    });

    for (const action of submittedActions) {
      action.execute();
    }
  }

}
