// Recupero gli elementi html
let startArrayElement = document.querySelector("#startArray");
let userNumberArrayElement = document.querySelector("#userNumberArray");
let finalArrayElement = document.querySelector("#finalArray");
let lastFiveArrayElement = document.querySelector("#lastFiveArray");
let inputArrayQuantityElement = document.querySelector("#inputArrayQuantity");
let lastArrayCountElement = document.querySelector("#lastArrayCount");
let populateArrayBtnElement = document.querySelector("#populateArrayBtn");

// Creo un array vuoto
let numbersArray = [];
startArrayElement.innerHTML = `L'array iniziale contiene ${numbersArray.length} elementi.`;

// Creo un event listener perr il tasto Popola Array
populateArrayBtnElement.addEventListener ("click", function() {

    // Resetto il numero di elementi dell'array
    numbersArray = [];

    // Recupero il numero di elementi per l'array
    let arrayQuantity = parseInt(inputArrayQuantityElement.value);

    // Recupero il numero di ultimi elementi da contare
    let arrayCount = parseInt(lastArrayCountElement.value);

    // Controllo se il numero inserito è minore di 5
    if (arrayQuantity < 5) {
        alert("Inserisci un numero maggiore di 5!");
    } 

    /* Controlllo se il numero di elementi dell'array 
    è superiore al conteggio degli ultimi 5 */
    else if (arrayCount > arrayQuantity) {
        alert("Il numero degli elementi dell'array deve essere superiore o uguale al numero degli ultimi elementi contati!");
    }

    // Altrimenti continuo con l'operazione
    else {

        // Stampo con quanti numeri verrà popolato
        userNumberArrayElement.innerHTML = `L'array verrà popolato con ${arrayQuantity} elementi.`;

        // Popolo l'array con i numeri determinati dalla variabile
        for (i = 0; i < arrayQuantity; i++) {

            // Genero un numero casuale da 1 a 100
            let randomNumber = Math.floor(Math.random() * 100) + 1;

            // Aggiungo il numero generato all'array
            numbersArray.push(randomNumber);
        }

    // Stampo l'array popolato
    finalArrayElement.innerHTML = `L'array finale contiene ${numbersArray.length} elementi: ${numbersArray}`;

    // Creo una variabile per il quintultimo elemento dell'array
    let startElement = numbersArray.length - arrayCount;
    lastFiveArrayElement.innerHTML = `Gli ultimi ${arrayCount} elementi dell'array sono: `;

    // Ciclo gli ultimi 5 elementi dell'array
    for (i = startElement; i < numbersArray.length; i++) {
        lastFiveArrayElement.innerHTML += `${numbersArray[i]} `;
    }
    }

});