const canvas = document.getElementById("mi-canvas");
const ctx = canvas.getContext("2d");

const tamCreeper = 400;
const tamCasilla = tamCreeper / 8;

ctx.fillStyle='#00B500';
ctx.fillRect(0,0,400,400);
ctx.fillStyle='#000000';

//ctx.fillRect(50,100,100,50);
//ctx.fillRect((400/8)*1, (400/8)*2, 100, 100);
// ctx.fillRect(50,100,100,50);
// ctx.fillRect(50,100,100,50);

ctx.fillRect(tamCasilla, tamCasilla * 2, tamCasilla * 2, tamCasilla * 2);
ctx.fillRect(tamCasilla * 5, tamCasilla * 2, tamCasilla * 2, tamCasilla * 2);
ctx.fillRect(tamCasilla*3, tamCasilla * 4, tamCasilla * 2, tamCasilla * 1);
ctx.fillRect(tamCasilla*2, tamCasilla * 5, tamCasilla * 4, tamCasilla * 2);
ctx.fillRect(tamCasilla*2, tamCasilla * 6, tamCasilla * 1, tamCasilla * 2);
ctx.fillRect(tamCasilla*5, tamCasilla * 6, tamCasilla * 1, tamCasilla * 2);

let coloresVerdes = [];
colorPro = ["rgb(104, 215, 0)",
    //"rgb(71, 146, 0 )",
    "rgb(57, 122, 0 )",
    //"rgb(27, 221, 0 )",
    "rgb(83, 167, 0 )",
    "rgb(83, 167, 0 )",
    "rgb(3, 84, 0 )",
    "rgb(148, 255, 129)", 
    "rgb(209, 209, 209)",
    //"rgb(0, 153, 0)",
    //"rgb(147, 147, 147)"];
];

for(i=0; i<8; i++)
{
    console.log(colorPro[i])
}
let y=0;
num=0
numY=0;
for(i=0; i<9; i++)
{
    for(y=0; y<9; y++)
    {        
        let coloresVerdes = [];
        colorPro = ["rgb(104, 215, 0)",
            "rgb(104, 215, 0)",
                "rgb(57, 122, 0 )",
                "rgb(83, 167, 0 )",
                "rgb(83, 167, 0 )",
                "rgb(3, 84, 0 )",
                "rgb(148, 255, 129)",
                "rgb(209, 209, 209)",
                        
        ];
        
        for(i=0; i<8; i++)
        {
            console.log(colorPro[i])
        }
        let y=0;
        num=0
        numY=0;
        for(i=0; i<9; i++)
        {
            for(y=0; y<9; y++);
        }
    }
}