// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var x = array.length;
  var x = x-1;
  return array[x];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
    return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (var i =0; i < array.length; i++ ){
  array[i]=  array[i]+1;
  }
  return array

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for (var i=0; i <palabras.length; i++){
    if (i===0){
        var union = palabras[i];
    }
    if (i!==0){
        var union =union+" "+ palabras[i];
    }

  }
  return union;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
for (var i=0; i <array.length; i++){
if (array[i]===elemento){
return true;
}

}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var y =0;
  for (var i=0; i<numeros.length; i++){
  var x = Number.isInteger(numeros[i]);

    if (x!==true){
    return false
    }
    y = y + numeros[i];

  }
  return y;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var y =0;
  for (var i=0; i<resultadosTest.length; i++){
  var x = Number.isInteger(resultadosTest[i]);

    if (x!==true){
    return false
    }
    y = y + resultadosTest[i];

  }
  y=y/resultadosTest.length;
  return y;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  for (var i=0; i<numeros.length; i++){
  var x = Number.isInteger(numeros[i]);

    if (x!==true){
    numeros[i]=Math.round(numeros[i]);
    }
  }

  var elementos = 0;
  for (var i=0; i <numeros.length; i++){
  if (numeros[i]>elementos){
  elementos=numeros[i];
  }

  }
  return elementos;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var mul=0;
  for (var i=0; i <arguments.length; i++){

  if  (i===0){ mul = arguments[i]}
  if (i!==0){
  var mul=mul*arguments[i];
  }
  }
return mul;


}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var elementos = 0;
  for (var i=0; i <arreglo.length; i++){
  if (arreglo[i]>18){
  elementos=elementos+1;
  }

  }
  return elementos;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia===1 || numeroDeDia===7){
    return "Es fin de semana"
  }else {
    return "Es dia Laboral"
  }


}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var x = n.toString();
  x = x.charAt(0);
if (x==='9'){
  return true;
}else {
  return false;
}
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  for (var i=0; i < arreglo.length; i++){
  if (arreglo[0]!==arreglo[i]){
    return false;
  }

  }
  return true;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
const nuevo = [];
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const mesespedidos = ["Enero","Marzo","Noviembre"];

for (var x=0; x < mesespedidos.length; x++){
for (var i=0; i < array.length; i++){
if (array[i]===mesespedidos[x]){
if (mesespedidos[x]==="Enero"){
  var ene = true;
}
if (mesespedidos[x]==="Marzo"){
  var mar = true;
}
if (mesespedidos[x]==="Noviembre"){
  var nov = true;
}
}
}
}

if ( ene === true && mar === true && nov === true )
{
//  for (var s=0; s < meses.length; s++){ // retorno en forma ordenada
//  for (var r=0; r < array.length; r++){
//  if (array[r]===meses[s]){
//  nuevo.push(meses[s]);
//  }
//  }
//  }
for (var r=0; r < array.length; r++){
  if (array[r] === "Enero" || array[r] === "Marzo" || array[r] === "Noviembre" ){
  nuevo.push(array[r]);
  }

}

return nuevo;
}else {
return "No se encontraron los meses pedidos";
}

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

const numm = [];

  for (var i=0; i < array.length; i++){

    if (array[i] > 100){
    numm.push(array[i]);
    }



  }
  return numm;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
