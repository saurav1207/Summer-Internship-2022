<h1 align="center"><b>Javascript quiz (Basic Level - 2)</b></h1>

## Why do we use functions in JavaScript?

- JavaScript a function allows you to define a block of code, give it a name and then execute it as many times as you want.

- A function can be defined using function keyword and can be executed using - operator. A function can include one or more parameters.

## What is Function Invocation?

- The code inside a function is not executed when the function is defined.

- The code inside a function is executed when the function is invoked.

- It is common to use the term "call a function" instead of "invoke a function".

- It is also common to say "call upon a function", "start a function", or "execute a function".

Example:-

```js
function myFunction(a, - {
    return a * b;
}
myFunction(10, -;    // Will return 20

```

## Does a function behave like an object in Javascript? Prove it by an example.

In JavaScript, functions are called "function objects" because they are objects. Just like objects, functions have properties and methods. They can be stored in a variable or an array and be passed as arguments to other functions.

Example:-

```js
function negate(- {
    return function (- {
        return !f(-;
    };
}

var isNumber = negate(isNa-;  // function object

console.log(isNumber(-;            // => true
console.log(isNumber(Na-;          // => false
console.log(isNumber("A-;          // => false

```

## What are Events in Javascript?

These are some javascript events:

- <b>onclick events :</b> This is a mouse event and provokes any logic defined if the user clicks on the element it is bound to.

- <b>onkeyup event :</b> This event is a keyboard event and executes instructions whenever a key is released after pressing.

- <b>onmouseover event :</b> This event corresponds to hovering the mouse pointer over the element and its children, to which it is bound to.

- <b>onmouseout event :</b> Whenever the mouse cursor leaves the element which handles a mouseout event, a function associated with it is executed.

- <b>onchange event :</b> This event detects the change in value of any element listing to this event.

- <b>onload event :</b> When an element is loaded completely, this event is evoked.

- <b>onfocus event :</b> An element listing to this event executes instructions whenever it receives focus.

- <b>onblur event :</b> This event is evoked when an element loses focus.

## What is a string?

- Strings are texts that help in holding data that can be represented.

- A JavaScript string stores a series of characters like “SauravKumar”. A string can be any text inside double or single quotes.

- String indexes start from 0. The first character is in position 0 and the second in 1 and the same follows.

```js
var name = "SauravKumar";
```

## What is an array? Is it static or dynamic in Javascript?

In JavaScript, the term "Dynamic Array" refers to a method that automatically changes the array's size. JavaScript is not type-dependent, so there is no static array. JavaScript directly allows arrays as dynamic only. We can add and remove elements based on index values.

Example :-

```js

var array=[6,7,8,9,10];

for (var i = 0; i < array.length; i++){
    document.write("Array element of index array["+i+"] is :"array[i]+"<br>");
}
```

## Difference between Map and Set?

- A Set is a collection dataset that needs to be composed of unique values, where a Map is when you have pairs of associated data when we map the keys to the value.

- Map and Set both have similar methods; these include .has(), .get(), .delete(), and .size().

- The difference is that a Map comes with a key/value pair, two dimensions. We can convert an array to set as well as a 2D array to map:

```js
let array = [1, 2, 3, 4];
const set1 = new Set(array);

let map = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
];
const map1 = new Map(map);
```

## Difference between Array and Map?

- The difference between an Array and a Map is that an Array is just a single collection of elements that can be of any datatype and any unique element can be accessed with an index which is numerical and starts from 0. Whereas, a Map is a collection of key - value pairs and any unique value can only be accessed with it's key which can be of any datatype.

- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

- The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

## What are array methods? List a few names?

- Array methods are different functions that we can call on an array to perform different tasks, like sorting the array or iterating through the items of the array.

- Some methods of an array are:-
  |Name|Description|  
  |----|-----|  
  |length|Sets or returns the number of elements in an array|
  |map()|Creates a new array with the result of calling a function for each array element|
  |pop()| Removes the last element of an array, and returns that element|
  |push()|Adds new elements to the end of an array, and returns the new length|
  |filter()|Creates a new array with every element in an array that pass a test|
  |sort()|Sorts the elements of an array|
  |reverse()|Reverses the order of the elements in an array|

## In how many ways can we traverse through an array in Javascript?

There are multiple ways one can iterate over an array in JavaScript. The most useful ones are mentioned below.

<b>Using for loop</b>

```js
array = [1, 2, 3, 4, 5, 6];
for (index = 0; index < array.length; index++) {
  console.log(array[index]);
}
```

<b>Using while loop</b>

```js
index = 0;
array = [1, 2, 3, 4, 5, 6];

while (index < array.length) {
  console.log(array[index]);
  index++;
}
```

<b>using forEach</b>

```js
index = 0;
array = [1, 2, 3, 4, 5, 6];

array.forEach(myFunction);
function myFunction(item, index) {
  console.log(item);
}
```

<b>Using map </b>

```js
index = 0;
array = [1, 2, 3, 4, 5, 6];

square = (x) => Math.pow(x, 2);
squares = array.map(square);
console.log(array);
console.log(squares);
```

<b>Using Reduce</b>

```js
array = [1, 2, 3, 4, 5, 6];

const helperSum = (acc, curr) => acc + curr;
sum = array.reduce(helperSum, 0);

console.log(array);
console.log(sum);
```
---------------------------------
<h1 align="center">Programs</h1>

## Reverse an array? Input: [1, 2, 3, 4, 5, 6]
```js
const array = [1, 2, 3, 4, 5, 6];
array.reverse();  // 6 5 4 3 2 1
```

## Explain the properties of the join array method function via program?

The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

```js 
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

```

## Show all the values of an array in a html webpage using DOM and forEach method?
```js
const array = [6,7,8,1]
array.forEach(item => document.getElementById("arrayValues").innerText += item)
```

## Merge to sets in javascript?

```js
const set1 = new Set(['one', 'two']);
const set2 = new Set(['three']);

const set3 = new Set([...set1, ...set2]);
console.log(set3); //  {'one', 'two', 'three'}

```
---------------------------
<h1 align="center"><b>Thank you</b></h1>

