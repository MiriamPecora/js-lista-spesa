// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// Definisco un'array contenente la lista della spesa e un contatore con valore 0
const shoppingList = ['Pasta', 'Pane', 'Pollo', 'Olio di semi', 'Scatolette di tonno', 'Pomodorini', 'Lattuga', 'Salmone', 'Riso'];
let count = 0;

// Inizio il ciclo while(), dandogli come indicazione che dovrà verificarsi solo finché il contatore sarà minore della lunghezza dell'array
while(count < shoppingList.length){

    // Definisco le variabili che serviranno per stampare gli elementi dell'array sul DOM
    const printedList = document.getElementById('grocery_list');
    const liElement = document.createElement('li');

    // Verifico tramite un console.log() che il programma funzioni correttamente
    // console.log(shoppingList[count]);

    // Usando le variabili definite prima, stampo nel DOM un elemento dell'array per volta
    liElement.innerHTML = shoppingList[count];
    printedList.append(liElement);
    
    // Incremento il valore del contatore per dare al ciclo una condizione d'uscita
    count++;
}

