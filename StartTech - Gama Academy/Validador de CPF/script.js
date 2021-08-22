function validaCPF(cpf) {

    // console.log(cpf.length);

    if(cpf.length != 11) {
        return false;
    } else {
        var num = cpf.substring(0, 9);
        var dig = cpf.substring(9);

        console.log('Números do CPF: ' + num);
        console.log('Digitos do CPF: ' + dig);


        var soma = 0;

        for(var i = 10; i > 1; i--) {
            soma += num.charAt(10 - i) * i;
        }

        // console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if(resultado != dig.charAt(0)) {
            return false;
        }

        // console.log(dig.toString().charAt(0) + ' é a primeira posição da variável soma.');

        soma = 0;

        num = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += num.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != dig.charAt(1)) {
            return false;
        }

        return true;
    }
}


function validacao() {
    console.log('Iniciando validação do CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}