function suma (){

    var numer1 = document.getElementById('var1').value;
    var numer2 = document.getElementById('var2').value; 

    var suma = parseInt(numer1) + parseInt(numer2);
    document.getElementById('resultado').innerText = suma;
}

function multiplicacion (){

    var numer1 = document.getElementById('var1').value;
    var numer2 = document.getElementById('var2').value; 

    var multiplicar = numer1 * numer2;
    document.getElementById('resultado').innerText = multiplicar;
}






