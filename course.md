# Learning Javascript from scratch!
JavaScript is famously known as the language of web browsers. While it originally was only used for website development, the language has continued to evolve and grow over time.

Today, JavaScript is a powerful and fast programming language used by professionals for almost any kind of programming you can imagine. That's exactly why we start our students off on the right foot with JavaScript.

## What is "Code"?
> Code is just a series of instructions that computers can follow. Computers obey each instruction, one after another.

Programs can be comprised of many instructions. Like many. Like millions.

One of the common instructions in coding is the addition instruction.

### Logging numbers
console.log() can print text using quotes:
```console.log('some text here')```

but it can also print numbers without quotes:
```js 
console.log(1)
```
and you can do math directly inside the parentheses:
```js
console.log(4 + 3)
// prints 3
```

### Multiple Instructions
Code runs in order, starting at the top of the program. For example:
```js
console.log('this prints first')
console.log('this prints second')
console.log('this prints last')
```
Each console.log() instruction prints on a new line.


### Syntax Errors
Syntax is jargon for "valid code that the computer can understand". For example,

```js 
consol.log('hello world')
```
is invalid **syntax** because ```consol.log()``` is not a valid function, "consol" is spelled incorrectly. As a result, an error will be thrown and the code won't execute.

### What does syntax mean?
> Valid code in a programming language.

JavaScript we can use single quotes: `'`, while in Go we need to use double quotes to enclose a string of text: `"`.

Code can have many different problems that prevent it from working as intended.
* A bug in the logic. (example: a program that should add numbers multiplies them instead)
* A problem with speed.
* A problem with syntax. This is the most common problem for new developers.

### What happens if you try to run code with invalid syntax?
You will be provided a syntax error and the code would not execute.

## Variables
Variables are how we store data in our program.

A variable is a name that we define that will point to some data. For example, I could define a new variable called myHeight and set its value to 140. I could also define a variable called myName and set it equal to "Mostain Billah".

### How we create variable?

### Let
To create a new variable we use the let keyword:

```js
let myHeight = 140;
let myName = "Mostain";
```

### Variables Vary
Variables are called "variables" because they can hold any value and that value can change (it varies).

For example, the following will print 20:
```js
let speed = 10
speed = 20
console.log(speed)
```

The line `speed = 20` reassigns the value of `speed` to 20. It overwrites whatever was being held in the `speed` variable before.

Notice that we don't use the keyword `let` again. That's because `let` is only used to declare a new variable. If we're just changing the value of an existing variable then we don't need to redeclare the variable name using `let`.

## Let's do some math
Now that we know how to store and change the value of variables let's do some math!

Here are some examples of common mathematical operators in JavaScript syntax.
```js
let sum = a + b
let difference = a - b
let product = a * b
let quotient = a / b
```
