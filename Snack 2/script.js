// Snack 2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pair = 0
const red = document.getElementById("red")
const green = document.getElementById("green")
let unpair = 0
for (let i = 0; i < numbers.length; i++) {
   
    // creo condizione per selezionare elementi in posizione dispari
    if (i % 2 !== 0) {
        const pairElements = document.createElement("div");
        pairElements.classList.add("pair")
       
         pair = numbers[i];

        // log della posizione elementi 
        console.log([i]);
        red.append(pairElements)
        pairElements.innerHTML += pair

    
        
    }else{
        const unpairElements = document.createElement("div");
        unpairElements.classList.add("unpair")
       unpair = numbers[i];
        // log della posizione elementi 
        console.log([i]);
        console.log([i]);
        green.append(unpairElements)
        unpairElements.innerHTML += unpair
    }
};