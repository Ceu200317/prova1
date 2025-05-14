function somar(){
    let numDigitado1 = Number (document.getElementById('numero1').value)
    let numDigitado2 = Number (document.getElementById('numero2').value)
    let soma =  numDigitado1+numDigitado2
    console.log(soma)
}

function subtrair(){
    let numDigitado1 = Number(document.getElementById('numero1').value)
    let numDigitado2 = Number(document.getElementById('numero2').value)
    let subtracao = numDigitado1-numDigitado2
    console.log(subtracao)
}

function multiplicar(){
    let num1 = Number(document.getElementById('numero1').value)
    let num2 = Number(document.getElementById('numero2').value)
    let multiplicacao = num1*num2
    console.log(multiplicacao)
}

function dividir(){
    let num1 = Number(document.getElementById('numero1').value)
    let num2 = Number(document.getElementById('numero2').value)
    let divisao = num1/num2
    console.log(divisao)
}

