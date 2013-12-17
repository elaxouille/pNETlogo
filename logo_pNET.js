var nbReseaux = 0;
var nbMachines = 0;

var w = 400;
var h = 400;
var attrw = w+"px";
var attrh = h+"px"
$("#logopNET").attr("width", attrw);
$("#logopNET").attr("height", attrh);


function dessineLogo() {
    var cto = document.getElementById("logopNET");
    var ctx = cto.getContext("2d");
    
    /*### Cercle avec 4 courbes de bézier ###*/
    ctx.beginPath();
    ctx.moveTo(200,20);
    ctx.bezierCurveTo(380,20,380,20,380,200);
    ctx.bezierCurveTo(380,380,380,380,200,380);
    ctx.bezierCurveTo(20,380,20,380,20,200);
    ctx.bezierCurveTo(20,20,20,20,200,20);
    
    ctx.moveTo(200,20);
    ctx.bezierCurveTo(200,20,380,200,380,200);
    ctx.bezierCurveTo(380,200,200,380,200,380);
    ctx.bezierCurveTo(25,340,30,360,20,200);
    ctx.bezierCurveTo(25,30,26,40,200,20);
    ctx.stroke();
       
}

dessineLogo();
