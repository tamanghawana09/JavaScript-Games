let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
let total = 30;

class flower{
    constructor(){
        this.x = 850
        this.y = 0
        this.r = 80;
        
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(this.x,this.y,50,0,Math.PI);
        c.fillStyle = "black";
        c.fill();
        c.beginPath();
        c.arc(this.x,this.y,20,0,Math.PI);
        c.fillStyle = "white";
        c.fill();

        //first loop
        c.beginPath();
        c.arc(855,110,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(855,110,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(820,105,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(820,105,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(790,92,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(790,92,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();


        c.beginPath();
        c.arc(765,67,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(765,67,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(750,40,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(750,40,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(742,10,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(742,10,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(960,10,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(960,10,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(950,40,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(950,40,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(935,67,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(935,67,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(915,92,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(915,92,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(890,105,8,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(890,105,4,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        //second loop
        c.beginPath();
        c.rect(1020,10,20,20);
        c.fillStyle ="white";
        c.fill();
        c.beginPath();
        c.rect(1020,10,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(1010,50,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(1010,50,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(990,90,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(990,90,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(960,120,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(960,120,10,10);
        c.fillStyle ="black";
        c.fill();
        
        c.beginPath();
        c.rect(927,147,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(927,147,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(890,165,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(890,165,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(850,170,20,20);
        c.fillStyle ="white";
        c.fill();
        c.beginPath();
        c.rect(850,170,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(810,165,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(810,165,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(775,153,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(775,153,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(740,135,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(740,135,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(710,110,20,20);
        c.fillStyle ="white";
        c.fill();
        c.beginPath();
        c.rect(710,110,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(685,82,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(685,82,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(667,48,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(667,48,10,10);
        c.fillStyle ="black";
        c.fill();

        c.beginPath();
        c.rect(655,10,20,20);
        c.fillStyle ="white";
        c.fill();

        c.beginPath();
        c.rect(655,10,10,10);
        c.fillStyle ="black";
        c.fill();

        //third loop
        c.beginPath();
        c.arc(590,20,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(590,20,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(600,70,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(600,70,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(620,120,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(620,120,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(650,165,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(650,165,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(685,205,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(685,205,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(730,230,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(730,230,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(730,230,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(730,230,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(780,250,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(780,250,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(830,260,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(830,260,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(880,260,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(880,260,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(930,250,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(930,250,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(980,230,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(980,230,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(1020,200,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(1020,200,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(1055,160,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(1055,160,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(1080,115,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.arc(1080,115,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(1100,70,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(1100,70,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.arc(1110,20,15,0,Math.PI*2);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.arc(1110,20,7.5,0,Math.PI*2);
        c.fillStyle = "black";
        c.fill();

        //fourth loop
        c.beginPath();
        c.rect(1170,10,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(1170,10,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(1160,70,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(1160,70,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(1140,120,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(1140,120,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(1115,170,30,30);
        c.fillStyle = "white";
        c.fill();


        c.beginPath();
        c.rect(1115,170,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(1080,220,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(1080,220,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(1040,260,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(1040,260,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(990,290,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(990,290,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(940,310,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(940,310,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(890,325,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(890,325,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(840,330,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(840,330,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(790,325,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(790,325,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(740,310,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(740,310,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(690,290,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(690,290,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(640,260,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(640,260,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(590,220,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(590,220,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(550,180,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(550,180,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(525,130,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(525,130,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(505,80,30,30);
        c.fillStyle = "white";
        c.fill();

        c.beginPath();
        c.rect(505,80,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(495,30,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(495,30,20,20);
        c.fillStyle = "black";
        c.fill();

        c.beginPath();
        c.rect(490,-15,30,30);
        c.fillStyle = "white";
        c.fill();
        c.beginPath();
        c.rect(490,-15,20,20);
        c.fillStyle = "black";
        c.fill();

        //fifth loop

        c.beginPath();
        c.arc(430,20,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(430,20,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(440,80,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(440,80,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(455,140,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(455,140,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(475,195,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(475,195,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(505,245,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();
        c.beginPath();
        c.arc(505,245,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(545,290,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(545,290,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(590,330,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(590,330,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(640,360,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(640,360,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(690,385,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(690,385,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(750,405,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(750,405,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(810,415,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(810,415,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(870,415,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(870,415,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(930,410,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(930,410,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(985,395,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(985,395,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1040,370,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1040,370,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1090,340,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1090,340,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1140,300,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1140,300,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1180,260,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1180,260,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1210,210,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1210,210,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1235,160,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1235,160,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1255,105,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1255,105,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1265,50,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();

        c.beginPath();
        c.arc(1265,50,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        c.beginPath();
        c.arc(1270,-5,20,0,Math.PI*2);
        c.fillStyle="white";
        c.fill();
        c.beginPath();
        c.arc(1270,-5,10,0,Math.PI*2);
        c.fillStyle="black";
        c.fill();

        
        //line
        c.beginPath();
        c.arc(850,0,140,0,Math.PI);
        c.lineWidth = 5;
        c.strokeStyle = "white";
        c.stroke();

        c.beginPath();
        c.arc(850,0,220,0,Math.PI);
        c.lineWidth = 5;
        c.strokeStyle ="white";
        c.stroke();

        c.beginPath();
        c.arc(850,0,300,0,Math.PI);
        c.lineWidth = 5;
        c.strokeStyle ="white";
        c.stroke();

        c.beginPath();
        c.arc(850,0,380,0,Math.PI);
        c.lineWidth = 5;
        c.strokeStyle ="white";
        c.stroke();

        c.beginPath();
        c.arc(850,0,460,0,Math.PI);
        c.lineWidth = 5;
        c.strokeStyle ="white";
        c.stroke();
    }
 
}
const obj = new flower();
function animate(){
        c.clearRect(0,0,1680,800);
        obj.draw();
        requestAnimationFrame(animate);
}
animate();