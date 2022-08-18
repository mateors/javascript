# Microverse Practice Repo

# [Level-1 (JavaScript Basics 1)](https://docs.google.com/presentation/d/1NOZmvjmX7Cy97cH_JeZ3yuIaIKTEvV5nMuXRMrIcCDA/edit?usp=sharing)
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

# [Level-2](https://docs.google.com/presentation/d/1aagkWAfDdFYWZul_WnhdlXicHHD3WNXZUZb13UyGijo/edit?usp=sharing)

## How to use bubbles to do teamwork
We have created a whatsapp group of 7 members, the purpose of this group is to study and practice code together in a collaborative way.

### mob programming in bubbles
One become a driver and the rest are navigators from the newly form bubbles/team
driver will  share his/her screen and code with the help of navigators.

## Why teamwork is so important?
* Most of your time at Microverse will be spent doing teamwork with others, and doing teamwork in this level will prepare you for that.
* Teamwork will give you the opportunity to improve your coding communication skills.
* Being able to communicate your thought process while coding is essential at real-world tech job interviews.

> so teamwork helps to improve our coding communication skills as well as thinking process.

To get recommendation from the microverse representitive we need to form a team and work together and participate all the event specially hackathon on wednesday at 8pm. Remember only participant will get recommendation to join microverse program.


## Basic aritmetics in JavaScript

### Exercise 1
```js
let A= 4 + 7;
let B = 5 * 9;
let C= B/A;
console.log(C); //4.090909090909091
```

### Why if-then-else statements matter
Like real world in programming we need to take decisions and `if`, `else if`, `else` this are the keywords help us to take decision or select a specific block of code in our program and execute.

