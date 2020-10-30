/**
 * Un alert espone 5 numeri casuali diversi.
   Dopo 30 secondi l'utente deve inserire, un prompt 
   alla volta, i numeri che ha visto precedentemente.
   Una volta inseriti i 5 numeri, 
   il software dice quanti 
   e quali numeri sono stati ricordati.
 */

 // Setup
var waitTime = 30000;
var randomNumbers = [];

// Generazione 5 num random univoci
while (randomNumbers.length < 5) {
  var numRand = getRandomNumber(1, 100);

  if (! randomNumbers.includes(numRand)) {
      randomNumbers.push(numRand);
  }
}

alert(randomNumbers);


/**
 * Game logic
 */
setTimeout(function () {
  var userNumbers = [];

  while (userNumbers.length < 5) {
    var newUserNumber = parseInt(prompt('Inserisci il ' + (userNumbers.length + 1) + '° numero'));

    while (isNaN(newUserNumber)) {
       newUserNumber = parseInt(prompt('Numero valido, inserisci il ' + (userNumbers.length + 1) + '° numero'));
    }

   // Univocità
    if (! userNumbers.includes(newUserNumber)) {
       userNumbers.push(newUserNumber);
    } else {
      alert('Numero già inserito');
    }
  }

  // Collect right numbers
  var rightGuess = [];

  for (var i = 0; i < userNumber.length; i++) {
    if (randomNumbers.includes(userNumbers[i])) {
       rightGuess.push(userNumbers[i]);
     }
  }

  // Game results
  alert('RISULTATI\n' +
    'Lista proposta:\n' + randomNumbers +
    '\nLista:\n' + userNumbers +
    '\nIndovinati ' + rightGuess.lenght + 'numeri\n' + rightGuess);

}, waitTime);

/**********************
 * Funzioni
 *********************/

 // Gen random numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }

// $(document).ready(function () {

//     var numCasuali = [];
//    // Var numeri casuali
//     for (i = 0; i < 5; i++) {
//        var numCasuali = Math.floor(Math.random() * 5) + 1;
//          alert(numCasuali);
//     }
    
//    // Time
//     setTimeout(function () {
//         modal.addClass(num);
//     }, 30000);

//    // Utente
//     for (i = 0; i < 5; i++) {
//        var num = parseInt(prompt('Inserisci i numeri numeri visti in precendza ').trim);
//     }
    
//     // Numeri corretti
//     console.log('I numeri ricordati sono', num);
   
// }); // <-- End doc ready

 