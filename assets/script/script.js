// SNACK 1
const zucchine = [
  {
    varieta: 'africana',
    peso: 400,
    lunghezza: 30
  },
  {
    varieta: 'spagnola',
    peso: 300,
    lunghezza: 20
  },
  {
    varieta: 'tedesca',
    peso: 200,
    lunghezza: 10
  },
  {
    varieta: 'belga',
    peso: 100,
    lunghezza: 15
  },
  {
    varieta: 'rumena',
    peso: 450,
    lunghezza: 25
  },
  {
    varieta: 'americana',
    peso: 800,
    lunghezza: 45
  },
  {
    varieta: 'canadese',
    peso: 345,
    lunghezza: 50
  },
  {
    varieta: 'brasiliana',
    peso: 610,
    lunghezza: 15
  },
  {
    varieta: 'cinese',
    peso: 120,
    lunghezza: 5
  },
  {
    varieta: 'russa',
    peso: 750,
    lunghezza: 38
  }
];

// SNACK 1
let pesoTotale = 0;
zucchine.forEach(zucchina => {
  pesoTotale += zucchina.peso;
});
console.log(`Il peso totale delle zucchine è ${pesoTotale} kg.`);

// SNACK 2
// inizializzo i 2 nuovi array
let zucchineGrandi = [];
let zucchinePiccole = [];

// pusho ogni zucchina nel suo array corretto
zucchine.filter (zucchina => {
  if (zucchina.lunghezza < 15) {
    return zucchinePiccole.push(zucchina);
  }
  return zucchineGrandi.push(zucchina);
})

console.log(zucchineGrandi);
console.log(zucchinePiccole);

// peso totale delle piccole
let pesoTotPiccole = 0;
zucchinePiccole.forEach(zucchina => {
  pesoTotPiccole += zucchina.peso;
})
console.log(`Il peso totale delle zucchine piccole è ${pesoTotPiccole} kg.`);

// peso totale delle grandi
let pesoTotGrandi = 0;
zucchineGrandi.forEach(zucchina => {
  pesoTotGrandi += zucchina.peso;
})
console.log(`Il peso totale delle zucchine grandi è ${pesoTotGrandi} kg.`);

// SNACK 3
const word = 'zucchina';

function reverse (word) {
  return word.split('').reverse().join('');
  
}
console.log(reverse(word));
