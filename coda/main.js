// Recupero gli elementi html
let startArrayElement = document.querySelector("#startArray");
let randomNumberArrayElement = document.querySelector("#randomNumberArray");
let finalArrayElement = document.querySelector("#finalArray");
let lastFiveArrayElement = document.querySelector("#lastFiveArray");

// Creo un array vuoto
let numbersArray = [];
startArrayElement.innerHTML = `L'array iniziale contiene ${numbersArray.length} elementi.`;

/* Creo una variabile per il numero di elementi dell'array
e gli assegno un numero casuale da 6 a 20 */
let randomArrayQuantity = Math.floor(Math.random() * 15) + 6;
randomNumberArrayElement.innerHTML = `L'array verrà popolato con ${randomArrayQuantity} elementi.`;

// Popolo l'array con i numeri determinati dalla variabile
for (i = 0; i < randomArrayQuantity; i++) {

    // Genero un numero casuale da 1 a 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Aggiungo il numero generato all'array
    numbersArray.push(randomNumber);
}

// Controllo l'array popolato
finalArrayElement.innerHTML = `L'array finale contiene ${numbersArray.length} elementi: ${numbersArray}`;

// Creo una variabile per il quintultimo elemento dell'array
let startElement = numbersArray.length - 5;
lastFiveArrayElement.innerHTML = `Gli ultimi 5 elementi dell'array sono: `;

// Ciclo gli ultimi 5 elementi dell'array
for (i = startElement; i < numbersArray.length; i++) {
    lastFiveArrayElement.innerHTML += `${numbersArray[i]} `;
}