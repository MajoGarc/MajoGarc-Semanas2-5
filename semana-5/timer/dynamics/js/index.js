
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
    var milSeg = segTotal * 1000;
    

    let counter;

    console.log(minSeg);
    console.log(segTotal);

    contador.innerHTML += min + ' : ' + seg; 

    //let i = segTotal
    
    iniciar.addEventListener("click", ()=>{
        counter = setInterval(()=>{
            contador.innerHTML = min + ' : ' + seg;
            seg--; 
        }, 1000);
        alarma.play();
        let terminar = setTimeout(()=>{
            clearInterval(counter);
            console.log("setto")
        }, milSeg );
        // 
        
    });
        
    fin.addEventListener("click", ()=> {
        clearInterval(counter);
        min = 00;
        seg = 00;
        contador.innerHTML = min + ' : ' + seg;
        alarma.load()
    });

}
    