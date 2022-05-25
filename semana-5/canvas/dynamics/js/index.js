const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

class objetito{
    constructor(x, y, dx, dy){
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.dx = dx;
        this.spriteX = 0;
        this.spriteY = 0;
        const imagen = new Image();
        imagen.src = ruta;
        this.img = imagen;
    };


// let x = 0;
// let y = 0;
// let dx = 3;
// let dy = 1;
// let spriteX = 0;
// let spriteY = 0;
// const imagen = new Image();
// imagen.src ="../statics/img/dvd.png";

    // const dvd = new objetito(0, 0, 3, 2, "../statics/img/dvd.png");
    // const dvd2 = new objetito(50, 100, 3, 2, "../statics/img/dvd.png");

    mover(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x <= 0 || this.x >= canvas.width - tamX){
            this.dy = -this.dy;
            this.spriteX += this.tamX;
        }   
        else if(this.x <= 0 || this.x >= canvas.heigth - tamY)
        {
            this.dx = -this.dx;
            this.spriteX += this.tamX;   
        }

        if(this.spriteX>192){
            this.spriteX = 0;
        }
    }

    // caminarArriba(){

    // }

    dibujar(){
        ctx.drawImage (this.img, this.spriteX);
    }

}


function dibujar(){
    // ctx.fillStyle = "#ff0000";
    // ctx.fillRect(0, 0, 32, 16);
    ctx.fillStyle = "#4040aa";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //ctx.drawImage(imagen, spriteX, spriteY, 32, 16, x, y, 32, 16);

}





// ctx.fillText("Hola", canvas.width /2, canvas.height / 2);
// ctx.fillStyle = "#000000";
