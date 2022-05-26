const modal = document.getElementById('exampleModal')
const timer = document.getElementById('timer')

modal.addEventListener('shown.bs.modal', () => {
    timer.focus()
});
const segundos = document.getElementById("segundos");
const fin = document.getElementById("detener");
const alarma = new Audio("./statics/media/audio/alarma.wav");

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
    clearInterval(counter);
    alarma.play();
});
       
fin.addEventListener("click", ()=> {
    clearInterval(counter);
});