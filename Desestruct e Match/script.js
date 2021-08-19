// Módulo 5: Javascript Intermediário || 04 - Desestruct e Match

const pessoa = {
    nome: 'Eduarda',
    sobrenome: 'Alves',
    cidade: 'Recife',
    profissao: 'Diplomata'
};

console.log(pessoa);

// Quebrando em várias variáveis menores.

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let cidade = pessoa.cidade;
// let profissao = pessoa.profissao;

// Desestruct

let { nome, sobrenome, cidade, profissao } = pessoa;

console.log(nome, sobrenome, cidade, profissao);

// Você pode tirar uma variavel daqui, 
// mas não pode usar uma que não esteja contida, 
// o valor 'undefined' vai ser exibido.

