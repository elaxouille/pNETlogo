var nbReseaux = 0;
var nbMachines = 0;
$("#logopNET").attr("width", "400px");
$("#logopNET").attr("height", "400px");



function dessineLogo() {
    var cto = document.getElementById("logopNET");
    var ctx = cto.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(200,20);
    ctx.bezierCurveTo(200,300,100,30,100,20);
    ctx.stroke();
}

dessineLogo();
