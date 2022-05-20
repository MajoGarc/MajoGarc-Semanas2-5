const agregar = document.getElementById ("agregar");
const tarea = document.getElementById ("tarea");
const lista = document.getElementById ("lista");
const pendientes = document.getElementById ("pendientes");
const nueva = document.getElementById("nueva");
const materia = document.getElementById("materia");

const estatus = document.getElementsByClassName("estatus");
const borrar = document.getElementsByClassName("borrar");
var crearinput = document.createElement("input"); 

let materiaS = materia.value, materiaNueva=nueva.value, comp=0, total=0;


materia.addEventListener("change", (evento)=>
{
    materiaS = materia.value;
    if(materiaS=="Otra"){   
        añadir.style.display = "block";
        materiaNueva = nueva.value;
        materia.innerHTML += '<option value="'+materiaNueva+'">'+materiaNueva+'</option>';

    }
});


agregar.addEventListener("click", (evento) => {
    lista.innerHTML += '<p class="elementos"><button class="estatus">completada</button>'+' '+'<button class="borrar">Borrar</button>'+' '+'<strong>'+ materia.value + '</strong> - '+ tarea.value +' '+'</p>';
    total++;
    if(total === 1){
        pendientes.innerHTML += '<p>'+comp+' tareas completadas de '+total+'</p>'
    }
});


lista.addEventListener("click", (evento) => {
    if(evento.target.className === 'estatus'){
        if(evento.target.innerHTML=='completada')
            {
                comp++;
                evento.target.innerHTML= 'sin terminar';
            }
            else{
                comp--;
                evento.target.innerHTML = 'completada';
            }

    }
    else if(evento.target.className === 'borrar'){
        evento.target.parentElement.outerHTML = '';
        total--;
        comp--; 
    }
});