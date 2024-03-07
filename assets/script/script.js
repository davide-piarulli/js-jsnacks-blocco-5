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
const pesoTotale = zucchine.reduce((totale, zucchina) => {
  return totale + zucchina.peso;
}, 0);

console.log(`Il peso totale delle zucchine è ${pesoTotale} kg.`);