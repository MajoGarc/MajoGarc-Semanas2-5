const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();

// ctx.moveTo(0,0);
// ctx.lineTo(450/2, 450/2 );
// ctx.stroke();

// ctx.moveTo(450/2, 450/2 );
// ctx.lineTo(450/2, 450/2 );
// ctx.stroke();








const longitudLinea = 100;
const anguloGrados = 30;
const anguloRadianes = (anguloGrados * Math.PI) / 180;

ctx.moveTo(450 / 2, 450 / 2)
const despX = longitudLinea * Math.cos(anguloRadianes);
const despY = longitudLinea * Math.sin(anguloRadianes);

ctx.lineTo(450 / 2  + despX, 450 / 2 + despY);

ctx.closePath();