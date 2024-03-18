//Seleziono gli elementi dal DOM
const grid = document.querySelector('.ms-grid');
const playButton = document.querySelector('.ms-play');
//Creo l'evento per iniziare il gioco
playButton.addEventListener('click', function () {
    grid.classList.remove('d-none');
    grid.style.display = ('flex');
    // Svuoto la griglia quando viene creato un nuovo gioco
    grid.innerHTML = '';
    //Inserisco le logiche per il livello di difficoltà
    const level = document.querySelector('#level').value;
    let numberOfSquares;
    let numberOfCellsPerRow;
    if (level === 'easy') {
        numberOfSquares = 100;
        numberOfCellsPerRow = 10;
    } else if (level === 'medium') {
        numberOfSquares = 81;
        numberOfCellsPerRow = 9;
    } else if (level === 'hard') {
        numberOfSquares = 49;
        numberOfCellsPerRow = 7
    }
    //Creo array per le bombe
    const bombsArray = [];
    //Genero 16 numeri random nell'array e controllo che non ci siano numeri uguali nell'array (con una funzione){
    const randomNumber = getArrayRandomUniqueNumber(bombsArray, 16);
    console.log(bombsArray);
    //Creo le celle
    let square;
    for (let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;
        square = generateSquare(i, numberOfCellsPerRow);
        grid.append(square);
    }
    //Passo in rassegna tutte le celle
    const allSquares = document.querySelectorAll('.ms-cell');
    for (let i = 0; i < allSquares.length; i++) {
        const thisSquare = allSquares[i];
        console.log(thisSquare.innerHTML);
        //Per ogni cella, creo un evento per interagirci
        thisSquare.addEventListener('click', function () {
           if (bombsArray.includes((parseInt(thisSquare.innerHTML)))) {
            this.classList.add('red');
           } else {
            this.classList.add('lightblue');
           }
        });
    }
});

//FUNCTIONS

//Funzione che genera celle (adattate in base al livello di difficoltà selezionato)
//number => il numero all'interno della cella
//cellsPerRow => il numero di celle per riga in base alla difficoltà selezionata
//Return => un elemento del DOM (le celle della griglia)
function generateSquare(number, cellsPerRow) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('ms-cell');
    newSquare.innerHTML = `${number}`;
    newSquare.style.width = `calc(100% / ${cellsPerRow})`;
    newSquare.style.height = `calc(100% / ${cellsPerRow})`;
    return newSquare;
}

//Funzione che genera numeri random compresi tra 1 e 100 in array pre-esistente
//array => l'array all'interno del quale pushare i numeri
//iterations => un numero intero che indica il numero di iterazioni del ciclo while
function getArrayRandomUniqueNumber(array, iterations) {
    while (array.length < iterations) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
}