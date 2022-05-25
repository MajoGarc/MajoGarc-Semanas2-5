// let scroll_y = setTimeout(() => {
//     console.log(`Ancho de scroll: ${window.scroll}`, `Alto de scroll:$`);
// },3000);



const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");

let detcetarTamano

inicio.addEventListener("click", ()=>{
    detcetarTamano = setInterval(()=>{
        console.log(window.innerWidth, window.innerHeight);
    }, 1000);
});

fin.addEventListener("click", ()=> {
    clearInterval(detcetarTamano);
});