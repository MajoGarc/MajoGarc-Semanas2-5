class Campeones{ 

    constructor(nombre, tipo, vida, ataque, mana, habilidades){
        this.nombre = nombre; 
        this.tipo = tipo;
        this.vida = vida; 
        this.ataque = ataque; 
        this.mana = mana; 
        this.habilidades = habilidades; 
    }; 

    presentarse ()
    {
        console.log("Mi nombre es: " +  this.nombre + " y soy un campeón de League of Legends" ); 
        console.log("Estadísticas: vida: " + this.vida + " | maná: " + this.mana + " | ataque: " + this.ataque)
        console.log("Mis habilidades son: " + this.habilidades);
        console.log("Soy fuerte contra: " + this.fuerte1 + " y " + this.fuerte2);  
    }; 
    comparar(enemigo)
    {
        if(enemigo.tipo == this.fuerte1 || enemigo.tipo == this.fuerte2)
            console.log("Es más fácil que le ganes a " + enemigo.nombre + ", que el a ti, fuerza#."); 
        else if (enemigo.fuerte1 == this.tipo || enemigo.fuerte2 == this.tipo)
            console.log("Preparate para perder, " + enemigo.nombre + "tiene las de ganar."); 
        else if (enemigo.tipo == this.tipo)
        {
            console.log("Tus puntos: " + this.puntos);
            console.log("Los puntos de " + enemigo.nombre + ": " + enemigo.puntos); 

            if( this.puntos > enemigo.puntos)
                console.log("Échale ganas, es posible ganarle a " + enemigo.nombre + ", fuerza#."); 
            else if( this.puntos < enemigo.puntos)
                console.log("Échale ganas, es posible perder contra " + enemigo.nombre + ", fuerza#."); 
            else if (this.nombre == enemigo.nombre)
                console.log("Estás enfrentandóte al mismo campeon.")
            else 
                console.log ("Parecen clones, tienen las mismas estadísticas.")
        }
        else 
            console.log("Están equilibradoos, fuerza#! (no olvides diviertirte)."); 
    };
}

class Tanque extends Campeones{
    constructor(nombre, vida, ataque, mana, tipo, habilidades, armadura)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.tipo= "tanque"; 
        this.vida *= 1.24;  
        this.armadura = armadura; 
        
        this.fuerte1="mago"; 
        this.fuerte2="asesino"; 
        this.puntos= this.vida + this.armadura + this.ataque + this.mana; 
    };
}

class Luchador extends Campeones{
    constructor(nombre, tipo, vida, ataque, mana, habilidades)
    {
        super(nombre, tipo, vida, ataque, mana, habilidades)
        this.tipo= "luchador"; 
        this.vida *= 1.15;  
        this.ataque *= 1.15;  
        
        this.fuerte1="asesino"; 
        this.fuerte2="tanque"; 
        this.puntos= this.vida + this.ataque + this.mana; 
    };
}

class Tirador extends Campeones{
    constructor(nombre, tipo, vida, ataque, mana, habilidades, distancia)
    {
        super(nombre, tipo, vida, ataque, mana, habilidades)
        this.tipo= "tirador"; 
        this.ataque *= 1.24;  
        this.distancia = distancia; 
        
        this.fuerte1="tanque"; 
        this.fuerte2="luchador"; 
        this.puntos= this.vida + this.ataque + this.mana + this.distancia; 
    };
}

class Mago extends Campeones{
    constructor(nombre, tipo, vida, ataque, mana, habilidades, distancia)
    {
        super(nombre, tipo, vida, ataque, mana, habilidades)
        this.tipo= "mago"; 
        this.mana *= 1.24;  
        this.distancia = distancia; 
        
        this.fuerte1="luchador"; 
        this.fuerte2="tirador"; 
        this.puntos= this.vida+ this.ataque + this.mana + this.distancia ; 
    };
}

class Asesino extends Campeones{
    constructor(nombre, tipo, vida, ataque, mana, habilidades, movilidad)
    {
        super(nombre, vida, ataque, mana, tipo, habilidades)
        this.tipo= "asesino";
        this.vida *= .95;
        this.ataque *= 1.30;   
        this.movilidad = movilidad; 
         
        this.fuerte1="luchador"; 
        this.fuerte2="tirador"; 
        this.puntos= this.vida + this.ataque + this.mana + this.movilidad; 
    };
}

const tanque = new Tanque ( "tank", "tanque", 98, 196, 80, ["Escudo del Amanecer", "Espada"], 130); 
const luchador = new Luchador("Luchador", "luchador", 80, 176, 120, ["salvaguarda", "tempesatad"]); 
const tirador = new Tirador ("Tirador", "tirador", 85, 165, 90, ["cambio de armas", "mascafuegos"], 160); 
const mago = new Mago ( "Mago", "mago", 96, 170, 64, ["Enlace de luz", "singularidad brillante"], 150); 
const asesino = new Asesino("Asesino", "asesino", 90, 187, 77, ["reflejos biónicos", "fuerza exhorbitante"], 180)

console.log("Bienvenidx, ingresa tu consulta y gana!");
console.log(Tanque, Luchador, Tirador, Mago, Asesino); 