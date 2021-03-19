const information =(str, str1, nb) => {
if ( str ) {
  return `prenom :${str}`
} else if ( str1) {
  return `nom: ${str1}`
} else  (nb) 
  return `age: ${nb}`
} 


console.log(information('sofiane'))  
console.log(information('akermoun'))   
console.log(information(39))                 //dommage presque.