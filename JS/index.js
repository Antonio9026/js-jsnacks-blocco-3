// Snack 1

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.



// creo array vuoto

let arrayNum = [];

// creo variabile somma 
let sum = 0


// creo costante per bottone genera 

const genera = document.querySelector(".genera")

// creo evento al click del bottone genera 

genera.addEventListener("click", function () {

     // chiedo i numeri all'utente tramite prompt
const  inputUtente = parseInt(prompt("inserisci 1 numeri "));

// creo condizione se somma è inferiore a 50 popolo array 

  if (sum < 50) {

     // do un nuovo valore alla variablie di somma 

     sum += inputUtente;
     // log della somma 
     console.log(sum);
     // poopolo l'array
     arrayNum.push(inputUtente)
     // log dell' array popolato da prompt utente 
     console.log(arrayNum);
  }else {
     // stampo alert su pagina per comunicare all'utente di aver raggiunto la somma di 50
     alert("hai raggiunto la somma");
  }
});

// for (let i = 0;  sum < 50; i++) {
//      const  inputUtente = parseInt(prompt("inserisci 1 numeri "));
    
//     if (sum < 50) {
//      sum += inputUtente;
//      console.log(sum);
//      arrayNum.push(inputUtente);
    
//   }

// };
// alert("hai raggiunto la somma");


