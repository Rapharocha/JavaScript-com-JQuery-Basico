//$(seletor).ação();


//VERIFICA SE O DOCUMENTO ESTA PRONTO/CARREGADO
//Maneira de fazer
//$(document).ready(function(){
 
//Maneira de fazer simplificada
$(function(){   
  $("#im1").click(function(){
    $("#img2").hide();
    $("#img3").hide(); 
    $("#img1").show();
  });

  $("#im2").click(function(){
    $("#img1").hide();
    $("#img3").hide(); 
    $("#img2").show();
  });

  $("#im3").click(function(){
    $("#img1").hide();
    $("#img2").hide(); 
    $("#img3").show();
  });
});