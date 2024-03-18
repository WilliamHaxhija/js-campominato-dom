const grid = document.querySelector('.ms-grid');
const playButton = document.querySelector('.ms-play');
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

    for (let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;
        const square = generateSquare(i, numberOfCellsPerRow);
        grid.append(square);
    }
    const allSquares = document.querySelectorAll('.ms-cell');
    for (let i = 0; i < allSquares.length; i++) {
        const thisSquare = allSquares[i];
        thisSquare.addEventListener('click', function () {
            this.classList.add('lightblue');
            console.log(this.textContent);
        });
    }
});

// Functions
function generateSquare(number, cellsPerRow) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('ms-cell');
    newSquare.innerHTML = `<span>${number}</span>`;
    newSquare.style.width = `calc(100% / ${cellsPerRow})`;
    newSquare.style.height = `calc(100% / ${cellsPerRow})`;
    return newSquare;
}