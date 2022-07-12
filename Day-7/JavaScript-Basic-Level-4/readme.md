<h1 align="center"><b>Javascript quiz (Basic Level 4)</b></h1>


## What are anonymous functions in JavaScript?
- <b>Anonymous Function</b> is a function that does not have any name associated with it. 
- Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions.
- in JavaScript, we use only the function keyword without the function name.

- An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value.
- An anonymous function can also have multiple arguments, but only one expression.

Syntex:-
```js
function() {
    // Function Body
 }
```
Or
```js
( () => {
    // Function Body...
} )();
```
Example:-
```js
var greet = function () {
    console.log("Welcome Home!");
};
 
greet();
```
## Explain strict comparison and Abstract comparison in javascript?

The Abstract Equality Operator checks whether two operands are equal and returns true if equal, false otherwise.

Example:-

```js
console.log(1 == 1)
//This will print true since both values are equal.
```
The Strict Equality Operator checks whether two operands are equal and are of the same type.

Example:- 
```js
console.log(1 === "1")       
//This will print false since both have different datatypes.
```

## Difference b/w arrow functions and regular functions?

- Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.Since regular functions are constructible, they can be called using the ‘new’ keyword. 

- However, the arrow functions are only ‘callable’ and not constructible.
Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.

Example:- Regular function

```js
let x = function(){
    console.log(arguments);
};
new x =(1,2,3);
```

Example:- Arrow function
```js  
let x = ()=> {
    console.log(arguments);
};
new x(1,2,3);

```

## What is Hoisting in JavaScript?

In JavaScript, variable and function names can be used before declaring it. The JavaScript compiler moves all the declarations of variables and functions at the top so that there will not be any error. This is called hoisting.

Example:-
```js
x = 1;

alert('x = ' + x); // display x = 1

var x;
```

## JavaScript is a garbage collected programming language, explain how?

- When it comes to programming, Garbage Collection means cleaning the memory spaces which don’t contain useful data and then reallocating those cleared memory to some other data which is both active and useful.

- That is the basic process of Garbage Collection in pretty much all the programming languages in the world. Some programming languages needs explicit interference from the developer while some other languages do this automatically. 

- A low level programming language like C, requires the developer to free the memory by the use of methods such as malloc() and free() when the program no longer needs those variables or objects.

- It is a developer prerogative to free the memory and the ball is in the developer’s court to decide explicitly whether to free the memory or not. But this is not always the case.

- For a high level programming language like JavaScript, the memory management process is automated. The browser takes care of that thing for us.

## Explain Shallow copy vs Deep copy in Javascript?

- A shallow copy means that certain (sub-)values are still connected to the original variable.

- A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 

Example:- Shallow Copy

```js
var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("Employee=> ", employee);
var newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.

```

Example:- Deep Copy
```js
const lodash = require('lodash');
var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000,
	details: function () {
		return "Employee Name: "
			+ this.ename + "-->Salary: "
			+ this.salary;
	}
}
var deepCopy = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
	return "Employee ID: " + this.eid
		+ "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());

```

## What is Objec.freeze

- The Object.freeze() method freezes an object.
- A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
- In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

-------------------------------------------------------
<h1 align="center"><b>Programs</b></h1>

## Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

```js
function genrateRand(min1= -100,max1=0,min2=800,max2=900){
    let diff = max1-min1;
    let diff2 =max2-min2;
    var rand = Math.floor(Math.random()*(diff+1)+min1);
    var rand2 = Math.floor(Math.random()*(diff2+1)+min2);

    console.log(rand);
    console.log(rand2);
}
genrateRand();

```

-------------------------
<h1 align="center"><b>Thank you</b></h1>