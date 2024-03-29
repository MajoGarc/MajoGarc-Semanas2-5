window.addEventListener("load", ()=>{
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
    divDatos.style.display = "none";
  });

  btnEnviar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "none";
  });

  fetch("dynamics/php/tipos.php")
    .then((response)=>{
      return response.json();
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos = document.getElementById("select-tipos");
      for(tipo of datosJSON){
        selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });

    buscador.addEventListener("keyup", (evento)=>{
      let termino = buscador.value;
      div
      fetch("dynamics/php/pokemon.php?q" + termino)
      .then((response)=>{
        return response.json();
      })
      .then((datosJSON)=>{
        //Mostrar resultados
        console.log(datosJSON);
        
        for(pokemon of datosJSON)
        { 
          let div = document.createElement("div"); 
          div.dataset = pokemon.pok_name;

        }
      });
    });
});