var x=0;
var y=0;
var heights = [];
var rectWidth = 5;
function setup(){
    createCanvas(400,400);
    for(var i = 0; i<floor(width/rectWidth); i++){
        heights[i] = floor(random(10,width));
    }
    frameRate(10);
}

function draw(){
    noStroke();
    background(71);
     for(var i = 0; i < width; i++){
         myRect(rectWidth*i,0,10,heights[i],false);
     }
     for(var i = 0; i<heights.length-1; i++){
         if(heights[i]>=heights[i+1]){
            var temp = heights[i];
            heights[i] = heights[i+1];
            heights[i+1]=temp;
         }
     }

}

function myRect(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    rect(x,y,w,h);
}

function BubbleSort(x){
    this.x = x
    for(var i = 0; i<x.length-1; i++){
        for(var j = 0; j<x.length-i-1; j++){
            if(x[j]>=x[j+1]){
                var temp = x[j];
                x[j] = x[j+1];
                x[j+1]=temp;
            }
        }
    }
    return x;
}