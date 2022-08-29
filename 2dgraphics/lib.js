let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d'); //CanvasRenderingContext2D

//canvas.style="background:red;";
canvas.style.border="2px solid blue";

console.log(`default width x height: ${canvas.width} x ${canvas.height}`);
//console.log(`canvas: ${canvas}`, typeof canvas);//HTMLCanvasElement


// for (const [key, value] of Object.entries(canvas)) {
//     console.log(`${key}: ${value}`);
// }

//console.log(canvas.toString());

//you can use the following to extract the Prototype []
//console.log("Object.entries",Object.entries(canvas));

//console.log(Object.getPrototypeOf(canvas));
//The HTMLCanvasElement interface also inherits the properties and methods of the HTMLElement interface.
//EventTarget -> Node -> Element -> HTMLElement -> HTMLCanvasElement
//HTMLCanvasElement -> HTMLElement -> Element -> Node -> EventTarget

// let object = canvas;
// do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);

// } while (object);


  //console.log(ctx); //get the properties
  //console.log(Object.getPrototypeOf(ctx));
  //console.log(ctx.canvas);
  //console.log("ctx.entries", Object.getOwnPropertyNames(ctx));
  //console.log("Object.prototype.propertyIsEnumerable()", Object.prototype.propertyIsEnumerable(ctx));



//   for (var key in ctx) {
//     if (Object.getOwnPropertyNames(ctx)) {
//         console.log(key,typeof ctx[key], ctx[key]); //all properties|methos and their default value
//     }
//   }

//ctx.fillRect(10,10,100,140);
// console.log("innerWidth x outerWidth",window.innerWidth, window.outerWidth);
// console.log("innerHeight x outerHeight", window.innerHeight, window.outerHeight);
// console.log(window);
// console.log(window.clientInformation);
// console.log(window.clientInformation.clipboard);
// console.log(window.clientInformation.bluetooth.getAvailability());
// console.log(window.document.location.href);
// console.log("TotalWidth x TotalHeight:",window.screen.width, window.screen.height);
// console.log("AvailableWidth",window.screen.availWidth);
// console.log("AvailableHeight:",window.screen.availHeight);

//ctx.fillStyle="red";
//ctx.fillRect(20,20,500,500);

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(50,50); //starting point
ctx.lineTo(100,50); //first
ctx.lineTo(100,100);//second
ctx.lineTo(50,100);//third
ctx.lineTo(50,50);//
ctx.strokeStyle='rgb(255,0,0)';
ctx.closePath();  
ctx.stroke();

ctx.beginPath();
ctx.moveTo(120,50); //*starting point
ctx.lineTo(170,50); //first line
ctx.lineTo(170,100);//second line
ctx.lineTo(120,100);//third line
ctx.lineTo(120,50);//*fourth line
ctx.strokeStyle="rgb(0,250,0)"; //default = black
ctx.closePath();
ctx.stroke();

//now fil both square
//ctx.fillStyle="rgb(255,0,0)";
ctx.fill();

//ctx.fillStyle="red";
//ctx.fillRect(50,50,50,50);

//ctx.fill="red";
let message;
window.addEventListener('load', (event) => {
    message = 'load\n';
    console.log(message);

    document.addEventListener("mousemove", (e) => {

        let c = e.target.getBoundingClientRect();

        let x = e.clientX-c.left;
        let y = e.clientY-c.top;

        //if(c.width>=x && c.height>=y){
            //console.log(x,y, "clientX",e.clientX, "clientY",e.clientY, "top",c.top, "right",c.right, "bototm",c.bottom, "left",c.left, "width", c.width, "height", c.height);
        //}

        //c.right=c.left+c.width 
        //c.bottom=c.top+c.height
        if(e.target.tagName=="CANVAS" && e.clientX >= c.left && e.clientX <= c.right && e.clientY >= c.top &&  e.clientY <= c.bottom){

            //"clientX",e.clientX, "clientY",e.clientY, "top",c.top, "right",c.right, "bototm",c.bottom, "left",c.left, "width", c.width, "height", c.height
            console.log(x,y, "***", c.bottom,"==",c.top+c.height, "*",c.top,c.height);
        }

        //console.log("e.clientX >= c.left",e.clientX, c.left, e.clientX >= c.left, e.target.tagName, canvas.width);
        // "&&", e.clientX, "<=", c.left+c.width, "&&", e.clientY ,">=", c.top &&  e.clientY <= c.top+c.height)

      

        //console.log(e.target.getBoundingClientRect())
        //console.log(e.clientX,e.clientY);
        //console.log(x,y, "clientX",e.clientX, "clientY",e.clientY, "top",c.top, "right",c.right, "bototm",c.bottom, "left",c.left, "width", c.width, "height", c.height);


    });

});

document.addEventListener('DOMContentLoaded', (event) => {

    message = `DOMContentLoaded\n`;
    console.log(message);
    //new Promise(resolve => setTimeout(resolve, 2000));

    setTimeout(() => {  }, 2000);

});


// canvas.addEventListener("mousemove", function(e){

//  console.log(e);

// });