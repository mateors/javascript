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


## Chapter-2 Variables
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

### Let's do some more math
Creating negative numbers in JavaScript works the way you probably expect, just add a minus sign in front of a number.
```js
let myNegativeNum = -1
```

## Comments
Comments don't run like code, they are ignored by the computer. Comments are useful for adding reminders or explaining what a piece of code does in plain english.

There are two ways to add comments to code in JavaScript.

### Single line comment
```js
// speed is a variable describing how fast your player moves
let speed = 2
```

### Multi-line comment
```js 
/*
    The armor value reduces
    the amount of damage that is taken when
    a character gets hit by a bullet
*/
let armor = 20
```
Single line comments are best for one or two line explanations. Multi-line comments are best when you have a larger comment so that you don't need to type `//` over and over to start each line.

## Variable Names
Variable names can't have spaces, they're continuous strings of characters.

In JavaScript you should use `"camelCase"` when creating variable names. Camel case is where the beginning of each new word except the first is capitalized so that it is easier to read:

`thisIsCamelCase`

`someMoreCamelCaseHere`

### Casing Examples
No casing:
```js
let somevariablehere = 10
```

Camel Case:
```js
let someVariableHere = 10
```

Snake Case:
```js
let some_variable_here = 10
```

### Answer the following question?
Which is valid camel case?
* myVariable
* MYVARIABLE
* my_variable


## Basic Variable Types
In JavaScript there are several basic data types.

### Number Type
You're already familiar with the `Number` type. Numbers aren't surrounded by quotes when created, but they can have decimals and negative signs.

```js
let x = 50

let x = 50.20

let x = -50
```

### String Type
"Strings" are raw text in coding speak. They are called "strings" because they are a list of characters strung together. Strings are declared in JavaScript by using single quotes, double quotes, or backticks:
```js
let nameWithSingleQuotes = 'Master'

let nameWithDoubleQuotes = "Master"

let nameWithBackticks = `Master`
```

### Boolean Type
A "Boolean" is a type that can only have one of two values: `true` or `false`. As you may have heard computers really only use 1's and 0's. These 1's and 0's are just `Boolean` values.

```js
0 = false
1 = true
```

```js
let myBool = true
```

## Undefined Variables
Not all variables have a value. We can declare an empty variable:

```js
let empty
```
The value of `empty` in this instance is `undefined` until we use the assignment operator, `=`, to give it a value.

### Undefined is NOT a specific string
Note that the `undefined` type is not the same as a string with a value of "undefined":

```js
let myUndefinedVar // this is an undefined variable
let myDefinedVar = "undefined" // this is a defined string
```

## Dynamic Typing
JavaScript is dynamically typed. All this means is that a variable can store any type, and that type can change.

For example, if I make a number variable, I can later change that variable to be a string:

This is valid:
```js
let speed = 5
speed = "five"
```
### Just because you can doesn't mean you should!
In almost all circumstances, it's a bad idea to change the type of a variable. The "proper" thing to do is to just create a new one. For example:

```js
let speed = 5
let speedDescription = "five"
```

### What if it weren't dynamically typed?
Strongly typed languages like Go (which you'll learn in a later course) are strongly-typed instead of dynamically-typed. In a strongly-typed language, if you try to assign a value to a variable of the wrong type, an error would crash the program.

If JavaScript were strongly-typed, the first example from before would crash on the second line, `speed = "five"`. The computer would give an error along the lines of `you can't assign a string value ("five") to a number variable (speed)`


## Math With Strings
Most math operators we went over earlier don't work with strings, but the exception is the `+` addition operator. When working with strings the `+` operator performs a "concatenation".

"Concatenation" is a fancy word that means the joining of two strings.
```js
let firstName = "Lane "
let lastName = "Wagner"
let fullName = firstName + lastName
```

`fullName` now holds the value "Lane Wagner".

Notice the extra space at the end of `"Lane "` in the `firstName` variable. That extra space is there to separate the words in the final result: `"Lane Wagner"`.

## Multi Variable Declaration
We can save space when creating many new variables by declaring them on the same line:

```js
let stdName = "Tareq", stdAge = 25, stdHeight = 150
```

> Any number of variables can be declared on the same line.

Variables declared on the same line should be related to one another in some way so that the code remains easy to understand

We call code that's easy to understand "clean code"

## Chapter-3 Comparisons
When coding it's necessary to be able to compare two values. `Boolean logic` is the name for these kinds of comparison operations that always result in `true` or `false`.

The operators:

* < "less than"
* > "greater than"
* <= "less than or equal to"
* >= "greater than or equal to"
* == "equal value"
* === "equal type and equal value"
* != "not equal value"
* !== "not equal type or not equal value"

For example:
```js
5 < 6 // evaluates to true
5 > 6 // evaluates to false
5 >= 6 // evaluates to false
5 <= 6 // evaluates to true
5 == 6 // evaluates to false
5 === 6 // evaluates to false
5 != 6 // evaluates to true
5 !== 6 // evaluates to true
```

### Note on equality
Triple equals `===` and `!==` are used more often than `==` and `!=` because it's more common that developers want to ensure that two values are the same type AND the same value, rather than just an equivalent value.

For example:
```js
let playHealthString = "100"
let playHealthNumber = 100
playHealthString == playHealthNumber // true
playHealthString === playHealthNumber // false
```