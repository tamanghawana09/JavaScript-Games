const canvas = docuument.getElementById("canvas");
const c = canvas.getContext("2d");


const obj = new Particle();
const obj2 = new Particle();

const randomNumber = Math.random()* 400;         //0-1
console.log(randomNumber);

let total = 100;

// formula for range in random 
// const randomNumber = Math.random()* (max-min) + min; 

class Particle{
    constructor(){
        this.x = Math.random()*(400-0)+0;
        this.y = Math.random()*(400-0)+0;
        this.r = Math.random()*(100-10)+10;
    }
    draw(){
        c.beginPath();
        c.arc(x,y,r,0,Math.PI*2);
        c.fillStyle="red";
        c.fill();
    }
    move(){
        this.x += Math.random()*(1 - -1)+ -1;
        this.y += Math.random()*(1 - -1)+ -1;
    }
}

const arr = [];
for(let i =0;i<2;i++){
    const objP = new Particle();
    arr.push(objP);
}

function animate(){
    c.clearRect(0,0,400,400);

    obj.draw();
    obj.move();
    obj2.draw();

    for(let i=0;i<total;i++){
        arr[i].draw();
        arr[i].move();
    }
    obj2.move();
    window.requestAnimationFrame(animate);
}
animate();