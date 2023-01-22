import { getRandomInt } from "../utils";
import { SubmittedAction, TActionsQueue, TSubmittedActionsArray } from "./Action";
import { Being } from "./Being";
import { Cat } from "./Cat";
import { Player } from "./Player";
import { Witch } from "./Witch";

export class Game {
  player: Player;
  active: Being[];
  instance: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1000);
  spawnable = [Cat, Witch];
  actionQueue: TActionsQueue = new TActionsQueue();

  constructor() {
    this.player = new Player();
    this.active = [this.player];
  }

  start() {
    this.instance = setInterval(() => {
      this.tick();
      if (this.player.stats.health <= 0) {
        clearInterval(this.instance);
        console.log('You lost lol');
      }
    }, 100); // this is the interval of tick() in milliseconds    
  }

  tick() {
    const submittedActions = this.getSubmittedActions();

    if (submittedActions.length > 0) {
      this.actionQueue.enqueue(submittedActions);
    }
    console.log(this.actionQueue);

    if (getRandomInt(50) === 1) {
      this.spawn();
    }

    if (this.actionQueue.length) {
      const nextAction = this.actionQueue.dequeue();
      nextAction?.execute();
    }

    this.purgeActive();

  }
  
  getSubmittedActions() {
    const submittedActions: TSubmittedActionsArray = [];
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
        console.log(`${character.screenName} has died`)
      } else if (character.isLeaving) {
        console.log(`${character.screenName} left`)
      }
    })

    this.active = this.active.filter(character => {
      return (character === this.player || (!character.isLeaving && character.stats.health > 0));
    })
  }

  spawn() {
    const spawnIndex = getRandomInt(this.spawnable.length);
    const noobie = new this.spawnable[spawnIndex]();
    console.log(`${noobie.screenName} enters`)
    this.active.push(noobie);
  }

}
