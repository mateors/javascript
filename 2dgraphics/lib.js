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

ctx.fillRect(10,10,100,140);
console.log("innerWidth x outerWidth",window.innerWidth, window.outerWidth);
console.log("innerHeight x outerHeight", window.innerHeight, window.outerHeight);
console.log(window);
console.log(window.clientInformation);
console.log(window.clientInformation.clipboard);
console.log(window.clientInformation.bluetooth.getAvailability());
console.log(window.document.location.href);
console.log("TotalWidth x TotalHeight:",window.screen.width, window.screen.height);
console.log("AvailableWidth",window.screen.availWidth);
console.log("AvailableHeight:",window.screen.availHeight);