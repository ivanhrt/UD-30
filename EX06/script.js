var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numDni = 39933791;
var letraDada = 'H'
var letraCalc = '';

if ((numDni > 99999999) || (numDni < 0)){
    console.log("Numero no valido");
}else {
    var div = numDni % 23;
    letraCalc = letras[div];
}

if (letraCalc == letraDada){
    console.log("Correcto :), la letra es: " + letraDada);
}else {
    console.log("La letra obtenida es diferente :( ")
}