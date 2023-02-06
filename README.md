# ConnectFour

### debuter avec les imports et exports des fichiers

```
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



    printBoard(board)
```