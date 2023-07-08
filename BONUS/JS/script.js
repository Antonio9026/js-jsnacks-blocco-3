// Snack 3 (bonus)
// Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.


// chiedo al'utente di inserire un numero 
let inputUtenteN = parseInt(prompt("Inserisci un numero"));

// creo ciclo per generare array tanti quanti il numero inserito dall'utente 
for (let i = 0; i < inputUtenteN; i++) {
 let newElementArray = [];
//  creo ciclo per popolare gli array con 10 numeri randon per ogni array
  for (let i = 0; i < 10 ; i++) {  

    // creo costante per generare numeri random 
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        // popolo gli array 
        newElementArray.push(randomNumber);
        
      }
      console.log(newElementArray);
// log in console 

}


