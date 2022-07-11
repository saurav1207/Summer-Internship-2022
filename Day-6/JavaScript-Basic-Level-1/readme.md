<h1 align="center"><b>JavaScript Quiz (Basic Level-1)</b></h1>

## What is JavaScript?

-	JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. 

-	JavaScript can be used for Client-side developments as well as Server-side developments.

## What is the difference between between let and var?
|let|var|      
|---|---|
|let is block-scoped.|var is function scoped.|
|let does not allow to redeclare variables.|var allows to redeclare variables.|
|Hoisting does not occur in let.|Hoisting occurs in var.|

## Why do we prefer const over var?

`var` declarations can be function-locally or globally scoped. When a `var` variable is declared outside of a function, it has a global scope. This means that any variable declared outside of a function block using the `var` keyword is accessible throughout the entire window.

When a variable is declared inside a function, it has a function scope. This indicates that it is accessible and limited to that function.

Example:- 
```js
var greeter = "hey hi";
function newFunction() {
     var hello = "hello";
}
console.log(hello); // error: hello is not defined
```
`const` is block-scoped (meaning the variable you declare is available only within the block), much like variables declared using the let keyword. `const` can’t be re-declared or updated. The difference between `const` and `var` is that its value can’t be reassigned.

Example:-
```js
const  a  =  1
console.log(a);
a  =  3;   //<--- This line throws an error.  
console.log(b);
 ```

## What is the use of javascript in web browsers?

Making interactive web pages is possible with JavaScript, a text-based computer language used both on the client-side and server-side. JavaScript adds interactive aspects to online pages that keep users interested, whereas HTML and CSS are languages that give web pages structure and style.


## What are Objects?

An unordered collection of related data, of primitive or reference types, in the form of "key: value" pairs may be referred to as an object in JavaScript.

## What is an array and how is it different from an Object in Javascript?

- An array is a single variable that is used to store different elements. It is often used when we want to store a list of elements and access them with a single variable.

- Objects in Javascript refer to variables that can have multiple properties and methods, whereas an array is a collection of items that can be either primitive or object like.

Example:- Array
```js
var fruits = ["Apple", "Mango", "Banana"];
```
Example:- Object
```js
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

## What is a function?

Functions are a set of of organised instructions that correspond to a certain task or specific functionality a user wants to implement in their program to achieve a single desired outcome.

## How can we implement call by value and call by reference in Javascript?

### Call by Value :-

When a variable is passed as a parameter to a function, if any changes are made to the parameter, the original variable will remain unaffected. This is known as call by value and this is true for all values having a primitive data type.

Example :-
```js
let origin = 10;
function updateOriginal(originalVal){
    originalVal +=10;
    console.log(originalVal);
}
updateOriginal(original);
console.log(original);
```

### Call by reference :-

When a variable’s reference(address) and not its value is passed to a function’s parameter, any changes made to the parameter will update the original variable reference. This is known as call by reference and this is true for all values having a non-primitive data type.

Example :-
```js
let myObj = {
    value:10
}
function updateValue(objRef){
    objRef.value = 20;
}
updateValue(myobj);
console.log(myObj.value);
```

### What are the primitive data types in Javascript?

There are 7 primitive data types:-
- Boolean type
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type

## What is DOM?

The Document Object Model is a cross-platform and language-independent interface. It defines the logical structure of documents and the way a document is accessed and manipulated.


## Why do we need DOM?

DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic. The DOM views an HTML document as a tree of nodes.

-----------------------------
<h1 align="center"><b>Programs</b></h1>

### Average of array nums in Javascript?

```js
const array=[2, 3, 9, 0];

var sum = 0;
for (var number of arr)
{
    sum += number;
}
average = sum / arr.length;
console.log(average);
```
### Swap two numbers by reference?
```js
let a=1;
let b=2;
let temp;
console.log("Before Swapping a is ",a);
console.log("Before Swapping b is ",b);

temp = a;
a = b;
b = temp;
console.log("After Swapping a is ",a);
console.log("After Swapping b is ",b);
```

### Print the fibonacci sequence?
```js
function fibo(num) {
    var x = 0;
    var y = 1;
    var z;
    var i = 0;

    for (i = 2; i < num; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    return y;
  }
  
  var num = 7;
  result = fibo(num);
  
  console.log("The 7th term of the Fibonacci series is: ", result);
  ```

  ### Sort an array by both ascending and descending order?
  ```js
    const arr = new Array("apple","ball", "cow","donkey");

    arr.sort();
    console.log(arr);
    arr.reverse();
    console.log(arr);
  ```

  ### Show a variable value in an HTML webpage using DOM?
  ```js
    let name = "Saurav";
    document.write(name); 
  ```
  --------------------
<h1 align="center"><b>Thank you</b></h1> 
