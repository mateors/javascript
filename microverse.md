# Microverse Practice Repo

# Level-1 (JavaScript Basics 1)
* [Presentation](https://docs.google.com/presentation/d/1NOZmvjmX7Cy97cH_JeZ3yuIaIKTEvV5nMuXRMrIcCDA/edit?usp=sharing)

## Exercise 1
1. Created an replit account with the username of [https://replit.com/@mateors](mateors)
2. Created am empty Node.js project. [Javascript](https://replit.com/@mateors/Javascript#index.js)

## Variable
[Why are variables useful?](https://youtu.be/IMDApd-aRoc)

## Declaring and displaying variables

## Exercise 2

```js
let myname="Md Mostain";
console.log(myname);
```

## Data Types
[Data types in Javascript](https://youtu.be/odr19LorSZk)

```js
let myname="Mostain"; //String
let height=154;  //Numerica
let isAdult=true; //Boolean
```
### [Undefined vs Null in Javascript](https://flexiple.com/javascript/undefined-vs-null-javascript)
In JavaScript, there are two special types of values – undefined and null. It is crucial for a beginner to understand the differences between them (null and undefined) and when to use what.

### Introduction to undefined and null values
Many times we often get confused on what the difference between UNDEFINED and NULL is. Simply put, undefined means a variable has been declared but has not yet been assigned a value. undefined is a type by itself (undefined). Unassigned variables are initialized by JavaScript with a default value of undefined.

```js
//demonstrating usage of undefined in javascript
var n;

console.log(n);

//undefined
```
 > The variable by default is assigned a value of undefined.


### Undefined vs null - the differences

1. Data types:
```js
console.log(typeof undefined); //“undefined”
console.log(typeof null); //“object”
```
2. In arithmetic operations
When used in arithmetic operations, undefined will result in NaN (not a number), whereas null will be converted to 0 behind the screens.

```js

// demonstration of arithmetic operations using undefined and null
console.log(undefined + 1); // NaN

console.log(null + 1); // 1
```

3. Undefined and null are falsy
When used in conditional logic both undefined and null will return false.
```js
console.log(!!undefined); //false

console.log(!!null); //false
```

4. Comparing undefined and null
Let’s see what happens when you compare undefined and null using the JavaScript equality operators.

```js
// comparing undefined and null
console.log(undefined == null);//true

console.log(undefined === null);//false
```
As you can see, when the equality operator is used it compares only the values. Both undefined and null are falsy by default. So == returns true.

But when we use the strict equality operator (===) which checks both type and value, since undefined and null are of different types (from the typeof Operator section), the strict equality operator returns false.

## Exercise 4
```js
let greeting = "Hello my name is";
let myname = "Mostain";
let str = "As I have"
let apples = 10;
let end= "apples";
console.log(greeting, myname, str,apples, end);
```

## Modifying variables
```js
//String type concatenation
let name = "Mostain";
name = name + " Billah";
console.log(name); //Mostain Billah
//or
name += " Billah";
console.log(name); //Mostain Billah

//Numeric type concatenation
let apples = 10;
apples = apples +5;
console.log(apples); //15

//or
apples +=5;
console.log(apples); //15
```

## Exercise 6
```js
let greeting = "Hello my name is";
let myname = "Mostain";
let lastname = "Billah";
let str = "As I have"
let apples = 10;
apples *= 5;
let end= "apples";
console.log(greeting, myname,lastname, str,apples, end);
```

## Final Assesment

### Storing Values with the Assignment Operator
In JavaScript, you can store a value in a variable with the assignment operator (=).
```js
myVariable = 5;
```
[This assigns the Number value 5 to myVariable.](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator)

If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

```js
var myVar;
myVar = 5;
```
First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5.

### [Assigning the Value of One Variable to Another](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another)
After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.
```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```
### Above code explanation
* The above declares a myVar variable with no value 
* then assigns it the value 5. 
* Next, a variable named myNum is declared with no value. 
* Then, the contents of myVar (which is 5) is assigned to the variable myNum. 
* Now, myNum also has the value of 5.

### [Understanding Case Sensitivity in Variables](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables)

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

#### Best Practice
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

#### Examples:
```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

```js
let arr=[];

for (let i=3; i<=12; i++ ){
  arr.push(i);
  console.log(arr);
}
```

