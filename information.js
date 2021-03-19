// Lisez cet exercice entièrement avant de commencer.
// Ecrire une fonction information qui prend 3 paramètres:

// un prénom qui sera une string
// un nom qui sera une string
// un âge qui sera un number
// Cette fonction devra afficher le message suivant en fonction des paramètres:

// information('Sofiane', 'Akermoun', 39)

// affichera:

// prenom: Sofiane
// nom: Akermoun
// age: 39
// vous êtes majeur depuis 21 ans
// information('Alice', 'Liddell', 7)
// affichera:

// prenom: Alice
// nom: Liddell
// age: 7
// vous serez majeur dans 11 ans
// Pour notre exercice l'âge de la majorité est 18 ans et 
// ne vous souciez pas de la gestion du singulier/pluriel dans votre affichage.

const information = (prenom, nom, age) => {         //assigne 3 parametres a la fonction information
  console.log(`Prenom: ${prenom}`)                  //affiche parametre passé a prenom
  console.log(`Nom: ${nom}`)
  console.log(`age: ${age}`)
  if (age >= 18) {                                  //si age plus grand ou egal a 18   
    console.log('vous êtes majeur depuis 27 ans')   //affiche  le resultat
  } else {                                          //sinon
    console.log('vous serez majeur dans 11 ans')    //affiche ce resultat
  } 
}




information('Sofiane', 'Akermoun', 45)
information('Alice', 'Liddell', 7)