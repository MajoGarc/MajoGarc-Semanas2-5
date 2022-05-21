const agregar = document.getElementById ("agregar");
const tarea = document.getElementById ("tarea");
const lista = document.getElementById ("lista");
const pendientes = document.getElementById ("pendientes");
const nueva = document.getElementById("nueva");
const materia = document.getElementById("materia");

const estatus = document.getElementsByClassName("estatus");
const borrar = document.getElementsByClassName("borrar");

let materiaS = materia.value, comp=0, total=0, nuevaMat=0;


materia.addEventListener("change", (evento)=>
{
    materiaS = materia.value;
    if(materiaS=="Otra")
    {   
        añadir.style.display = "block";
        materia.innerHTML += '<option value="'+nueva.value+'">'+nueva.value+'</option>';
        nuevaMat=1;
    }
});


agregar.addEventListener("click", (evento) => {
    if(tarea.value == "")
    {
        alert("el nombre de la tarea es necesario para el registro:)");
    }
    else
    { 
        if(nuevaMat != 1)
        {
            lista.innerHTML += '<p class="elementos"><button class="estatus">completada</button>'+' '+'<button class="borrar">Borrar</button>'+' '+'<strong>'+ materiaS + '</strong> - '+ tarea.value +' '+'</p>';
            total++;
            pendientes.innerHTML = '<p>'+comp+' tareas completadas de '+total+'</p>'
        }
        else
        {
            materiaS=nueva.value;
            lista.innerHTML += '<p class="elementos"><button class="estatus">completada</button>'+' '+'<button class="borrar">Borrar</button>'+' '+'<strong>'+ materiaS + '</strong> - '+ tarea.value +' '+'</p>';
            total++;
            pendientes.innerHTML = '<p>'+comp+' tareas completadas de '+total+'</p>'
            nuevaMat=0;
        }
    }
});


lista.addEventListener("click", (evento) => {
    if(evento.target.className === 'estatus')
    {
        if(evento.target.innerHTML=='completada')
        {
            comp++;
            evento.target.innerHTML= 'sin terminar';
            pendientes.innerHTML = '<p>'+comp+' tareas completadas de '+total+'</p>';
        }
        else{
            comp--;
            evento.target.innerHTML = 'completada';
            pendientes.innerHTML = '<p>'+comp+' tareas completadas de '+total+'</p>';
        }
    }
    else if(evento.target.className === 'borrar'){
        evento.target.parentElement.outerHTML = '';
        total--;
    
        pendientes.innerHTML = '<p>'+comp+' tareas completadas de '+total+'</p>';
    }
});