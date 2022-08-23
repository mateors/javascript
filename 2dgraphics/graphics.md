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

```js

let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

console.log(`width x height: ${canvas.width} x ${canvas.height}`);

```