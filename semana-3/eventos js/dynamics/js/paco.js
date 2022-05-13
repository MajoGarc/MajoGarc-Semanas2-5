//function numAleatorio(min, max){
  //  return Math.floor (Math.random()* max);
//}

//function moverRandom(){
  //  const x = numAleatorio(0, 250);
    //const y = numAleatorio(0,250);
//console.log(x, y);
  //  botonSi.style.left = x + "px";
    //botonSi.style.top = y + "px";
//}
document.addEventListener("DOMContentLoaded", () => {
    //const botonSi  = document.getElementById("si");
    //const botonNo  = document.getElementById("no");


    //botonNo.addEventListener("click", ()=> {
    //  alert("Que bueno que no juegas LoL y elegiste el camino del bien 😇")
        //botonSi.removeEventListener ("mouseover",nombre);
    //});

    //botonSi.addEventListener("mouseover", moverRandom)

    //botonSi.addEventListener("click", (evento)=> {
    //  console.log(evento);
    //});

    const inputTexto = document.getElementById("texto");
    //let ultimaTecla='0';


    inputTexto.addEventListener("keydown", (evento)=> {
        //console.log(evento.keycode);
        if(isNaN(parseInt(evento.key)) && evento.key.lenght === 1){
            //console.log("presionaste un número");
            evento.preventDefault();
            return;
        }
        //ultimaTecla = evento.key;
    });
});    



