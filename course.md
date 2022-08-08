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