// příjem divadla
const vstupne = 12;
const divaci = 174;
const predstaveni = 15;

let prijemDivadla = vstupne * divaci * predstaveni;
document.body.innerHTML += "<p>" + "Příjem divadla je " + prijemDivadla + "Kč" + "</p>";

const sleva = 0.65;
const studenti = 0.4;

let prijemDivadlaStudenti = Math.floor((prijemDivadla * 0.4) * 0.35);
let novyPrijemCelkem = prijemDivadla - prijemDivadlaStudenti;

document.body.innerHTML += "<p>" + "Příjem divadla se studentským vstupným je " + novyPrijemCelkem + "Kč" + "</p>";