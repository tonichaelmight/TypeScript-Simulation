import { appendFileSync, writeFileSync } from 'fs';
import { Player } from './classes/Player';

const players = [
    new Player(),
    new Player(),
    new Player(),
    new Player(),
    new Player(),
    new Player(),
    new Player(),
    new Player(),
    new Player(),
    new Player()
];

for (let i = 0; i < players.length; i++) {

    const filePath = `test/player${i}.csv`;
    writeFileSync(filePath, '');
    
    appendFileSync(filePath, 'level,health,mana,physicalAttack,physicalDefense,magicAttack,magicDefense,speed,luck,health_matrix,mana_matrix,physicalAttack_matrix,physicalDefense_matrix,magicAttack_matrix,magicDefense_matrix,speed_matrix,luck_matrix\n');

    appendFileSync(filePath, `${players[i].stats.level},${players[i].stats.health},${players[i].stats.mana},${players[i].stats.physicalAttack},${players[i].stats.physicalDefense},${players[i].stats.magicAttack},${players[i].stats.magicDefense},${players[i].stats.speed},${players[i].stats.luck},${players[i].levelingMatrix.health},${players[i].levelingMatrix.mana},${players[i].levelingMatrix.physicalAttack},${players[i].levelingMatrix.physicalDefense},${players[i].levelingMatrix.magicAttack},${players[i].levelingMatrix.magicDefense},${players[i].levelingMatrix.speed},${players[i].levelingMatrix.luck}\n`);

    do {
        players[i].levelUp();

        appendFileSync(filePath, `${players[i].stats.level},${players[i].stats.health},${players[i].stats.mana},${players[i].stats.physicalAttack},${players[i].stats.physicalDefense},${players[i].stats.magicAttack},${players[i].stats.magicDefense},${players[i].stats.speed},${players[i].stats.luck},${players[i].levelingMatrix.health},${players[i].levelingMatrix.mana},${players[i].levelingMatrix.physicalAttack},${players[i].levelingMatrix.physicalDefense},${players[i].levelingMatrix.magicAttack},${players[i].levelingMatrix.magicDefense},${players[i].levelingMatrix.speed},${players[i].levelingMatrix.luck}\n`);

    } while (players[i].stats.level < 100); 
}