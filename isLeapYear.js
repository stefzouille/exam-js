// Ecrivez une fonction isLeapYear qui prendra comme paramètre un nombre, 
// qui correspondra à une année, et qui retournera true si l'année est bissextile 
// ou bien false si elle ne l'est pas. D'après wikipedia:

// Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile (comportant 366 jours) 
// que dans l’un des deux cas suivants :

// - si l'année est divisible par 4 et non divisible par 100 ;
// - si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).
// Pour calculer le reste d'une division il faut utiliser l'opérateur %

const isLeapYear = (year) => {                      //parametre year passé a islapYear
  if (year % 4 === 0 && year % 4 !== 100) {         // si l année reste de 4 =0 et reste 4 !== 100
    return true                                     //affiche true
  } else if ( year % 400 === 0) {                   //sinon si l année reste 400 = 0
    return true                                     // renvoi true
  } else {                                          //sinon renvoi faux
    return false
  }
}

console.log(isLeapYear(400)) // output: true
console.log(isLeapYear(2000)) // output: true
console.log(isLeapYear(2002)) // output: false
console.log(isLeapYear(2004)) // output: true
console.log(isLeapYear(2020)) // output: true
console.log(isLeapYear(2021)) // output: false