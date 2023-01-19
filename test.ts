import { appendFileSync, writeFileSync } from 'fs';
import { Cat } from './classes/Cat';
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

const cats = [
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat(),
    new Cat()
]

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

for (let i = 0; i < cats.length; i++) {

    const filePath = `test/cat${i}.csv`;
    writeFileSync(filePath, '');
    
    appendFileSync(filePath, 'level,health,mana,physicalAttack,physicalDefense,magicAttack,magicDefense,speed,luck,health_matrix,mana_matrix,physicalAttack_matrix,physicalDefense_matrix,magicAttack_matrix,magicDefense_matrix,speed_matrix,luck_matrix\n');

    appendFileSync(filePath, `${cats[i].stats.level},${cats[i].stats.health},${cats[i].stats.mana},${cats[i].stats.physicalAttack},${cats[i].stats.physicalDefense},${cats[i].stats.magicAttack},${cats[i].stats.magicDefense},${cats[i].stats.speed},${cats[i].stats.luck},${cats[i].levelingMatrix.health},${cats[i].levelingMatrix.mana},${cats[i].levelingMatrix.physicalAttack},${cats[i].levelingMatrix.physicalDefense},${cats[i].levelingMatrix.magicAttack},${cats[i].levelingMatrix.magicDefense},${cats[i].levelingMatrix.speed},${cats[i].levelingMatrix.luck}\n`);

    do {
        cats[i].levelUp();

        appendFileSync(filePath, `${cats[i].stats.level},${cats[i].stats.health},${cats[i].stats.mana},${cats[i].stats.physicalAttack},${cats[i].stats.physicalDefense},${cats[i].stats.magicAttack},${cats[i].stats.magicDefense},${cats[i].stats.speed},${cats[i].stats.luck},${cats[i].levelingMatrix.health},${cats[i].levelingMatrix.mana},${cats[i].levelingMatrix.physicalAttack},${cats[i].levelingMatrix.physicalDefense},${cats[i].levelingMatrix.magicAttack},${cats[i].levelingMatrix.magicDefense},${cats[i].levelingMatrix.speed},${cats[i].levelingMatrix.luck}\n`);

    } while (cats[i].stats.level < 100); 
}