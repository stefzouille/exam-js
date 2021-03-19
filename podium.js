// Ecrire une fonction podium qui prend comme paramètre un tableau de number 
// et affiche les 3 meilleures notes tel que ci dessous:

// 1st: 20
// 2nd: 18
// 3rd: 14

const podium = (tab) => {                       //parametre tab passé a la fonction podium
  let top3 = tab                                //j assigne tab a la variable top3
  .sort((a, b) => {                             // .sort trier un tableau 
    return b - a                                //renvoi b - a
  })
    .slice(0, 3)                                //coupe le 1er et 3em index
  console.log(`1st ${top3[0]}`)                 //affiche l index [x] de top3
  console.log(`2nd ${top3[1]}`)
  console.log(`3rd ${top3[2]}`)
}

let scores = [1, 10, 56, 9, 45, 0, 11, 4]
podium(scores)                                  //fonction podium  pasé a la variable scores