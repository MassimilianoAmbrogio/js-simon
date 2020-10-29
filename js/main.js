/**
 * Un alert espone 5 numeri casuali diversi.
   Dopo 30 secondi l'utente deve inserire, un prompt 
   alla volta, i numeri che ha visto precedentemente.
   Una volta inseriti i 5 numeri, 
   il software dice quanti 
   e quali numeri sono stati ricordati.
 */

$(document).ready(function () {

    var numCasuali = [];
   // Var numeri casuali
    for (i = 0; i < 5; i++) {
       var numCasuali = Math.floor(Math.random() * 5) + 1;
         alert(numCasuali);
    }
    
   // Time
    setTimeout(function () {
        modal.addClass(num);
    }, 30000);

   // Utente
    for (i = 0; i < 5; i++) {
       var num = parseInt(prompt('Inserisci i numeri numeri visti in precendza ').trim);
    }
    
    // Numeri corretti
    console.log('I numeri ricordati sono', num);
   
}); // <-- End doc ready

 