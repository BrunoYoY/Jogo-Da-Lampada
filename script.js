console.log("Loading serve data ...");

window.alert("Bem Vindo ao Lamp Game. \nPara Jogar pressione 'OK");

var acesa = false
var quebrado = false

function acenderlampada(){
    document.getElementById("image").src = "img/lampada-acesa.jpg";
}


function quebrarlampada(){
    if (quebrado == false){
    quebrado = true;
     document.getElementById("image").src = "img/lampada-quebrada.jpg";
    }
}

function apagarlampada (){
document.getElementById("image").src = "img/lampada-apagada.jpg";

}
function interruptor(){
    if (quebrado == true){
    return;
}
    if (acesa == false){
           acenderlampada();
 }
 else{ apagarlampada();

 }
 acesa = !acesa;
}