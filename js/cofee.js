let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
// малюємо на полотні
w = canvas.width,
h = canvas.height;                 
var mouse = { x:0, y:0};
var draw = false;             
canvas.addEventListener("mousedown", function(e){                 
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
});
canvas.addEventListener("mousemove", function(e){                 
    if(draw==true){                  
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }
});
canvas.addEventListener("mouseup", function(e){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.closePath();
    draw = false;
});
// очистити полотно
document.getElementById("cleaner").onclick = function() {
    ctx.clearRect(0, 0, w, h);
};



 










// розмір полотна
document.getElementById("r1").oninput = function () {
    let rngX = document.getElementById("r1");
    canvas.width = rngX.value;
}
document.getElementById("r2").oninput = function () {
    let rngY = document.getElementById("r2");
    canvas.height = rngY.value;
}