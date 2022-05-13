class animal {
    constructor(nombreComnun, esperanzaDeVida, gestacion, alimentacion, habitat, especie, vertebrado, nPatas, enPeligro){
        this.nombreComnun = nombreComnun;
        this.esperanzaDeVida = esperanzaDeVida;
        this.gestacion = gestacion;
        this.alimentacion = alimentacion;
        this.habitat = habitat;
        this.especie = especie;
        this.vertebrado = vertebrado;
        this.nPatas = nPatas;
        this.enPeligro =enPeligro;
    };

    comer(){
        console.log('Este animal es' + this.alimentacion + 'ya comió.');
    };
    crecer(){
        console.log(this.nombreComnun + 'ha crecido');
    };
    moverse(){
        if(this.nPatas == 0 1 || this.habitat == 'acuatico'){
            if(this.habitat == 'acuatico')
            {
                console.log(this.nombreComnun + 'es acuatico, entonces se pone a nadar');
            }
            else if()
            {
                console.log(this.nombreComnun + 'es terrestre prero no tiene patas');
            }
        }
        else if(this.habitat == 'aereo')
        {   
            console.log(this.nombreComnun + 'puede volar, cuando lo necesite, ');
        }
        else if(this.habitat =='terrestre')
        {
            console.log(this.nombreComnun + 'se desplaza sobre la tierra');
        }
        else 
        {
            console.log('No conocemos ese tipo de hábitat');
        }
    };
};
class mamífero extends animal{

};

const ajolote = new animal('Ajolote', 15, 'ovíparo', 'carnívoro', 'acuático', 'Ambystoma Mexicanum', true, 4, true);