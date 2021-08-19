// Módulo 5: Javascript Intermediário || 02 - Operador Ternário e Arrow Functions

let isValid = true;

function verify(isValid) {
    if(isValid) {
        return true;
    } else {
        return false;
    }
}

const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

console.log(numeroResultado);