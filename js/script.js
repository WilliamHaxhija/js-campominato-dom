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
    //Creo le celle
    for (let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;
        const square = generateSquare(i, numberOfCellsPerRow);
        grid.append(square);
    }
    //Passo in rassegna tutte le celle
    const allSquares = document.querySelectorAll('.ms-cell');
    for (let i = 0; i < allSquares.length; i++) {
        const thisSquare = allSquares[i];
        //Per ogni cella, creo un evento per interagirci
        thisSquare.addEventListener('click', function () {
            this.classList.add('lightblue');
            console.log(this.textContent);
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
    newSquare.innerHTML = `<span>${number}</span>`;
    newSquare.style.width = `calc(100% / ${cellsPerRow})`;
    newSquare.style.height = `calc(100% / ${cellsPerRow})`;
    return newSquare;
}