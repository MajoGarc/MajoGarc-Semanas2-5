const canvas = document.getElementById ("mi-canvas");
const ctx = canvas.getContext("2d");

const picos = document.getElementById("picos");
let color = document.getElementById("color");
const picudez = document.getElementById("picudez");
const rellenar = document.getElementById("rellenar");

ctx.beginPath();

const longitudLinea1 = 45;
const longitudLinea2 = 35;
const xInicial = 600/2;
const yInicial = 0;

// let puntosTotal = (picos.value * 2)
let gradosPuntosF = (360 / picos.value);
let radianesF = (gradosPuntosF * Math.PI) / 360;
let xNueva = xInicial;
let yNueva = yInicial;

let puntosF = picos.value;
let puntosD = picos.value;

ctx.moveTo(xInicial, yInicial);

for(let i=0; i<picos.value; i++)
{
    const despX =(longitudLinea1 * Math.cos(radianesF));
    const despY =longitudLinea1 * Math.sin(radianesF);
    xNueva += despX;
    yNueva += despY;
    ctx.strokeStyle = color.value;
    ctx.lineTo(xNueva, yNueva)
    const despXx =longitudLinea2 * Math.cos(radianesF);
    const despYy =longitudLinea2 * Math.sin(radianesF);
    xNueva += despXx;
    yNueva += despYy;
    ctx.strokeStyle = color.value;
    ctx.lineTo(xNueva, yNueva)
    console.log ("1");
}
rellenar.addEventListener("change", ()=> {
    let counter=1;
    if(counter% 2 == 0){
        ctx.stroke();
    }else{
        ctx.fill();
    }
})
    if(rellenar.value == true){
        ctx.fillStyle();
    }else{
        ctx.stroke();
    }



ctx.closePath();