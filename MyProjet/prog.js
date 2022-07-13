var input = document.getElementsByClassName('formulario__input');
var numero1 = document.getElementsByitName('input__num1');
var numero2 = document.getElementsByitName('input__num2');


for (var i=0; i < input.length; i++) {
    input[i].addEventListener('keyup',function(){
        if (this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
} 

