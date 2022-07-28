// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// DICHIARO PROMPT E COSTANTI
const sceltaUser = prompt('Scegli "PARI" o "DISPARI",');
console.log('sceltaUser')
const numeroUser = parseInt(prompt('Scegli un numero da 1 a 5'));
const numeroIA = Math.floor(Math.random() * 5 ) + 1;
const somma = numeroUser + numeroIA
console.log( numeroUser, numeroIA, somma);

// SCRIVO LA FUNZIONE: SE IL RESTO DELLA SOMMA/2 = 0 IL NUMERO E' PARI
function checkPariDispari(somma) {
	if (somma%2 == 0)
		return true;
	else
		return false;
}
// RECUPERO L'ELEMENTO DELL' HTML
const esitoSfida = document.getElementById('esito')

console.log(checkPariDispari(somma))
if ((checkPariDispari(somma) == true && sceltaUser === 'PARI') || (checkPariDispari(somma) == false && sceltaUser === 'DISPARI') ){
    console.log('Hai vinto!')
    esitoSfida.innerHTML = 'Hai vinto!'
} else {
    console.log('Sei stato miserabilmente sconfitto.')
    esitoSfida.innerHTML = 'Sei stato miserabilmente sconfitto.'
}