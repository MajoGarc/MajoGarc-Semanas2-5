/*****MODAL*********/
// const myModal = document.getElementById('exampleModal')
// const myInput = document.getElementById('myInput')

// exampleModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })

/* GENERAL */
const segundos = document.getElementById("segundos");
const minutos = document.getElementById("minutos");
//const horas = document.getElementById("inicio");
const tiempo = document.getElementById("contador");
const inicio = document.getElementById("iniciar");
const fin = document.getElementById("detener");
let min = minutos.value;
let seg= segundos.value;

if( min >= 0 || min == ''){
    min = 0;
}else if( min >= 60 ){
    min = 59;
}

if( seg >= 0 || seg == ''){
    seg = 0;
} else if( seg >= 60){
    seg = 59;
}

let minSeg = min * 60;
let segTotal = minSeg + seg;

contador.innerHTML += min + ' : ' + seg; 

iniciar.addEventListener("click", ()=>{
    for(let i = 0; i < minSeg; i ++){
        let counter = setInterval(()=>{
            contador.innerHTML += min + ' : ' + seg;
            seg--; 
        }, 1000);
    }
    learInterval(counter);
});
       
fin.addEventListener("click", ()=> {
    clearInterval(counter);
});