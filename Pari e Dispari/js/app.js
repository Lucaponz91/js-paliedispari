// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const sceltaUser = prompt('Scegli "PARI" o "DISPARI",');
const numeroUser = parseInt(prompt('Scegli un numero da 1 a 5'));
const numeroIA = Math.floor(Math.random() * 5 ) + 1;
const somma = numeroUser + numeroIA
console.log( numeroUser, numeroIA, somma);

function checkPariDispari(somma) {
	if (somma%2 == 0)
		return true;
	else
		return false;
}
console.log(checkPariDispari(somma))