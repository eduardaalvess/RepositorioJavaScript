class Matematica {

    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);

// As classes em JavaScript não são obrigatórias como em linguagens como C# e Java

// O raciocinio é o mesmo de Java: criamos um objeto em memória.