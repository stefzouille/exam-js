// Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, 
// forEach qui effectueront le même traitement. Ce traitement consistera à afficher 
// tous les éléments d'un tableau de string suivis de leur taille. Par exemple pour 
// le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] nous obtiendrons
//  l'affichage suivant 3 fois (1 fois par loop):

// Alice, length: 5
// Bob, length: 3
// Charlie, length: 7
// Dan, length: 3
// Eve, length: 3

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; ++i) {                 //incremente le tab de 0 a la longueur de celui ci
  console.log(`${tab[i]}, length : ${tab[i].length}`)  //affiche le tableau en index et la longueur de chacun
}

for (const elem of tab) {                               //elements du tab assigné a une variable
  console.log(`${elem}, length: ${elem.length}`)        // affiche les elements et la longueur de chacun
}

tab.forEach((elem) => {                                 //methode forEach passé en fonction
console.log(`${elem}, length: ${elem.length}`)          // affiche les elements et la longueur de chacun
})

let index = 0                                            //assigne 0 a la variable index
while (index < tab.length) {                             //tant que index plus petit que la longueur du tab
  console.log(`${tab[index]}, length: ${tab[index].length}`) //affiche le tableau et l index de chaque elem du tab
  ++index                                                //incremente de +1
}

index = 0
do {
  console.log(`${tab[index]}, length ${tab[index].length}`)
  ++index
} while (index < tab.length)


