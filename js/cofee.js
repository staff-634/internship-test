let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let img = new Image();
w = canvas.width,
h = canvas.height;

// малюємо та стираємо                 
var mouse = { x:0, y:0};
var draw = false;             
canvas.addEventListener("mousedown", function(e){
    if(event.which == 1 ) {                 
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = true;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
    }
    if(event.which == 3 ) {                 
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        draw = true;
        ctx.beginPath();
        ctx.strokeStyle = "#f5fffa";
        ctx.moveTo(mouse.x, mouse.y);
    document.getElementById("clrR").style.height = '16px';
    document.getElementById("clrG").style.height = '16px';
    document.getElementById("clrB").style.height = '16px';
    document.getElementById("clrY").style.height = '16px';
    }
});
canvas.addEventListener("mousemove", function(e){                 
    if(draw == true){                  
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }
});
canvas.addEventListener("mouseup", function(e){
    if(event.which == 1 ) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.closePath();
        draw = false;
    }
    if(event.which == 3 ) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.closePath();
        draw = false;
    }
});

//вибрати розмір пера
document.getElementById("pencil").onclick = function() {    
    ctx.lineWidth = 2;
    document.getElementById("pencil").style.background = "#ffa500";
    document.getElementById("crayon").style.background = "";
    document.getElementById("marker").style.background = "";
};
document.getElementById("crayon").onclick = function() {    
    ctx.lineWidth = 4;
    document.getElementById("pencil").style.background = "";
    document.getElementById("crayon").style.background = "#ffa500";
    document.getElementById("marker").style.background = "";
};
document.getElementById("marker").onclick = function() {    
    ctx.lineWidth = 7;
    document.getElementById("pencil").style.background = "";
    document.getElementById("crayon").style.background = "";
    document.getElementById("marker").style.background = "#ffa500";
};

//вибрати колір
document.getElementById("clrR").onclick = function() {    
    ctx.strokeStyle = "red";
    document.getElementById("clrR").style.height = '36px';
    document.getElementById("clrG").style.height = '16px';
    document.getElementById("clrB").style.height = '16px';
    document.getElementById("clrY").style.height = '16px';
};
document.getElementById("clrG").onclick = function() {    
    ctx.strokeStyle = "green";
    document.getElementById("clrR").style.height = '16px';
    document.getElementById("clrG").style.height = '36px';
    document.getElementById("clrB").style.height = '16px';
    document.getElementById("clrY").style.height = '16px';
};
document.getElementById("clrB").onclick = function() {    
    ctx.strokeStyle = "blue";
    document.getElementById("clrR").style.height = '16px';
    document.getElementById("clrG").style.height = '16px';
    document.getElementById("clrB").style.height = '36px';
    document.getElementById("clrY").style.height = '16px';
};
document.getElementById("clrY").onclick = function() {   
    ctx.strokeStyle = "yellow";
    document.getElementById("clrR").style.height = '16px';
    document.getElementById("clrG").style.height = '16px';
    document.getElementById("clrB").style.height = '16px';
    document.getElementById("clrY").style.height = '36px';
};

// очистити полотно
document.getElementById("cleaner").onclick = function() {
    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1;
    img.src = "";
    canvas.width = 400,
    canvas.height = 400;    
    document.getElementById("clrR").style.height = '16px';
    document.getElementById("clrG").style.height = '16px';
    document.getElementById("clrB").style.height = '16px';
    document.getElementById("clrY").style.height = '16px';
    document.getElementById("pencil").style.background = "";
    document.getElementById("crayon").style.background = "";
    document.getElementById("marker").style.background = "";
};

// завантажуємо шаблон для розмальовки
document.getElementById("star").onclick = function() {
    img.src = "icon/pic1.png";    
    canvas.width = 600,
    canvas.height = 470;    
    ctx.drawImage(img, 0, 0, 600, 470);
    
};
document.getElementById("clock").onclick = function() {
    img.src = "icon/pic2.png";
    canvas.width = 600,
    canvas.height = 470;    
    ctx.drawImage( img, 0, 0, 600, 470);
};
document.getElementById("elef").onclick = function() {
    img.src = "icon/pic3.png";
    canvas.width = 556,
    canvas.height = 500;    
    ctx.drawImage( img, 0, 0, 556, 500);
};

//всановлюємо розмір полотна
document.getElementById("r1").oninput = function () {
    let rngX = document.getElementById("r1");
    canvas.width = rngX.value;
}
document.getElementById("r2").oninput = function () {
    let rngY = document.getElementById("r2");
    canvas.height = rngY.value;
}

// показати інструкцію
function cartClick() {
    imw.style.display = "block" ;
}
function cartClose() {
    imw.style.display = "none" ;
}