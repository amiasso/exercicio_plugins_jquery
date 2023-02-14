$(document).ready(function(){
    $("#cpf").mask("999.999.999-99")
    $('#telefone').mask('(00) 0000-0000')
    $('#celular').mask('(00) 00000-0000')
    $('#email').mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });
    $('#cep').mask('99.999-99')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            cpf: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            celular: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
            mensagem: {
                required: true,
            },

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            cpf: 'Por favor, insira o seu cpf',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o numero do telefone fixo',
            celular: 'Por favor, insira o numero do seu celular',
            endereco: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o cep da sua residência',
            mensagem: 'Por favor, insira o sua mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos =validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})