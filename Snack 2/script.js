// Snack 2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// creo array di numeri

let numbers = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,33,124,432,567,876,957,117,737];


// seleziono elementi HTML 
const red = document.getElementById("red")
const green = document.getElementById("green")


for (let i = 0; i < numbers.length; i++) {
   
    // creo condizione per selezionare elementi in posizione dispari
    if (numbers[i] % 2 === 0) {
        const pairElements = document.createElement("div");
        pairElements.classList.add("pair")
        red.append(pairElements)
        pairElements.innerHTML += numbers[i]

    
        
    }else{
        const unpairElements = document.createElement("div");
        unpairElements.classList.add("unpair")
        green.append(unpairElements)
        unpairElements.innerHTML += numbers[i]
    }
};