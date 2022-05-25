const canvas = document.getElementById ("mi-canvas");
const ctx = canvas.getContext("2d");

const picos = document.getElementById("picos");
const color = document.getElementById("color");
const picudez = document.getElementById("picudez");
const rellenar = document.getElementById("rellenar");

ctx.beginPath(); 

const longitudLinea = 45;
const xInicial = 600 / 2;
const yInicial = 0;

let puntosTotal = (picos.value * 2)
let gradosPicos = (360 / puntosTotal);
let gradosF = gradosPicos + (gradosPicos / 3);
let gradosD = gradosPicos - (gradosPicos / 3);
let radianesD = (gradosD * Math.PI) / 180;
let radianesF = (gradosF * Math.PI) / 180;
let angulo= radianesF;
let xNueva = xInicial;
let yNueva = yInicial;

let puntosF = picos.value;
let puntosD = picos.value;

ctx.moveTo(xInicial, yInicial);


for(let i=1; i<picos.value; i++)
{
    const despX = longitudLinea * Math.cos(angulo);
    const despY = longitudLinea * Math.sin(angulo);
        xNueva += despX;
        yNueva += despY;
        angulo =+ radianesD;
        ctx.lineTo(xNueva, yNueva)
        xNueva += despX;
        yNueva += despY;
        angulo =+ radianesF;
        ctx.lineTo(xNueva, yNueva)
    console.log ("1");
}
ctx.lineTo (xInicial, yInicial);
ctx.stroke();

// rellenar.addEventListener("change", ()=> {
//     let counter = 1;
//     if(counter % 2 == 0){
//         ctx.stroke();
//     }else{
//         ctx.fill();
//     }
// });

ctx.closePath();