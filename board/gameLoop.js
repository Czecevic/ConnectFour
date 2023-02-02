"use strict"

const { printBoard, putPiece, checkBoard } = require('./board')
var prompt = require('prompt-sync')({sigint: true});

var board = [
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"]
]

var player = "R"

function gameLoop() {

    while(checkBoard(board) === "pending"){
        printBoard(board)
        checkBoard(board)

        var input = parseInt(prompt(`Player ${player}, enter your next move:`))
        let validMove = putPiece(board, input, player)

        if(validMove) {
            player = (player === "R" ? "Y" : "R")
        } while(!validMove) {
            input = prompt(`Focus ${player}. Choose a valid move.`)
            validMove = putPiece(board, input, player)
            validMove && (player = (player === "R" ? "Y" : "R"))
        }
    }

    if(checkBoard(board) === "draw") {printBoard(board); console.log("Nobody won this game.")}
    if(checkBoard(board) === "Y") {printBoard(board); console.log("Y won this game.")}
    if(checkBoard(board) === "R") {printBoard(board); console.log("R won this game.")}
}

gameLoop()
