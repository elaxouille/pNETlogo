var nbReseaux = 600;
var nbMachines = 0;

var w = 400;
var h = 400;
var attrw = w+"px";
var attrh = h+"px"
$("#logopNET").attr("width", attrw);
$("#logopNET").attr("height", attrh);


function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function dessineLogo() {
    var cto = document.getElementById("logopNET");
    var ctx = cto.getContext("2d");
    
    /*### Mise en place des cercles ###*/
    ctx.beginPath();
    ctx.lineWidth=1;
    
for (var i = 0; i < nbReseaux; i++) {
    ctx.moveTo(200,20);
    ctx.bezierCurveTo(
        getRandomFloat(200,380),getRandomFloat(20,100),
        getRandomFloat(200,380),getRandomFloat(20,200),
        380,200);
    ctx.bezierCurveTo(
        getRandomFloat(200,380),getRandomFloat(200,380),
        getRandomFloat(200,380),getRandomFloat(200,380),
        200,380);
    ctx.bezierCurveTo(
        getRandomFloat(20,200),getRandomFloat(200,380),
        getRandomFloat(20,200),getRandomFloat(200,380),
        20,200);
    ctx.bezierCurveTo(
        getRandomFloat(20,200),getRandomFloat(20,200),
        getRandomFloat(20,200),getRandomFloat(20,200),
        200,20);
    }
    ctx.stroke();
}

dessineLogo();
