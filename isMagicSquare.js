const isMagicSquare = (square) => {                                //parametre square passé a ismagicSquare
  let d1Sum = 0 // sum of first diagonal, it will our sum reference--> 0 assigné a d1sum
  for (let i = 0; i < square.length; ++i) {  //pour que i =0 et + petit que la longeur du tab en parametre de la fct
    d1Sum += square[i][i]                     // d1sum += plus ou egal a l index 0 et 1 du parametre de la fct
  }

  let d2Sum = 0 // sum of second diagonal-------//0 assigné a d2sum
  for (let i = 0; i < square.length; ++i) {    //i declarer a la longueur du tab et incremente
    d2Sum += square[i][square.length - 1 - i]  //d2sum plus ou mon egal a l'index du tab et de la longueur -1 - l'index
  }

  // check if diagonals are equal------------------------------------------             
  if (d1Sum !== d2Sum) {                       //d1sum n est pas egal a d2sum renvoi faux
    return false
  }

  // check all row sum and compare each to d1Sum----------------------------
  for (let i = 0; i < square.length; ++i) {    //boucle i a la longueur du parametre de la fct et incremente
    let rowSum = 0                             //0 assigné a la var rowSum
    for (let j = 0; j < square.length; ++j) {  //boucle j a la longueur du parametre de la fct et incremente
      rowSum += square[i][j]                   //var rowSum += a paramtre de l'index de i et j de la fct 
    }
    if (rowSum !== d1Sum) {                    //si rowSum n est pas egal a d1sum renvoi faux
      return false     
    }
  }

  // check all column sum and compare each to d1Sum
  for (let i = 0; i < square.length; ++i) {       //boucle i a la longueur du parametre de la fct et incremente
    let colSum = 0                                //0 assigné a la var colSum
    for (let j = 0; j < square.length; ++j) {     //boucle j a la longueur du parametre de la fct et incremente
      colSum += square[j][i]                      //colSum plus egal a square indexé de j et i
    }
    if (colSum !== d1Sum) {                       //si colSum n est pas egal a d1sum renvoi faux
      return false
    }
  }

  // we didn't return false yet so it is a magic square
  return true
}

// magic square
const square1 = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

// not a magic square
const square2 = [
  [2, 7, 6, 1],
  [9, 5, 1, 6],
  [4, 3, 8, 3],
  [1, 1, 1, 1],
]

// magic square
const square3 = [
  [17, 24, 1, 8, 15],
  [23, 5, 7, 14, 16],
  [4, 6, 13, 20, 22],
  [10, 12, 19, 21, 3],
  [11, 18, 25, 2, 9],
]

// not magic square
const square4 = [
  [11, 24, 1, 8, 15],
  [23, 5, 7, 14, 1],
  [4, 6, 6, 20, 22],
  [10, 12, 19, 21, 7],
  [11, 18, 25, 2, 9],
]

console.log(isMagicSquare(square1)) // output: true
console.log(isMagicSquare(square2)) // output: false
console.log(isMagicSquare(square3)) // output: true
console.log(isMagicSquare(square4)) // output: false