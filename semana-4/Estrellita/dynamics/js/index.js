const canvas = document.getElementById ("mi-canvas");
const ctx = canvas.getContext("2d");

const picos = document.getElementById("picos");
const color = document.getElementById("color");
const picudez = document.getElementById("picudez");
const rellenar = document.getElementById("rellenar");

ctx.beginPath();

const longitudLinea = 45;
const xInicial = 600/2;
const yInicial = 0;

let puntosTotal = (picos.value * 2)
let gradosPicos = (360 / puntosTotal);
let radianes = (gradosPicos * Math.PI) / 180;
let xNueva = xInicial;
let yNueva = yInicial;

let puntosF = picos.value;
let puntosD = picos.value;

ctx.moveTo(xInicial, yInicial);

for(let i=0; i<puntosTotal; i++)
{
    const despX =longitudLinea * Math.cos(radianes);
    const despY =longitudLinea * Math.sin(radianes);
    xNueva += despX;
    yNueva += despY;
    ctx.lineTo(xNueva, yNueva)
    
    console.log ("1");
}

rellenar.addEventListener("change", ()=> {
    let counter = 1;
    if(counter% 2 == 0){
        ctx.stroke();
    }else{
        ctx.fill();
    }
});

ctx.stroke();


ctx.closePath();