let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
const snowballs = [];
let total = 100;


class snow{
    constructor(){
        this.x = Math.random()*(1680-0)+0;
        this.y = Math.random()*(800-0)+0;
        this.r = Math.random()*(8-5)+5;
    }
    draw(){
            c.beginPath();
            c.arc(this.x,this.y,this.r,0,Math.PI*2);
            c.fillStyle='rgb(242,243,244)';
            c.shadowColor = 'rgb(242,243,244)';
            c.shadowBlur = 20;
            c.shadowOffsetX =0;
            c.shadowOffsetY =0;
            c.globalCompositeOperation ="lighter";
            c.fill();
            
    }
    move(){
        this.y += Math.random() * 3 + 1;
        if(this.y> canvas.height){
            this.y=0;
            
        }
        
    }
    
}
for(let i =0;i<total;i++){
    const obj = new snow();
    snowballs.push(obj);
}
const obj2 = new snow();

function animate(){
    c.clearRect(0,0,1680,800);
    for(let i=0;i<total;i++){
        snowballs[i].draw();
        snowballs[i].move();
    }
    window.requestAnimationFrame(animate);
}
animate();