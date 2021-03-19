// Ecrire une fonction average qui prend comme paramètre un tableau de number et 
// retourne la moyenne de tous les nombres de ce tableau.

const average = (tab) => {                            //assigne parametre tab a la fonction average
  let sum = 0                                         //assigne 0 a la variable sum
  for (elem of tab) {                                 //pour l elem du tableau
    sum += elem                                       //var sum + = a elem
  }
  return sum / tab.length                             //renvoi la variable sum de la longeur du tab
}

console.log(average([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(average([10, 10, 10]))