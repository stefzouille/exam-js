const guess =(userGuess, secret) => {
if ( userGuess < secret) {
  return 'Too small'
} else if (userGuess > secret) {
  return 'too big'
} else (userGuess=== secret) 
  return 'you win'
}


console.log(guess(1, 2))   //inferieur
console.log(guess(3, 2))   //superieur
console.log(guess(2, 2))   //egal a