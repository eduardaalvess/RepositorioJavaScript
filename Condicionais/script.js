var nome = 'Eduarda';

if (nome === 'Eduarda') {
    console.log('Legal! Seu nome é ' + nome);
} else {
    console.log('Que pena! Seu nome não é ' + nome);
}

//

switch (nome) {

    case 'Eduarda':
        console.log('Legal você é Eduarda');
        break;
    case 'Alves':
        console.log('Você também serve! Haha');
        break;
    default:
        console.log('Você não é quem estou procurando');
        break;

}