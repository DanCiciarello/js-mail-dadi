// Recupero gli elementi html
let userNumbersElement = document.querySelector("#userNumbers");
let computerNumbersElement = document.querySelector("#computerNumbers");
let challengeResultElement = document.querySelector("#challengeResult");
let rollDiceElement = document.querySelector("#rollDice");

// Creo un event listener per il tasto "Lancia dadi"
rollDiceElement.addEventListener ("click", function() {

    // Creo un array vuoto per il computer
    let computerNumbers = [];
    let computerNumbersSum = 0;

    // Creo un array vuoto per l'utente
    let userNumbers = [];
    let userNumbersSum = 0;

    // Popolo l'array del computer con 5 numeri casuali da 1 a 6
    for (i = 0; i < 5; i++) {

        // Genero un numero casuale tra 1 e 6
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        
        // Aggiungo il numero all'array del computer
        computerNumbers.push(randomNumber);

        // Incremento la somma dell'array
        computerNumbersSum += randomNumber;
    };

    // Popolo l'array dell'utente con 5 numeri casuali da 1 a 6
    for (i = 0; i < 5; i++) {

        // Genero un numero casuale tra 1 e 6
        let randomNumber = Math.floor(Math.random() * 6) + 1;

        // Aggiungo il numero all'array dell'utente
        userNumbers.push(randomNumber);

        // Incremento la somma dell'array
        userNumbersSum += randomNumber;
    };

    // Stampo i risultati dei dadi
    userNumbersElement.innerHTML = `L'utente ha lanciato i dadi e ha ottenuto: ${userNumbers}.<br>La somma dei suoi dadi è ${userNumbersSum}.`;
    computerNumbersElement.innerHTML = `Il computer ha lanciato i dadi e ha ottenuto: ${computerNumbers}.<br>La somma dei suoi dadi è ${computerNumbersSum}.`;

    // Stampo il risultato della gara
    if (computerNumbersSum > userNumbersSum) {
        challengeResultElement.innerHTML = `Il computer ha vinto!`;
    } else {
        challengeResultElement.innerHTML = `L'utente ha vinto!`;
    }


}
);