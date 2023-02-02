function printBoard(board){
    var tableau = [...board]
    let firstLine = []
    for(let i=0; i<7; i++){
        firstLine.push(i)
    }
    console.log(firstLine.join(' '))
    for(let i=0; i<tableau.length; i++){
        console.log(tableau[i].join(' '))
    }
}

function putPiece(board, column, token) {
    let color = `${token}`
    let colonne = parseInt(column)
    let lastLineFull
    if(colonne > 6 && colonne < 0) {
        return false
    }
    else {
        for(let i = 0; i<6; i++) {
            if(board[i][column] !== "-") {
                lastLineFull = i
                i = 6 //Si la condition est remplie, i passe à 6 pour arrêter la boucle for
            }
        }
        if (lastLineFull === 0) {
            return false
        } else if(lastLineFull === undefined) {
            board[5].splice(column, 1, color)
            return true
        } else {
            board[lastLineFull-1].splice(column, 1, color)
            return true
        }
    }
}

function checkBoard(board) {
    var freeSlots = 42
    //parcourir le tableau
    for(let row = 0; row < board.length; row++) {   //ligne par ligne
        //rassembler les lignes
        let line = board[row].join('')
        if(line.includes('YYYY')) return "Y"
        if(line.includes('RRRR')) return "R"
        for(let col = 0; col < 7; col++){           //case par case
            //compter les cases vides
            if(board[row][col] !== "-") freeSlots -= 1
            if(freeSlots === 0) return "draw"
            //rassembler les colonnes
            const getColumn = (arr, n) => arr.map(lin => lin[n])
            let columnArray = getColumn(board, col)
            let column = columnArray.join('')
            if(column.includes('YYYY')) return "Y"
            if(column.includes('RRRR')) return "R"
            //rassembler les diagonales
            const diagArray = []
            for(let n=0; n<6; n++){
                if(row-n>-1 && col+n<7) diagArray.push(board[row-n][col+n])
            }
            let diags = diagArray.join('')
            if(diags.includes('YYYY')) return "Y"
            if(diags.includes('RRRR')) return "R"
        }
    }
    return "pending"
}

module.exports = { printBoard, putPiece, checkBoard }