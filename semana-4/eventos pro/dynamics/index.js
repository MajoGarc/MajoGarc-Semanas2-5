const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');

padre.addEventListener("click", ()=>{
    console.log("Le hiciste click al padre");
}, true);

hijo.addEventListener("click", ()=>{
    console.log("Le hiciste click al hijo");
});

// const div01 =document.getElementById('div01');
// const div02 =document.getElementById('div02');
// const div03 =document.getElementById('div03');
// const div04 =document.getElementById('div04');
// const div05 =document.getElementById('div05');


// const contenedor = document.getElementById("contenedor");

// contenedor.addEventListener("click", (evento)=> {
//     evento.target.style.color = "red";
// });


// const tarjeta = document.getElementById("tarjeta");
// const sub = document.getElementById("sub");

// tarjeta.addEventListener("click", ()=> {
//     window.location ="https://youtube.com";
// });

// sub.addEventListener("click", ()=> {
//     alert("operación exitosa");
//     evento.stopPropagation();
// });

const agregar = document.getElementById ("agregar");
const input = document.getElementById ("input");
const lista = document.getElementById ("lista");
const botones = document.getElementsByClassName("boton");

agregar.addEventListener("click", (evento) => {
   lista.inner.HTML += '<li>' + input.value + '<button class="boton">Borrar</button>';
});

lista.addEventListener("click", (evento) => {
    
    if(evento.target.className === 'boton'){
        evento.target.parentElement.outerHTML = ''; 
    }

})