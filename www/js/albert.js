var fshape;
var fsize;
var fcolor;
var fposition;
var posArr;
var posx;
var posy;
var size1;
var size2;
var shape1;
var color1;
var position1;
var size3 = 50 // size of the shape

function setup() {
 createCanvas(400, 400);

 fshape = createInput("circle, square");
 fsize = createInput("small, medium, large");
 fcolor = createInput("red, green, blue");
 fposition = createInput("x,y");
}

function draw() {
background(100)


 //position
 position1 = fposition.value();
 posArr = position1.split(",");
 posx = posArr[0];
 posy = posArr[1];

 //size
 size1 = fsize.value();
 if (size1 == "small") {
   size2 = size3;
 } else if (size1 == "medium") {
   size2 = size3 + 50
 } else if (size1 == "large") {
   size2 = size3 + 100
 }

//color
noStroke();
 color1 = fcolor.value();
 if (color1 == "red") {
   fill(255, 0, 0);
 }
 else if (color1 == "green") {
   fill(0, 255, 0);
 }
 else if (color1 == "blue") {
   fill(0, 0, 255);
 }

//shape
 shape1 = fshape.value();
 if (shape1 == "circle") {
   ellipse(posx, posy, size2, size2);
 }
 if (shape1 == "square") {
   rect(posx, posy, size2, size2)
 }

}