### Switch case syntax
```js


let steps=0;

//if else
if (steps==0){
  console.log("You have not started yet!, you are at steps 0");
}else if(steps==1){
  console.log("You are at steps 1");
}else{
  console.log("You need help to get started?");
}

//same but using switch case
switch(steps){
  case 0:
    console.log("You have not started yet!, you are at steps 0");
    break;
    
  case 1:
    console.log("You are at steps 1");
    break;

  default:
    console.log("You need help to get started?");
}
//above line of code will output
//You have not started yet!, you are at steps 0
```
* [Which one to pick? if-else or switch-case?](https://dasha.ai/en-us/blog/javascript-if-else-or-switch-case)


## Excersise 2
```js 
let X = 32;

if (X==9){
  console.log("True");
}else{
  console.log("False");
}

let Y = "Green";
if (Y=="Blue"){
  console.log("Blue detected!");

} else if(Y=="Green"){
   console.log("Green detected!");

}else{
  console.log("No green or blue detected!");
}
```

## Comparison Operators
* `==`	equal to
* `===`	equal value and equal type
* `!=`	not equal
* `!==`	not equal value or not equal type
* `>`	greater than
* `<`	less than
* `>=`	greater than or equal to
* `<=`	less than or equal to

```js
if (age < 18) text = "Too young to buy alcohol";
```

## Logical Operators
* `&&` and -> (x < 10 && y > 1) is true
* `||` or
* `!`	 not

## Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

### Syntax
> variablename = (condition) ? value1:value2 
```js
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);
```

### Make sure that you understand the difference between:
* `==` and `===`
* `!=` and `!==`

> Double equals (`==`) is a comparison operator, which transforms the operands having the same type before comparison.

> `===` (Triple equals) is a strict equality comparison operator in JavaScript

## Exercise 3
```js
let n = 71; //50
if ( n > 45 ){
   if ( n < 65 ){
    console.log(n);
   }
}
```

## While loop
### Exercise 4
```js
let i = 2;
while(i<=9){
 console.log(i);
 i++;
}
```

## For loop
### Exercise 5
```js
for(let i=7; i<13; i++){
  console.log(i);
}
```

## Data Structure - Array
### Exercise 6
```js
let numbers = [8,9,10,11,12,13,14,15];
console.log(numbers[3]); //4th value
console.log(numbers);
```

## Combining arrays, loops and if-then-else
### Exercise 7 (Google Slide 23)
```js
let numbers = [1,2,3,4,5,6,7,8,9,10];
let size=numbers.length;

for(let i=0; i<size; i++){
  //if(i>4){
    console.log(i);
  //}
}
```

## JavaScript coding challenges
Google slide 26 & 27

* [Understanding Boolean Values](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-boolean-values)
* [Use Conditional Logic with If Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements)
```js
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue){
    return "Yes, that was true";
  }else{
    return "No, that was false";
  }
    // Only change code above this line
}
```
* [Comparison with the Equality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

In order for JavaScript to compare two different data types (for example, `numbers` and `strings`), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```
```js
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```
* [Comparison with the Inequality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator)
* [Comparison with the Greater Than Or Equal To Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator)
```js
function testGreaterOrEqual(val) {

  if (val>=20) {  // Change this line
    return "20 or Over";
  }
  if (val>=10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}

testGreaterOrEqual(10);
```
*[Store Multiple Values in one Variable using JavaScript Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays)
```js
// Only change code below this line
const myArray = ["Mostain", 38];
```
* [Access Array Data with Indexes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes)
```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray = [50, 60, 70];
let myData = myArray[0];
```

* [Modify Array Data With Indexes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/modify-array-data-with-indexes)
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
### Example
```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45;
```
* [Iterate with JavaScript While Loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops)
You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

//Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// Setup
const myArray = [];
// Only change code below this line
let i=5;
while(i>=0){
  myArray.push(i);
  i--;
}
console.log(myArray);
```
* [Iterate with JavaScript For Loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

`for (a; b; c)`, where `a` is the initialization statement, `b` is the condition statement, and `c` is the final expression.
```js
// Setup
const myArray = [];

// Only change code below this line
for(let i=1; i<=5; i++){
  myArray.push(i);
}
```
* [Count Backwards With a For Loop](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop)
A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by 2 each loop with `i -= 2`.
```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

//Push the odd numbers from 9 through 1 to myArray using a for loop.
// Setup
const myArray = [];
// Only change code below this line
for(let i=9; i>0; i-=2){
  myArray.push(i);
}
```
* [Iterate Through an Array with a For Loop](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
```js
//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total=0;
for(let i=0; i<myArr.length; i++){
  total+=myArr[i];
  //console.log(total);
}
```

## Recommendation for doing teamwork
We did some teamwork in this level 2 so we are a valid candidate for asking the recommendation, please submit the recommendation form https://airtable.com/shrDs5hEGXsGTh8OT


## Don't forget to submit progress report
After completeing every level we must submit our progress report using the gather board.
![progress](./screens/progress_report.png)

[Progress report form](https://airtable.com/shrcivQt85T4vhc3V)


## [Level-3](https://docs.google.com/presentation/d/15-Db3kK2SM55dxFxJWoTP8MiRI40rVDTUVIumV4tfp4/edit?usp=sharing)

### Tweaking `for` loops

### Exercise 1
```js

for(let i=102; i>=27; i-=3){
  console.log(i);
}

```

### Array operations
```js
let arr = ["Apple", "Banana", 10, 20, 50];

//push to arr = add to the ending
arr.push("Orange");
console.log(arr);

//pop from arr = remove from the ending
let popped=arr.pop();
console.log(popped);
console.log(arr);

//shifting = remove from the beginning
let shifted=arr.shift();
console.log(shifted, arr);

//add from the beginning
arr.unshift(50);
console.log(arr);

//remove multiple element from array
let spliced=arr.splice(1,2);
console.log(spliced, arr);

//copy section of an array
let copys=arr.slice(0,2);
console.log(copys);
```
### Exercise 2
```js
let arr = [];

for(let i=3; i<=12; i++){
  arr.push(i);
}
console.log(arr);
```

## Basic logical operators
### Exercise 3
```js
let arr =[3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];
for(let i=0; i<arr.length; i++){
  if (arr[i] >=3 && arr[i] <=7){
    console.log(arr[i]);
  }
}
//--------
function testLogicalAnd(val) {
  // Only change code below this line
  if (val >=25 && val <=50) {
      return "Yes";
  }
  // Only change code above this line
  return "No";
}
testLogicalAnd(10);

function testLogicalOr(val) {
  // Only change code below this line
  if (val<10 || val>20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
testLogicalOr(15);
```

## Exercise 4
```js
let arr =[3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8];
for(let i=0; i<arr.length; i++){
  if (arr[i]<3 || arr[i]>7){
    console.log(arr[i]);
  }
}
```
## String truncation
### Exercise 5
```js
let name="Microverse";
console.log(name.substring(0,5));
console.log(name.substring(0,5));
```

## Exercise 6
```js
let arr= [1,2,3,4,5,6,7,8,9,10,13];
let number=13;

for(let x of arr){
  if(x==number){
    console.log("Found it!");
  }else{
    console.log("Not found");
  }
}
```

## Exercise 7
```js
let numbers= [1,2,3,4,5,6,7,8,9,10];
let arr= [];

for(let i=0; i<numbers.length; i++){
 if(numbers[i]>=4 && numbers[i]<=9){
  arr.push(numbers[i]);
 }
}
console.log(arr);

```

### Exercise 8
```js
let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let size=arr.length;

for(let i=size-1; i>=0; i--){

  //console.log(arr[i]);
  let sa=arr[i];
  for(let j=sa.length-1; j>=0; j--){
    console.log(sa[j]);
  }
}
```


### Exercise 9
```js
let bigarr= [];
let extc=9;

for(let i=0; i<3; i++){

  let little=[];
  for(let j=0; j<3; j++){
    little.push(extc);
    extc--;
  }
 bigarr.push(little);
}
console.log(bigarr);
```

## Function arguments
* less code or no code repetition
* arguments

### Exercise 10
```js
function multiplier(){
  let a=5;
  let b=6;
  console.log(a*b);
}

function greet(name){
  console.log(`Hello ${name}`);
}
```
> How to use return to produce the output of a function

### Exercise 11
```js

function myFunc(arr){
  let output = [];
  for(let x of arr){
     output.push(x*5);
  }
  return output;
}

let out=myFunc([1,5,10]);
console.log(out);
```


* [Reversing and translating arrays with functions](https://www.youtube.com/watch?v=UAI7jTJg3OM&t=1s)

### Exercise 12
```js

function reverse(arr){
  
 let output = [];
 for (let i= arr.length-1; i>=0; i--){
   output.push(arr[i])
 }
 return output;
}
console.log(reverse([1,2,3]));

function revTran(arr){
  let output=[];
  for(let i=arr.length-1; i>=0; i--){
    output.push(arr[i])
  }

  let result=[];
  for(let i=0; i<output.length; i++){
   
    if(output[i]==1){
       result.push("one");
    }
    if(output[i]==2){
       result.push("two");
    }
    if(output[i]==3){
       result.push("three");
    }
    if(output[i]==4){
       result.push("four");
    }
  }
  return result;
}
//console.log(revTran([1,2,3,4])); 
//console.log(revTran([4,1,1,2])); //
console.log(revTran([1,2,1,2])); //
```

## [Level-4](https://docs.google.com/presentation/d/1qX08h9muuE-iFb0TlkhbPrV4rmcBjnvpIQRuIQEdFAU/edit?usp=sharing)
Slide 4, Convert Celsius to Fahrenheit 

```js
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit=celsius*(9/5)+32;
  return fahrenheit;
} 
console.log(convertCtoF(30));
```

### [Reverse a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)
slide 8

> How do i turn the string into an array?
There are 4 Ways to Convert String to Character Array in JavaScript.
```js
const string = 'word';
```
1. string.split(''); `console.log(string.split(''));`
2. [...string]; `console.log([...string]);`
3. Array.from(string); `console.log(Array.from(string));`
4. Object.assign([], string); `console.log(Object.assign([],string));`


```js
function reverseString(str){
  let reverse="";
  //read/access each letter from the str variable
  for(let i=str.length-1; i>=0; i--){
    //console.log(str[i]);
    reverse+=str[i];
  }
  return reverse;
}

reverseString("hello");

//Another way using .split() function
function reverseString(str){
  
  let reverse="";
  //let narr=str.split(""); //option 1
  //let narr=[...str]; //option 2
  //let narr=Array.from(str); //option 3
  let narr=Object.assign([], str); //option 4

  //reading each letter from the narr array
  for(let i=narr.length-1; i>=0; i--){
    reverse+=narr[i];
  }
  return reverse;
}
```
### [Factorialize a number](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)
Slide 12, Return the factorial of the provided integer.
Factorials are often represented with the shorthand notation n!
For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`
```js
//Manual factorial calculation
let x = 1;

x *=2;

x *=3;
console.log(x); //3!=6

x *=4;
console.log(x); //4!=24

x *=5;
console.log(x); //5!=120

x *=6;
console.log(x); //6!=720

//Now turn the above idea/concept into a function
//Time Complexity: O(n)
function factorialize(num) {
  let result=1;
  for(let i=2; i<=num; i++){
   result *= i;
   //console.log(result);
  }
  return result;
}

//Time Complexity: O(n)
function recursiveFactorial(num){

  //base case
  if (num==1 || num==0){
    return 1;
  }
  //recursive case
  num=num*rfactor(num-1);
  return num;
}

```


### [Truncate a String](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)
Slide 16, Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.

```js
function truncateString(str, num) {
  let size=str.length;
  str=str.substring(0,num);
  if (size>num){
    str=str+"...";
  }
  return str;
}
```

### [Where do I Belong](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)

* [How javascript array sorting works?](https://www.javascripttutorial.net/javascript-array-sort/)
```js
let arr = [5, 2, 10, 4, 3, 1];
console.log(arr);
arr.sort(function(a, b) {

  if (a > b) { //first argument is greater than second
    return 1; //positive
  }
  if (a < b) { //first argument is less than second
    return -1; //negative
  }
  return 0; //a==b, both are equal so zero
});
console.log(arr);

//10,2
//10>2==true = 10-2=8 positive -> 1
//10<2==false => 2-10=-8 negative -> -1
//otherwise zero

let nums=[3,5,20];
console.log(nums.sort((a,b)=>a-b)); 
```

### [Where do i belong?](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)
Slide 20 \
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return 1 because it is greater than `1` (index 0), but less than `2` (index 1).

```js
//Time Complexity: O(n)
function getIndexToIns(arr, num) {
  
  let index=0;
  arr.sort((a,b)=>a-b);
  for(let i=0; i<arr.length; i++){

    let cn=arr[i];
    let nn=arr[i+1];
    
    if(num == cn && num<nn){
      index=i;
      return index;
      
    } else if(num> cn && num<nn){
      index=i+1;
      return index; 
      
    }else{
      index++;
    }  
  }
  return index;
}

console.log(getIndexToIns([10,20,30,40,50], 35));//3
console.log(getIndexToIns([10,20,30,40,50], 30));//2
console.log(getIndexToIns([40,60], 50));//1
console.log(getIndexToIns([3, 10,5], 3));//0
console.log(getIndexToIns([5, 3, 20, 3], 5));//2
console.log(getIndexToIns([2, 20, 10], 19)); //2
console.log(getIndexToIns([2, 5, 10], 15));//3
console.log(getIndexToIns([], 1));//0

//the easy method, using hint from slide 21
//Time Complexity: O(n)
function getIndexToIns(arr, num) {
  let index=0;
  for(let i=0; i<arr.length; i++){
    if(num>arr[i]){
      index++;
    }
  }
 return index;
}

console.log(getIndexToIns([10,20,30,40,50], 35));//3
console.log(getIndexToIns([10,20,30,40,50], 30));//2
console.log(getIndexToIns([40,60], 50));//1
console.log(getIndexToIns([3, 10,5], 3));//0
console.log(getIndexToIns([5, 3, 20, 3], 5));//2
console.log(getIndexToIns([2, 20, 10], 19)); //2
console.log(getIndexToIns([2, 5, 10], 15));//3
console.log(getIndexToIns([], 1));//0
```

### [Chunky monkey](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey)
slide 23 challenge

```js
//Time Complexity: O(n)
function chunkArrayInGroups(arr, size) {
  let aSize=arr.length;
  let twoDim=[];
  let loopEnd=Math.ceil(aSize/size);
  let start=0;
  //console.log(loopEnd);
  for(let i=0; i<loopEnd; i++){
    twoDim.push(arr.slice(start,start+size));
    start+=size
  }
  return twoDim;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));//[ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]


function chunkArrayInGroups(arr, size) {

  let output = []; 
  let subarr=[];
  let subc=0;
  
  //console.log(loopEnd);
  for(let i=0; i<arr.length; i++){
    
    if(subc===size){
      subc=0;
      output.push(subarr);
      subarr=[];
    }
    
    subarr.push(arr[i]);
    subc++;
  }
  output.push(subarr);
  //console.log(subarr);
  return output;
}
```

### [Sum All Numbers in a Range](https://docs.google.com/presentation/d/1qX08h9muuE-iFb0TlkhbPrV4rmcBjnvpIQRuIQEdFAU/edit?usp=sharing)
Slide 27, We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, `sumAll([4,1])` should return `10` because sum of all the numbers between 1 and 4 (both inclusive) is `10`.

```js
function sumAll(arr) {

  let result=0;
  let start=arr[0];
  let end=arr[1];

  if(end<start){
    start=arr[1];
    end=arr[0];
  }
  
  for(let i=start; i<=end; i++){
    //console.log(i);
    result+=i;
  }
  return result;
}
let res=sumAll([10, 5]);
console.log(res);
```

### Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the `arguments object`.
```js
function destroyer(arr){

  let input=arguments[0]; //arguments object
  let farr=[]; //
  let output=[];
  
  for (let i = 1; i < arguments.length; i++) {
    let cv=arguments[i];
    farr.push(cv);
  }

  for(let i=0; i<input.length; i++){
    //console.log(farr[i]);
    let elm=input[i];
    if(farr.includes(elm)==false){
      output.push(elm);
    }
    
  }
  //console.log(output);
  return output;
}
console.log(destroyer([1,6,5,7,5,7], 5,7));//[ 1, 6 ]
```

### [Pig Latin](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin)
I used to solve using [Slide 37 hints 2](https://www.youtube.com/watch?v=D1VzsCiA4mI)

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.

- If a word begins with a vowel, just add `way` at the end.

```js
function translatePigLatin(str) {

  let fchar=str[0];
  let vowels="aeiou";
  let output="";

  if (vowels.includes(fchar)){
      output=str+"way";

  }else{

      let i=0;
      while(vowels.includes(str[i])==false){
        //console.log(str[i]);
        i++;
      }

      let prefix=str.substring(0,i);
      let rest=str.substring(i);
      output=`${rest}${prefix}ay`;
  }
  return output;
}
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("california"));
```


### [DNA Pairing](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing)
Slide 39, freecodecamp problem description was not clear to me, I googled and found the following info to make it understand how DNA strand base pair forms.

#### Pairs of DNA strands / dna strand base pairs
> The four bases in DNA are adenine (A), cytosine (C), guanine (G), and thymine (T). These bases form specific pairs (A with T, and G with C).

```js
function pairElement(str) {

  let output=[]; //2d array
  let at="AT";
  let cg="CG";
  
  for (let i = 0; i < str.length; i++) {
    
    let singlepair=str[i];
    //console.log(singlepair);
    let subarr=[]//1d array
    if(at.includes(singlepair)){

      if(singlepair=='A'){
        subarr=['A','T'];
      }else if(singlepair=='T'){
        subarr=['T','A'];
      }
    }

    if(cg.includes(singlepair)){
      
      if(singlepair=='C'){
        subarr=['C','G'];
      }else if(singlepair=='G'){
        subarr=['G','C'];
      }
    }
    output.push(subarr);
  }
  return output;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

//Another easy of of implementation the same function
function pairElement(str) {

  let output=[]; //2d array

    for (let i = 0; i < str.length; i++) {
      
      let singlepair=str[i];
      if (singlepair=='A'){
        output.push(['A','T']);
        
      }else if (singlepair=='T'){
        output.push(['T','A']);
        
      }else if (singlepair=='C'){
        output.push(['C','G']);
        
      }else {
        output.push(['G','C']);
      }
  }
  return output;
}
```


## Next Level
* Level 5 - JavaScript Intermediate Challenges.
* Level 6 - JavaScript Advance Challenges
* Level 7 - Intro to web development
* Level 8 - HTML
* Level 9 - CSS 1
* Level 10 - CSS 2
* Level 11 - Git Experience
* Level 12 - HTML/CSS Project


# Level 5
## JavaScript Intermediate Challenges

* Challenge #11: Convert HTML Entities (freeCodeCamp) 
* Challenge #12: Sum All Primes (freeCodeCamp) 
* Challenge #13: A Very Big Sum (HackerRank) 
* Challenge #14: Plus Minus (HackerRank) 
* Challenge #15: Staircase (HackerRank) 
* Challenge #16: Birthday Cake Candles (HackerRank) 
* Challenge #17: Breaking the Records (HackerRank) 
* Challenge #18: Bon Appétit (HackerRank) 
* Challenge #19: Cats and a Mouse (HackerRank) 
* Challenge #20: The Hurdle Race x(HackerRank) 

### Challenge #11
[Convert HTML Entities](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities)

```js
// let str="Dolce & Gabbana";
// console.log(str.replace(/&/gi, "&amp;"));

// let str="Hamburgers < Pizza < Tacos";
// console.log(str.replace(/</gi, "&lt;"));

// let str="Sixty > twelve";
// console.log(str.replace(/>/gi, "&gt;"));

// let str=`Stuff in "quotation marks"`;
// console.log(str.replace(/"/gi, "&guote;"));

// let str="Schindler's List"
// console.log(str.replace(/'/gi, "&apos;"));


function convertHTML(str) {
  
    if (str.includes("&")==true){
      str=str.replace(/&/gi, "&amp;");
    }

    if (str.includes("<")==true){
      str=str.replace(/</gi, "&lt;");
    }

    if (str.includes(">")==true){
      str =str.replace(/>/gi, "&gt;");
    }

    if (str.includes(`"`)==true){
      str=str.replace(/"/gi, "&quot;");
    }

    if (str.includes(`'`)==true){
      str=str.replace(/'/gi, "&apos;");
    }
  return str;
}

```
### [Leet code Two Sum coding challenge](https://leetcode.com/problems/two-sum/)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```js
 //Time Complexity: O(n^2)
 function twoSum(nums, target) {
   
   let output=[];

   if(nums.length<2){
     return output;
   }

   if(nums.length==2){
     if(nums[0]+nums[1]==target){
       output.push(0,1);
       return output;
     }
   }

   for(let i=0; i<nums.length; i++){

     for(let j=0; j<nums.length; j++){

       if(nums[i]!==nums[j]){
         let result=nums[i]+nums[j];
         if(result==target){
           output.push(i,j);
           return output;
         }
         //console.log(j, nums[j]);
       }
       
     }
   }
   return output;
}

//console.log(twoSum([1,4,5], 6));
//console.log(twoSum([2,7,11,15],9));
//console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
```

### Challenge #12
* [Sum All Primes](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

```js
//Time Complexity: O(n^2)
//Time Complexity: O(n^2)
function sumPrimes(num){
  
  //let prime=[];
  let result=0;

  for(let i=2; i<=num; i++){
    // if(isPrime(i)){
    //   prime.push(i);
    // }
    let isPrime=true;
    for(let j=2; j<i/2; j++){
      if (i%j==0){
        isPrime=false;
      }
    }
    
    if(isPrime){
      //prime.push(i);
      result+=i;
    }
    
  }
  return result;
}
//console.log(sumPrimes(10));
console.log(sumPrimes(977));

//function to check if a number is prime or not.
function isPrime(number){
  
  for(let i=2; i<number; i++){
    //console.log(number%i);
    if (number%i==0){
      return false;
    }
  }
  return true;
}
function getPrimes(number){
  
  let prime=[];
  for(let i=2; i<number; i++){
    
    let isPrime=true;
    for(let j=2; j<i/2; j++){
      if (i%j==0){
        isPrime=false;
      }
      console.log(i,j,i%j);
    }
    if(isPrime){
      prime.push(i);
    }
  }
  return prime;
}

//Time Complexity: O(n^2)
//https://dev.to/atebarhaider/sieve-of-eratosthenes-algorithm-4ol
function primeSieve(num){

  let prime=[];
  for(let i=2; i<=num;i++){
    prime.push(i);
  }
  //console.log(prime, prime.length);
  let p=2;
  while( p*p <= num ){

    for(let i=0; i<prime.length;i++){

      let cn=prime[i];
      //console.log(p, cn);
      if(cn%p==0 && cn!=p){
        prime[i]=0;
      }
    }
    //console.log(p, prime);
    p++;
  }
   let res=prime.filter(x=>x>0);
}

```

### Maps vs Set which one should you pick?
[choosing-your-data-structure](https://blog.logrocket.com/javascript-maps-vs-sets-choosing-your-data-structure)

### Challenge #13: A Very Big Sum (HackerRank) 
[A Very Big Sum](https://www.hackerrank.com/challenges/a-very-big-sum/problem)

[Before we solve Big Sum we must learn what a BigInt is?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
> A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.

```js
function aVeryBigSum(ar) {
    // Write your code here
  let result=0n;
  for(let i=0;i<ar.length; i++){
    result+=BigInt(ar[i]);
  }
  return result;
}
```

### Challenge #14: Plus Minus (HackerRank) 
[Plus Minus](https://www.hackerrank.com/challenges/plus-minus/problem)

```js
function plusMinus(arr) {
    // Write your code here
  let positive=0;
  let negative=0;
  let zero=0;
  let acount=arr.length;
  
  for (let i = 0; i < acount; i++) {

    if (arr[i]>0){
      positive++;
      
    }else if(arr[i]<0){
      negative++;
      
    }else{
      zero++;
    }
  }
  
  //console.log(positive,negative,zero);
  let p=(positive/acount);
  let n=(negative/acount);
  let z=(zero/acount);
  //console.log(p+n+z);
  console.log(p.toFixed(6));
  console.log(n.toFixed(6));
  console.log(z.toFixed(6));
}
```

### Challenge #15: Staircase (HackerRank) 
[Staircase](https://www.hackerrank.com/challenges/staircase/problem)
```js
//Time Complexity: O(n)
function staircase(n) {
    // Write your code here
  let stair="#";
  
  for (let index = 1; index <= n; index++) {
    console.log(stair.repeat(index).padStart(n,' '));
  }
}

// let stair="#";
// console.log(stair.repeat(1).padStart(6, ' '));
// console.log(stair.repeat(2).padStart(6, ' '));
// console.log(stair.repeat(3).padStart(6, ' '));
// console.log(stair.repeat(4).padStart(6, ' '));
// console.log(stair.repeat(5).padStart(6, ' '));
// console.log(stair.repeat(6).padStart(6, ' '));
console.log(staircase(4));
```
* [String/padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)


### Challenge #16: Birthday Cake Candles (HackerRank) 
[Birthday Cake Candles](https://www.hackerrank.com/challenges/birthday-cake-candles/problem)
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

#### Example
```js
let candles = [4,4,1,3];
```
The maximum height candles are  units high. There are  of them, so return .

* [HashMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```js
/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

//Time Complexity: O(n)
function birthdayCakeCandles(candles) {
  
  // Write your code here
  let max=0;
  let hashmap = new Map();
  //console.log(typeof max, typeof hashmap);

  for (let i = 0; i < candles.length; i++) {

    let c=candles[i];
    if(c>max){
      max=c;
    }
    if(hashmap.has(c)){
      let ev=hashmap.get(c);
      ev=ev+1;
      hashmap.set(c,ev); //updating existing value
    }else{
      hashmap.set(c,1);
    }
  }
  return hashmap.get(max);
}

// let cc=new Map();
// cc.set(4,1);
// console.log(cc);
// cc.set(4,2);
// console.log(cc);
// console.log(cc.has(4));
// console.log(cc.get(4));
let tallest=birthdayCakeCandles([4,4,1,3]);
console.log(tallest);
```

### Challenge #17: Breaking the Records (HackerRank) 
[Breaking the Records](https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem)

```js
function breakingRecords(scores) {
  
  // Write your code here
  let min=scores[0], max=scores[0], minc=0, maxc=0;
  let arr=[];

  for (let i = 0; i < scores.length; i++) {

    let score=scores[i];
    if(score<min){
      min=score;
      minc++;
    }
    if (score>max){
      max=score;
      maxc++;
    }
  
  }
  arr=[maxc,minc];
  return arr;
}
//console.log(breakingRecords([12,24,10,24]));
//console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
```

### Challenge #18: Bon Appétit (HackerRank)
bonAppetit [Bill Division](https://www.hackerrank.com/challenges/bon-appetit/problem) 

```js
function bonAppetit(bill, k, b) {
  
  // Write your code here
  let dont=bill[k]/2;
  let result;
  let sum=0;

  for(let i=0; i<bill.length; i++){
   sum+=bill[i];  
  }

  let share=sum/2; 
  let anasbill = share-dont;
  let refund= b-anasbill;
  result=refund;

  if(refund===0){
    result="Bon Appetit";
  }
  console.log(result);
}

bonAppetit([3, 10, 2, 9], 1, 12); //5

```

### Challenge #19: Cats and a Mouse (HackerRank) 
Started at 12:45 PM, Ended at: 01:05 PM, It tooks 20 minutes to solve.
[Cats and a Mouse](https://www.hackerrank.com/challenges/cats-and-a-mouse/problem)

```js
function catAndMouse(x, y, z) {
    
  let output="";

  let catA = Math.abs(z-x);
  let catB = Math.abs(z-y);

  if (catA>catB) {
    output="Cat B";
    
  }else if(catA<catB) {
    output="Cat A";
    
  }else{
    output="Mouse C";
  }
  return output;
}
//console.log(catAndMouse(2,5,4));
```

### Challenge #20: The Hurdle Race (HackerRank) 
this takes 16 minutes to solve 
[The Hurdle Race](https://www.hackerrank.com/challenges/the-hurdle-race/problem)

```js
function hurdleRace(k, height) {
  // Write your code here
  let dose=0;
  let max=0;

  for (let i = 0; i < height.length; i++) {
    let c=height[i];
    if (max<c){
      max=c;
    }
  }
  if(k<max){
    dose=max-k;
  }
  return dose;
}
//console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
console.log(hurdleRace(7,[2, 5, 4, 5, 2]));
```


# [Level 6 - JavaScript Advance Challenges](https://docs.google.com/document/d/1oE1T7hmnpX1-a2TDqgZWCKqY_tRCQ7w_6JwSNZcPvEc/edit?usp=sharing)

## Day 1
Please watch this [introductory video](https://www.loom.com/share/4505897045d24760aa541d42f183ec8b) before getting started

Please watch the intro video and review the resources if the problem includes them.

### [Challenge-1](https://www.hackerrank.com/domains/tutorials/10-days-of-javascript)

```js
function getGrade(score) {
    let grade;
    if (25 < score && score <=30){
      grade="A";
      
    }else if(20 < score && score <=25){
      grade="B";
      
    }else if(15 < score && score <=20){
      grade="C";
      
    }else if(10 < score && score <=15){
      grade="D";
      
    }else if(5 < score && score <=10){
      grade="E";
      
    }else if(0 <= score && score <=5){
      grade="F";
    }
    return grade;
}
console.log(getGrade(11));
```

### [Challenge#2, Simple Array Sum](https://www.hackerrank.com/challenges/simple-array-sum/problem)
```js
function simpleArraySum(ar) {
    // Write your code here
    let sum=0;
    for(let n of ar){
        sum +=n;
    }
    return sum;
}
```

### Learning Resource / Accumulator Pattern
* [Accumulator-pattern](https://education.launchcode.org/intro-to-professional-web-dev/chapters/loops/accumulator-pattern.html)
> accumulator: a register used to contain the results of an arithmetical or logical operation.
> The accumulator pattern comes up regularly in programming

### Reversing a String
While some programming languages have a string method that will reverse a given string, JavaScript does not. Let's see how we can write our own program that reverses a string using the accumulator pattern.
```js
let str="Hello";
let reverse="";

for( let i=0; i<str.length; i++){
  reverse=str[i]+reverse;
}

console.log(reverse); //olleH
```

### Summing an Array
Another common use of the accumulator pattern is to compute some value using each of the elements of an array.

## Day 2 / Problem #2
[Sherlock and Array](https://www.hackerrank.com/challenges/sherlock-and-array/problem)
```js
Time Complexity: O(n)
*/
function balancedSums(arr) {

    // Write your code here
    for(let i=0;i<arr.length; i++){

        let left=arr.slice(0, i);
        let right=arr.slice(i+1, arr.length);

        let lsum=sum(left);//0
        // for(let j=0;j<left.length; j++){
        //     lsum+=left[j];
        // }

        let rsum=sum(right);
        //for(let j=0;j<right.length; j++){
            //rsum+=right[j];
        //}

        //console.log(i, arr[i], lsum, rsum);
        if(lsum>rsum){
            return "NO";
        }

        //console.log('>',p,left, arr[i], right);
        if(lsum===rsum){
            return "YES";
        }
    }
    return "NO";
}

//efficient solution
//Time Complexity: O(n)
function balanceSumsA(arr){

 let sum = arr.reduce( (acc, val) => acc+val);
 //console.log('startInitial',sum);

 let leftSum=0;
 for(let i=0; i < arr.length; i++){
    
    sum -= arr[i];
    console.log(i, arr[i], sum, leftSum);
    if(sum===leftSum){
        return "YES";
    }
    leftSum += arr[i];
    //console.log(i,arr[i], sum, leftSum);
 }
 return "NO";
}

let bigstr="1822 2612 1573 2578 2552 1863 970 959 1296 1379 1801 2613 1089 1572 2466 1482 1813 1538 1504 2217 1706 1273 1464 2200 1224 1599 1792 1809 983 1717 1797 2050 1533 2268 2300 2469 2343 1554 2764 2758 1680 2326 2433 1045 1890 1484 1285 1176 2503 2543 990 2104 1145 2390 1536 2032 1230 2529 1953 2640 2621 2115 1015 1134 1109 2509 954 1632 1465 2243 2418 1235 1953 1729 1575 1453 2593 2342 1093 1761 2203 2501 998 2279 1923 2750 1638 2176 2491 2014 1344 2342 2178 2696 2068 2620 2556 1686 1123 1966 1140 1077 1327 1539 2789 1928 2184 2620 2453 2517 1647 1830 1039 1512 1727 1332 1196 1249 2252 2444 1708 1820 2671 2562 1835 2235 2227 2503 2079 2527 1046 2535 2457 1140 2453 2060 1641 1083 941 939 2465 2055 2796 930 2087 2596 1276 2258 1927 1457 1615 1863 2405 2559 2148 2764 2416 1441 1343 2413 1624 1915 2068 1191 2044 2319 1321 2533 2183 1890 1854 1144 2315 1922 2543 1111 2193 1520 1123 2777 1070 2629 1098 1784 926 1355 2777 1166 1399 1876 1200 1301 2123 1995 2631 1201 1522 1541 1466 2199 2357 2059 2651 2483 2025 2258 1017 2683 1308 2706 1524 923 2518 1716 2399 1993 2379 2623 974 1845 2539 2672 2562 2808 2186 982 1716 1753 2347 1541 1232 2711 1572 2640 1164 1145 1083 2399 1246 2522 2483 2264 2220 1580 1874 1431 2592 2694 2277 1066 2495 1763 1407 1638 1846 2637 1193 1462 2341 1869 2170 2695 2083 2411 1622 2173 2618 1588 2323 2297 2804 1339 1559 1683 2088 1402 1115 2780 2197 2271 1407 2732 2629 1151 1179 2788 1716 1766 2223 2608 1840 1733 1951 2661 1668 1113 2188 1194 1019 2352 1799 2199 2047 1340 2200 2289 1744 2509 1321 1827 1807 1325 2173 2727 2480 988 1057 1081 2131 1443 1359 2577 1190 2505 1598 1707 1293 1120 2179 2493 1861 2744 1035 2369 2522 2504 1203 1422 1452 2047 989 957 1830 1520 2514 1115 1500 2611 2581 2574 1385 1142 1985 2050 1502 2465 1794 2773 2291 2792 2608 1952 2243 922 1210 1678 2218 1559 1667 1872 1866 2175 1826 1728 1547 2241 2626 1679 2370 2025 1875 2279 1432 2450 2744 2273 1087 2041 1079 2479 1274 1023 1976 1962 2250 1578 2381 1520 1211 983 2779 1647 1299 1955 1899 2216 2530 1004 1318 227 1489 1674 1829 1569 1270 936 1117 824 1570 818 667 1807 928 1555 1264 1087 1526 823 1949 1962 1178 1364 1098 709 1223 1633 1832 1608 1910 1045 1833 1201 1602 678 1632 1807 1037 1212 1310 1762 1843 796 1502 1171 887 868 1810 1259 1747 1927 751 881 1809 1027 1567 1779 1057 915 1307 1194 880 1271 1742 1579 1034 1165 1512 1899 1613 1310 1785 1909 686 1102 1756 1951 1177 1216 1917 1639 1311 1785 750 1206 1426 1484 1066 1209 1868 1672 1946 970 1530 1821 1204 1865 1535 1414 1193 1741 756 1882 1052 1219 850 975 1092 1283 1860 714 913 1744 777 1547 1121 1757 858 1415 1046 1806 1878 1822 1226 749 1122 1593 827 1379 1716 1421 1152 1128 825 1539 818 1012 1904 1075 1399 914 1227 1243 1569 1360 1073 687 994 981 1852 1922 1361 1300 783 790 1471 1329 678 835 1341 951 889 1409 1102 1494 1325 1775 1793 1906 935 1804 951 1584 933 1966 1864 1655 1288 1096 1866 1244 1397 1254 1080 1963 957 1912 1167 1061 1264 1803 837 1676 1873 1125 1041 1807 1877 1191 737 1860 1486 1749 1604 995 1334 1104 1195 681 1144 1238 1167 1440 1176 1190 1871 1538 843 1210 815 1185 737 1339 1724 1735 1530 910 844 962 1068 832 1010 1868 1076 1775 1712 1664 1289 1858 1670 1965 1686 1962 983 1778 1445 1227 1593 1910 1918 1114 1043 1605 1417 1346 1554 1074 1901 1736 1360 936 1052 762 1067 1200 707 785 1510 1287 1742 1214 1021 1403 1628 870 987 1519 1820 1609 1057 1803 984 1053 1316 1323 1006 984 1809 1570 954 1596 698 1587 825 1915 1714 1730 1160 1325 1646 1789 1391 1870 1265 1145 953 1762 1635 1061 702 1355 715 1457 1860 1225 1673 913 996 857 1180 847 1102 816 1828 1866 797 1911 1961 1575 880 822 1266 663 1267 1213 1880 807 831 902 1114 706 1274 1580 786 1840 1808 844 949 1951 1929 1429 973 1957 1727 1573 846 1197 897 756 992 1229 1159 1613 1548 1423 1250 1040 704 898 1767 832 1726 865 903 1152 1613 1367 1016 765 763 1468 1136 1326 1407 667 1231 968 1604 1445 1845 1439 1673 770 1846 1345 1173 1068 1823 1534 1746 980 1024 1700 1633 1030 881 1314 1075 1816 1537 1225 710 933 1310 1200 796 940 1450 1898 1859 1881 1318 1175 1590 1093 1409 1582 1757 1963 1093 1272 1304 1718 1206 699 1781 1076 1140 1520 1704 1409 1002 1384 802 1681 1038 1737 855 899 1547 1542 984 1386 1633 1549 875 1539 806 1567 789 1370 1387 1013 697 1780 1065 1667 1542 1509 1450 1178 905 1088 1345 1098 1397 913 931 862 1788 1392 1426 1550 1336 1375 1242 1315 1073 1350 1006 1463 992 1020 871 1561 936 985 1054 899 1887 1394 1286 1288 925 755 1000 1028 813 1409 904 1848 1133 1081 1429 1928 1615 1337 1386 1039 1855 1157 977 1296 976 975 1337 1431 1614 1287 1310 1587 808 684 915 1142 1575 1127 1424 1491 1941 1786 706 1508 880 1007 1475 1799 868 1458 1659 1966 680 1098 1680 1316 1711 1624 1264 1643 946 810 1421 1453 993 866 1533 963 874 1452 820 1325 1577 1250 1929 1560 1061 1498 911 935 837 924 1201 1482 1688 1254 695 1921 937 748 772 1514 727";
const arr = bigstr.split(' ').map(arrTemp => parseInt(arrTemp, 10));
console.log(balanceSumsA([5,7,6,4,3,2,3]));
```

Learning Resource
* [Array reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
  

### Day 2 / Problem #2 [Count Objects](https://www.hackerrank.com/challenges/js10-count-objects/problem)

```js
function getCount(objects) {

  let count=0;
  let size=objects.length;  
  //console.log(size);
  for (let i = 0; i < size; i++) {
    //console.log(objects[i].x,objects[i]["x"]);
    if(objects[i].x===objects[i].y){
      count++;
    }
  }
  return count;
}
```

### Day 2 Problem #4 Missing Numbers
* [Missing Numbers](https://www.hackerrank.com/challenges/missing-numbers/problem)
* [Learning Resource-JavaScript Object Entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

```js
function missingNumbers(arr, brr) {
  // Write your code here
  let hash={};

  for (let i = 0; i < arr.length; i++) {
    let key=arr[i];
    hash[key]=0;
  }
  //console.log(hash);
  
  for (let i = 0; i < arr.length; i++) {
    let key=arr[i];
    hash[key] += 1;
  }
  //console.log(hash);
  
    for (let i = 0; i < brr.length; i++) {
      let key=brr[i];
      hash[key] -= 1;
    }

  //Object.entries(hash)
  //Object.keys(hash)
  //console.log(typeof hash, typeof Object.entries(hash), typeof Object.keys(hash));
  let missing=[];
  for(let [key,val] of Object.entries(hash)){
    //console.log(key,val, typeof val);
    if(val!==0){
      missing.push(key);
    }
  }
  return missing;
}
let arr=[203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr= [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
console.log(missingNumbers(arr, brr));
```

### Day 2 Unguided challenge
* [Gemstones](https://www.hackerrank.com/challenges/gem-stones/problem)

```js
function gemstones(arr) {
  // Write your code here
 let gemstone=0;
 let mhash={};
 //  for (let i = 97; i < 124; i++) {
 //    var str =String.fromCharCode(i);
 //    //console.log(str);
 //    hash[str]=0;
 //  }
  //console.log(hash);
  
  for (let i = 0; i < arr.length; i++) {
    let hash={};
    let item=arr[i];
    let minerals=item.split('');
    for(let m of minerals){
      if(hash[m]===undefined){
        hash[m] = 1;
      }else{
         hash[m] += 1;
      }
    }
    mhash[item]=hash;
    //console.log(item, hash);
  }
  
  //console.log(mhash);
  let commons=[];
  let ncommons=[];

  let citem=mhash[arr[0]];
  //console.log(arr[0], mhash[arr[0]]);

  for(let [okey,oval] of Object.entries(mhash)){
    
    //console.log(okey,oval, Object.keys(citem));
    let akeys=Object.keys(citem);
    //console.log(akeys,akeys[1],oval);

    for(let v of Object.keys(citem)){
      //console.log(typeof v);
      if (v in oval){
        //console.log(v,"inside",okey, oval);
      }else{
        //console.log(v,"NotInside",okey, oval);
        ncommons.push(v);
      }
    }
    
  }

  //find common
  for(let v of Object.keys(citem)){
    //console.log(v, typeof v, ncommons.includes(v));
    if(ncommons.includes(v)==false){
      commons.push(v);
      gemstone++;
    }
    
  }
  //console.log(commons);
  return gemstone;
}

// let arr=['abc','abc','bc'];
// console.log(gemstones(arr));
let arr=['abcdde', 'baccd', 'eeabg'];
console.log(gemstones(arr));
```

### Day 3 challenge
* [sum-of-all-odd-length-subarrays](https://leetcode.com/problems/sum-of-all-odd-length-subarrays)

```js
//Time Complexity: O(n^2)
function SumofAllOddLength(arr){

  let sum=0;
  let size=arr.length;
  //let sarr=[];
  let ola=[]; //odd length array
  for(let i=1; i<=size; i++){
    if(i%2!=0){
      ola.push(i);
    }
  }
  //console.log(ola); //1,3,5

  for(let length of ola){
    
    //console.log('>',length);
    // console.log(arr.slice(0,0+1));
    // console.log(arr.slice(1,1+1));
    // console.log(arr.slice(2,2+1));
    // console.log(arr.slice(3,3+1));
    // console.log(arr.slice(4,4+1));
    for (let i = 0; i < size; i++) {

      if(i+length<=size){
        //console.log(arr.slice(i,i+length));
        let suba=arr.slice(i,i+length);
        //sarr.push(arr.slice(i,i+length));
        for(let x of suba){
           sum+=x;
        }
      }
    }
  }
  //console.log(sarr);
  return sum;
}

```
