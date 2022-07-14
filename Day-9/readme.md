<h1 align="center"><b>Express Quiz</b></h1>


## What is NodeJS?

- Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine.

- It provides an event driven, non-blocking (asynchronous) I/O.

- Cross-platform runtime environment for building highly scalable server-side application using JavaScript.

- Node.js can be used to build different types of applications such as command line application, web application, real-time chat application, REST API server etc.

## What is V8 Engine?

- V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

- V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

- V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.

## What is Event Loop in NodeJS.

- The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

- Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.

- The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.

- The event loop allows us to use callbacks and promises.

- The event loop executes the tasks starting from the oldest first.

Example:-

```js

console.log("This is the first statement");
   
setTimeout(function(){
    console.log("This is the second statement");
}, 1000);
   
console.log("This is the third statement"); 

```
## What is the use of tsconfig.json file?

- The tsconfig. json file specifies the root files and the compiler options required to compile the project.

- By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.

- By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.

## What are the methods provided by `fs` module to manipulate files?

The fs module provides a lot of very useful functionality to access and interact with the file system.

| Methods | Description |
|----|-----|
|fs.access()|check if the file exists and Node.js can access it with its permissions|
|fs.appendFile()| append data to a file. If the file does not exist, it's created|
|fs.chmod()| change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()|
|fs.chown()| change the owner and group of a file specified by the filename passed. Related: fs.fchown(), fs.lchown()|
|fs.close()| close a file descriptor|
|fs.copyFile()| copies a file|
|fs.createReadStream()| create a readable file stream|
|fs.createWriteStream()| create a writable file stream|
|fs.link()| create a new hard link to a file|
|fs.mkdir()| create a new folder|
|fs.mkdtemp()| create a temporary directory|
|fs.open()| opens the file and returns a file descriptor to allow file manipulation|
|fs.readdir()| read the contents of a directory|
|fs.readFile()| read the content of a file. Related: fs.read()|
|fs.readlink()| read the value of a symbolic link|
|fs.realpath()| resolve relative file path pointers (., ..) to the full path|
|fs.rename()| rename a file or folder|
|fs.rmdir()| remove a folder|
|fs.stat()| returns the status of the file identified by the filename passed. Related: fs.fstat(), fs.lstat()|
| fs.symlink()| create a new symbolic link to a file|
| fs.truncate()| truncate to the specified length the file identified by the filename passed. Related: fs.ftruncate()|
| fs.unlink()| remove a file or a symbolic link|
| fs.unwatchFile()| stop watching for changes on a file|
| fs.utimes()| change the timestamp of the file identified by the filename passed. Related: fs.futimes()|
| fs.watchFile()| start watching for changes on a file. Related: fs.watch()|
| fs.writeFile()| write data to a file. Related: fs.write()|

## What is API?

- API stands for Application Programming Interface.

- APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.

- Or it is a software intermediary that allows two applications to talk to each other. 

- <b>Example:-</b> Every time you use an app like Facebook, send an instant message, or check the weather on your phone, you're using an API.

## What is JSON format?

- JSON stands for JavaScript Object Notation. 
- JSON is a lightweight format for storing and transporting data. 
- It is often used when data is sent from a server to a web page. 
- It is "self-describing" and easy to understand. 

* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language. 

Example:-
```json
{
"employees":[
  {"firstName":"Saurav", "lastName":"Kumar"},
  {"firstName":"Mukul", "lastName":"Singh"},
  {"firstName":"Anmol", "lastName":"Raj"}
]
}
```

## Why we use JSON format for API?

- JSON is nothing more than the data structure part of the JavaScript programming language. That means by its very definition, it is a perfect fit to represent JavaScript objects.

- JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.

- With the goal being to increase productivity and efficiency, JSON API has been touted for its efficient caching features that can eliminate superfluous server requests.

## What is a Framework?

- A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.

- In general, a framework is a real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful.

## How an HTTP Communication works?

- HTTP gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers.

- Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. 

- Client devices send requests to servers for the resources needed to load a web page; the servers send responses back to the client to fulfill the requests.

- HTTP clients generally use Transmission Control Protocol (TCP) connections to communicate with servers.

## What is Middleware in ExpressJS?

- Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.

- Middleware gets executed after the server receives the request and before the controller actions send the response. 

- Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response.

- An Express-based application is a series of middleware function calls.

### Advantages of using middleware:-

- Middleware can process request objects multiple times before the server works for that request.

- Middleware can be used to add logging and authentication functionality.

- Middleware improves client-side rendering performance.

- Middleware is used for setting some specific HTTP headers.

- Middleware helps for Optimization and better performance.


----------------------------------------
<h1 align="center"><b>Thank you</b></h1>
