// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function checkPalindroma(parola) {

    // L'INDICE PASSA ATTRAVERSO META' STRINGA
    for (let i = 0; i < parola.length / 2; i++) {
        // console.log(i)

        // SE LA LETTERA INDICIZZATA E' DIVERSA DALLA SUA OPPOSTA (O DA SE STESSA NEL CASO DI LENGTH DISPARI)...
        if (parola[i] !== parola[parola.length - 1 - i]) {
            return 'La parola inserita non è palindroma';
        }
    }
    return 'La parola inserita è palindroma';
}

// PROMPT DELL' UTENTE
const parola = prompt('Inserisci una parola, solo minuscole o maiuscole');

// INVOCO LA FUNZIONE
const risultato = checkPalindroma(parola);

const display = document.getElementById('risultato_check');
display.innerHTML = risultato
console.log(risultato);