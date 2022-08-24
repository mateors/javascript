# Programming 2D Computer Graphics
The goal is to understand how your computer programs can manipulate simpler 2D images.

### Obectives:
Introduces you to the basics of 2D graphics programming, including the formulas needed to transform (move, rotate, scale, and so on) 2D shapes in
various ways. Although transforming 2D shapes requires that you know a set of formulas for manipulating the points that define a shape, you’ll discover that these formulas are easy to use, even if you don’t really understand exactly how they work.

`Transform --> move, rotate, scale and so on...`

### Topics will be covered:
* About screen and Cartesian coordinates
* About using vertices to define 2D shapes
* About translating, scaling, and rotating 2D shapes
* How to use matrices to transform 2D shapes

## Understanding Screen and Cartesian Coordinates
You probably know that to draw a line in a window, you must call the GDI function MoveToEx() to position the starting point of the line and then call the function LineTo() to draw the line. In a program, those two function calls would look something like this:

```
MoveToEx(hDC, x, y, 0);
LineTo(hDC, x, y);
```

### What is Context?
the circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood.

### What is Context in Communication? 
The context definition in communication refers to the factors that work together to determine the meaning of a message.

### What is context in graphics programming?
A graphics context represents a drawing destination. It contains drawing parameters and all device-specific information that the drawing system needs to perform any subsequent drawing commands.


## How to draw a line in a window (HTML5 canvas element) using JavaScript?
Canvas is a 2D drawing API. Essentially the browser gives you a rectanglar area on the screen that you can draw into. You can draw lines, shapes, images, text; pretty much anything you want.

```js

let canvas = document.getElementById('mycanvas');

let ctx = canvas.getContext('2d'); //CanvasRenderingContext2D

console.log(`default width x height: ${canvas.width} x ${canvas.height}`);

```
### getContext()* may have the following parameter
* 2d
* webgl
* experimental-webgl

### Get all the properties & Methods available in [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
console.log(ctx.canvas);

### Properties
* canvas
* direction
* strokeStyle
* fillStyle
* direction 
* lineWidth

### Methods
* beginPath
* closePath
* stroke
* moveTo
* lineTo
* fill
* fillRect


```js
  for (var key in ctx) {
    if (Object.getOwnPropertyNames(ctx)) {
        console.log(key,typeof ctx[key], ctx[key]); //all properties|methos and their default value
    }
  }
  ```

by default fill color is black, we can draw a rectangle using the following code and see the output in your browser.
```js
ctx.fillRect(0,0,100,140);
```

### Measuring browser width & height
```js
console.log("innerWidth x outerWidth",window.innerWidth, window.outerWidth);
console.log("innerHeight x outerHeight", window.innerHeight, window.outerHeight);

console.log("TotalWidth x TotalHeight:",window.screen.width, window.screen.height);
console.log("AvailableWidth",window.screen.availWidth);
console.log("AvailableHeight:",window.screen.availHeight);

```
`window.screen.availWidth == window.outerWidth`

`window.screen.availHeight == window.outerHeight`

> window object properties and methods exploration

```js
console.log(window);
console.log(window.clientInformation);
console.log(window.clientInformation.clipboard);
console.log(window.clientInformation.bluetooth.getAvailability());
console.log(window.document.location.href);
console.log("TotalWidth x TotalHeight:",window.screen.width, window.screen.height);
console.log("AvailableWidth",window.screen.availWidth);
console.log("AvailableHeight:",window.screen.availHeight);
```

The HTMLCanvasElement interface provides properties and methods for manipulating the layout and presentation of `<canvas>` elements. The HTMLCanvasElement interface also inherits the properties and methods of the HTMLElement interface.
### [Properties & Methods of HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### Further study [HTML CANVAS DEEP DIVE](https://joshondesign.com/p/books/canvasdeepdive/toc.html)