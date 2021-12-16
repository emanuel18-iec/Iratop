alert("Verificação de acesso!")

var acesso = false; verif=true;
var resposta; 

while(acesso == false){
    resposta = prompt("Para acessar o site insira o DIA DE FUNDAÇÃO da cidade\nUtilize o seguinte formato:\nDD/MM/AAAA\n\nEx.:\ndata ==> 1° de julho de 1985\ndigitar ==> 01/07/1985");
    if(resposta != "25/02/1903"){
        verif = false;
    }
    resposta = prompt("Para acessar o site insira o DATA DE ANIVERSÁRIO da cidade\nUtilize o seguinte formato:\nDD/MM\n\nEx.:\ndata ==> 1° de julho\ndigitar ==> 01/07");
    if(resposta != "15/07"){
        verif = false;
    }
    resposta = prompt("Em 2022, a cidade realizará seu aniversário n°: ")
    if(resposta != "115"){
        verif = false;
    }
    if(verif==true){
        alert("Acesso autorizado");
        acesso = true;
    } else {
        alert("Informações Incorretas!\nTente novamente!")
    }
}

