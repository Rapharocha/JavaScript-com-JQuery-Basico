//$(seletor).ação();


//VERIFICA SE O DOCUMENTO ESTA PRONTO/CARREGADO
//Maneira de fazer
//$(document).ready(function(){
 
//Maneira de fazer simplificada
$(function(){   
   $("#azul").click(function(){   
    $("p").css("color","blue")
    .fadeOut()
    .delay(1000)
    .fadeIn(); 
   });

   $("#vermelho").click(function(){
    $("p").css("color","red");
    $("#mensagem").text("Cor alterada com Sucesso")
    .css("color","red")
    .css("border","1px solid black")
    .addClass("green");
   });
});