var numeroSorteado = 4;
var achou = false;
var valor = 0;

while(!achou) {
    valor += 1;
    if(numeroSorteado === valor){
        achou = true;
    } else {
        console.log('Valor não correspondente ao número: ' + valor);
    }
}