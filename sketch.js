angle = 0;

function setup(){
    createCanvas(400, 300, WEBGL);
}

function draw(){
background(175);
fill(255,0,0);
//noStroke();
translate(mouseX-width/2,0,mouseY-height/2);
rotateX(angle);
torus(50,10);
translate(-100,0,0);
fill(0,200,100);
box();
translate(230,0,0);
fill(0,0,255)
sphere();
angle +=0.05;   
}