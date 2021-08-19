 // Módulo 5: Javascript Intermediário || 04 - Desestruct e Match
 
 // Situação: 

    // Imagine um chatbot perguntando qual o seu CPF e você responde dessa forma;
 
 const cpf = 'Meu CPF é 123.456.789-00';

 // Ele esperava apenas os números e você digitou um conjunto de strings.

 const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

 // Extraindo o CPF usando match.

 console.log(cpf.match(regex));