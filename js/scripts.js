$(document).ready(function(){


    //Monitorar o click do botão #send do formulário
    $("#send").click(function(e){
        e.preventDefault()


        //Criar as variaveis que guardarão os dados digitados

        var nome = $("#NOME").val()
        var idade = $("#IDADE").val()


        var frase = " Olá "+nome+" sua idade é: "+idade


        $("#mensagem").append(frase)

        $("#NOME").val("")
        $("#IDADE").val("")
    })

    //Monitor quando o cursor estiver dentro do campo #NOME

    $("#NOME").focus(function(){
        $("#mensagem").empty()
    })
})