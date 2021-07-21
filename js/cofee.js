function changeClr(){
	let clrR = document.getElementById("clrR");
	let clrG = document.getElementById("clrG");
	let clrB = document.getElementById("clrB");
	let clrY = document.getElementById("clrY");
	clrR.onclick()
		clrR.style.height = 36+'px';
		clrG.style.height = "16px";
		clrB.style.height = "16px";
		clrY.style.height = "16px";
	
}
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext('2d');

cnv.onmousemove = function(e) {
      var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
    };

document.getElementById("r1").oninput = function () {
    let rngX = document.getElementById("r1");
    cnv.width = rngX.value;
}
document.getElementById("r2").oninput = function () {
    let rngY = document.getElementById("r2");
    cnv.height = rngY.value;
}