const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
var letter="010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101";

let total = 100;
const raindrop =[];

class rain{
    constructor(){
        this.x = Math.random()*(1680-0)+0;
        this.y = Math.random()*(850-0)+0;
    }
    draw(){
        c.beginPath();
        c.fillStyle="rgb(56, 254, 19)";
        c.font = "12px Arial";
        for(let i=0;i<letter.length;i++){
            c.fillText(letter[i], this.x, this.y + i * 20);
        }
       
    }
    move(){
        this.y +=Math.random()*3+1;
        if(this.y> canvas.height){
            this.y=0;
        }
    }
}

for(let i=0;i<total;i++){
    const obj = new rain();
    raindrop.push(obj);
}
function animate(){
    c.clearRect(0,0,1680,850);
    for(let i = 0;i<total;i++){
        raindrop[i].draw();
        raindrop[i].move();
    }
    requestAnimationFrame(animate);
}
animate();