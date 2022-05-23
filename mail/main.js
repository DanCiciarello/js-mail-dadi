// Recupero gli elementi html
const emailInputElement = document.querySelector("#emailInput");
const submitBtnElement = document.querySelector("#submitBtn");

// Creo un array con tutte le mail valide
const validEmails = ["mariorossi@email.com", "danieleciciarello@gmail.com", "luigi@bianchi.it", "johndoe@email.it"];

// Creo una variabile con l'ultimo indice dell'array
let lastIndex = validEmails.length - 1;

// Creo un event listener per il tasto "Controlla email"
submitBtnElement.addEventListener ("click", function() {

    // Creo/Resetto la variabile per lo stato di controllo dell'email
    let emailCheckStatus = false;
    
    // Assegno una variabile all'input dell'utente
    let emailInput = emailInputElement.value;
    
    // Controllo tutte le mail valide con l'input dell'utente
    for (let i = 0; i < validEmails.length; i++) {
        
        // Assegno una variabile all'email da controllare
        let emailToCheck = validEmails[i];

        // Controllo se l'email è valida e stampo un messaggio
        if (emailToCheck == emailInput) {
            alert("La tua email è valida!");
            emailCheckStatus = true;
        } 
        /* Altrimenti controllo se è l'ultimo elemento dell'array e
        lo stato di controllo dell'email è ancora falso
        e stampo un messaggio */
        else if (emailCheckStatus == false && i == lastIndex) {
            alert("ATTENZIONE! La tua email non è valida, inserisci un'altra email!");
        }
    }

});