"use strict"
let prompt = require('prompt-sync')({sigint: true});

let board = [
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"]
]

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

function checkWinner(board){
    for(let row=0; row<board.length; row++){
        let line = board[row].join('')
        if(line.includes('YYYY')){
            return 'Y'
        }
        if(line.includes('RRRR')){
            return 'R'
        }
    }
    return false
}

function putpiece(board, column, player){
    let color = `${player}`
    let lastLineFull
    if(isNaN(column) || column < 0 || column > 6){
        return false
    } else {
        for(let i= 0 ; i<board.length; i++){
            if(board[i][column] == '-'){
                lastLineFull = i
                i = 6
            }
        }
        if (lastLineFull == 0) {
            return false
        } else if (lastLineFull == undefined) {
            board[5].splice(column, 1, color)
            return true
        } else {
            board[lastLineFull - 1].splice(column, 1, color)
            return true
        }
    }
}

function gameloop(board){
    while(checkWinner(board) === false) {
        printBoard(board)
        checkWinner(board)
        let player = 'R'
        let input = parseInt(prompt(`Enter your move player ${player}: `))
        let validMove = putpiece(board, input, player)

        if(validMove === true){
            player = (player == 'R'? 'Y' : 'R')
        } while(!validMove) {
            let input = parseInt(prompt(`non c'est pas ça, enter your move player ${player}: `))
            validMove = putpiece(board, input, player)
            validMove && (player = (player == 'R'? 'Y' : 'R'))
        }

    }

}


gameloop(board);