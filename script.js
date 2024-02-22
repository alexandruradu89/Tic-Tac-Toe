 let playerTurn = 0;
 let tableNotCreated = true;
 const matrix = Array.from({length: 3}, () =>
                new Array(3).fill()); 

 function createTable() {
    if (tableNotCreated) {
        tableNotCreated = false;
        const displayTable = document.createElement("table");
        const tableBody = document.createElement("tbody");
    
        for (let i = 0; i < 3; ++i) {
            const row = document.createElement("tr");
            for (let j = 0; j < 3; ++j) {
                const cell = document.createElement("td");
                let cellNo = i * 10 + j;
                cell.id = cellNo;
                const cellText = document.createTextNode("");
                cell.appendChild(cellText);
                cell.setAttribute("style", "border: 1px solid black; width: 50px; height: 50px");
                row.appendChild(cell);
                cell.addEventListener("click", () =>setValue(cell));
            }
            tableBody.appendChild(row);
        }
    
        displayTable.appendChild(tableBody);
        document.body.appendChild(displayTable);
    } else {
        playerTurn = 0;
        for (let i  = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                matrix[i][j] = "";
                let cellId = i * 10 + j;
                let currentCell = document.getElementById(cellId.toString())
                currentCell.textContent = "";
            }
        }
    }
 }

 function setValue(cell) {
    line = parseInt(parseInt(cell.id) / 10);
    console.log("line = " + line);
    column = parseInt(cell.id) % 10;
    console.log("column = " + column);
    if (!cell.textContent) {
        let symbol = playerSymbol(playerTurn);
        cell.textContent = symbol;
        ++playerTurn;
        matrix[line][column] = cell.textContent;
        console.log(matrix);
        if (checkIfWon(symbol)) {
            alert("Player " + symbol + " won!");
        }
    }
 }

 function playerSymbol(playerTurn) {
    if (playerTurn % 2 === 0) {
        return "X";
    } 
        return "O";
 }

 function checkIfWon(symbol) {
    if (symbol === matrix[0][0] && symbol === matrix[1][1] && symbol === matrix[2][2]) {
        return 1;
    }
    if (symbol === matrix[0][2] && symbol === matrix[1][1] && symbol === matrix[2][0]) {
        return 1;
    }
    for (let i = 0; i < 3; ++i) {
        if (symbol === matrix[i][0] && symbol === matrix[i][1] && symbol === matrix[i][2]) {
            return 1;
        }
        if (symbol === matrix[0][i] && symbol === matrix[1][i] && symbol === matrix[2][i]) {
            return 1;
        }
    }
    if (playerTurn === 9) {
        alert("It's a tie!");
    }
 }
