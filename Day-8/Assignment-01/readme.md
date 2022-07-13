<h1 align="center"><b>Typescript Quiz (Basic Level - 1)</b></h1>

## What are the basic data types in TypeScript?

### Some of the basic data types in TypeScript are:-

- <b>Number</b>:- Like JavaScript, all the numbers in TypeScript are stored as floating-point values.

    ```ts
    let identifier: number = value;  
    ```
- <b>String</b>:- We will use the string data type to represents the text in TypeScript. 

    ```ts
    let identifier: string = " ";  
                Or   
    let identifier: string = ' '; 
    ```
- <b>Boolean</b>:- Boolean data type can have only two values. They are "true" and "false."

    ```ts
    let identifier: BooleanBoolean = Boolean value;  
    ```
- <b>Void</b>:- A void is a return type of the functions which do not return any type of value. 

    ```ts
    let unusable: void = undefined;  
    ```
- <b>Null</b>:- Null represents a variable whose value is undefined. Much like the void, it is not extremely useful on its own.

    ```ts
    let num: number = null;  
    let bool: boolean = null;   
    let str: string = null;  
    ```
- <b>Undefined</b>:- The Undefined primitive type denotes all uninitialized variables in TypeScript and JavaScript. It has only one value, which is undefined.

    ```ts
    let num: number = undefined;  
    let bool: boolean = undefined;  
    let str: string = undefined;  
    ```

- <b>Any Type</b>:- It is the "super type" of all data type in TypeScript. It is used to represents any JavaScript value.

    ```ts 
    let identifier: any = value;  
    ```

## What is Generic data type.

- Generic is used to create a component which can work with a variety of data type rather than a single one.

- It allows a way to create reusable components.

- It ensures that the program is flexible as well as scalable in the long term.

- TypeScript uses generics with the type variable <T> that denotes types.

Example:-

```ts
function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>( 100 );  

```
## What is type inferring in TS.

Typescript tries to infer the type if you do not specify one, by determining the type of the initial value assigned to it or based on its usage.

There are two ways types are inferred in Typescript. <b>One is explicit</b> and the other <b>one is implicit</b>

<b>Explicit Typing</b> is when we just declare the variable with the types.

```ts

let numVar: number;
let numbers: number[] = [1,2,3]

```

<b>In Implicit typing,</b> we do not declare the types. Typescript makes an attempt to deduce the type from its usage

```ts

let numVar=100;    // No Data type is specifed. The typescript will Infer the variable as number   
 
numVar = "Hello World";    //Error is thrown here
console.log(numVar); 

```





## What are the possible ways to define typing for functions.

There are multiple ways to define types for functions:

- <b>Method Signatures:</b>

    The method signature syntax is the most straight forward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

    ```ts

    interface Date {
    toString(): string;
    setTime(time: number): number;
    // ...
    }
    ```
- <b>Function Type Literals:</b>

    Another approach to specify the type of a function is through function type literals. They are commonly used in the signature of a higher-order function, or a function that accepts functions as parameters or returns a function:

    ```ts

    interface Array<T> {
    sort(compareFn?: (a: T, b: T) => number): this;
    // ...
    }

    ```

- <b>Object Type Literals With Call or Construct Signatures:</b>

    In JavaScript, functions are nothing but special objects that can be called. This fact is reflected in the syntax of object type literals. Or we can say that it is the same as the fact that functions in JavaScript are just special objects that can be called again and again.

    ```ts

    interface RegExpConstructor {
    // Call signatures
    (pattern: RegExp): RegExp;
    (pattern: string, flags?: string): RegExp;

    // ...
    }

    ```

## How to define Generic type for Classes.

Generic classes have a generic type parameter list in angle brackets (<>) after the name of the class. A generic class can have generic fields (member variables) or methods.

```ts
class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Saurav");
kvp1.display(); //Output: Key = 1, Val = Saurav 

let kvp2 = new KayValuePair<string, string>();
kvp2.SetKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill

```
--------------------------------
<h1 align="center"><b>Program</b></h1>

Define the types in typescript for the given following JavaScript code.

Todo:

- Define type/interface for a single Todo object.
- Define type for each function.
- Do not use `any` (TS Data Type) type of typescript.

Code:

```ts
var todos = [];
function add(name, description) {
 return todos.push({
 name: name,
 description: description,
 done: false
 });
}
function remove(index) {
 return todos.splice(index, 1);
}
function list() {
 todos.forEach(function(todo, index) {
 console.log(index + " - " + todo.name);
 });
}
function update(index, name, description) {
 todos[index].name = name;
 todos[index].description = description;
 return todos[index];
}

```

<b> Solution:- </b>

```ts
class var={
   name: string,
   description: string,
   done: boolean
}
var todos:var[] = [];

function add(name:string, description:string):var[] {
    return todos.push({
    name: name,
    description: description,
    done: false
    });
}

function remove(index) {
    return todos.splice(index, 1);
}

function list():void {
    todos.forEach(function(todo, index) {
    console.log(index + " - " + todo.name);
    });
}

function update(index:number, name:string, description:string):var {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
}

```

--------------------------------
<h1 align="center"><b>Thank you</b></h1>
