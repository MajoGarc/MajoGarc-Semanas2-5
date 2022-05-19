const agregar = document.getElementById ("agregar");
const tarea = document.getElementById ("tarea");
const lista = document.getElementById ("lista");
const pendientes = document.getElementById ("pendientes");

const arriba = document.getElementsByClassName("arriba");
const abajo = document.getElementsByClassName("abajo");
const estatus = document.getElementsByClassName("estatus");
const borrar = document.getElementsByClassName("borrar");

function agregarMateria(evento){
    let materia = document.getElementById("materia");
    if(materia.value ==='Otra')
    {
      document.getElementById("añadir").innerHTML += '<input type="text" id="nueva" placeholder="Materia Nueva">'
    }
}


agregar.addEventListener("click", (evento) => {
    lista.innerHTML += '<p class="elementos"><button class="arriba">Arriba</button>' + ' '+'<button class="abajo">Abajo</button>'+' '+'<button class="estatus">Marcar como completado</button>'+' '+'<button class="borrar">Borrar</button>'+' '+'<strong>'+ materia.value + '</strong> - '+ tarea.value +' '+'</p>';
    pendientes.innerHTML += '<p>  tareas completadas de </p>';
});


lista.addEventListener("click", (evento) => {
    if(evento.target.className === 'borrar'){
        evento.target.parentElement.outerHTML = ''; 
    }
});