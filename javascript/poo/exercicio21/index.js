const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const beatrice = new Thief('Beatrice', 140, 22, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

cain.switchStance()
cain.attack(arthur)
arthur.heal(arthur)

console.table({ arthur, beatrice, cain })
