
const fin = document.getElementById("detener");
const alarma = new Audio("./statics/media/audio/alarma.wav");


function setCronometro(){
    var segundos = document.getElementById("segundos");
    var minutos = document.getElementById("minutos");

    var min = minutos.value;
    var seg= segundos.value;

    console.log(min);
    console.log(seg);

    if( min <= 0 || min == ''){
        min = 0;
    }else if( min >= 60 ){
        min = 59;
    }

    if( seg <= 0 || seg == ''){
        seg = 0;
    } else if( seg >= 60){
        seg = 59;
    }

    console.log(min);
    console.log(seg);
    
    var minSeg = min * 60;
    var segTotal = seg + minSeg;

    let counter;

    console.log(minSeg);
    console.log(segTotal);

    contador.innerHTML += min + ' : ' + seg; 

    iniciar.addEventListener("click", ()=>{
        for(let i = segTotal - 1; i < segTotal; i ++){
            counter = setInterval(()=>{
                contador.innerHTML = min + ' : ' + seg;
                seg--; 
            }, 1000);
        }
        // clearInterval();
        alarma.play();
    });
        
    fin.addEventListener("click", ()=> {
        clearInterval(counter);
        alarma.load()
    });

}
    