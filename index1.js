//  CALL 

A call function refers to the action of invoking or executing a function in programming. When you call a 
function, you are telling the program to run the code defined inside that function.
Key Points:

    Function Definition: The part where the function's behavior is defined. It contains a block of code to 
    perform a specific task.

    Example:

    javascript

function greet() {
    console.log("Hello!");
}

Function Call: The part where the function is executed or invoked. You do this by writing the function's name 
followed by parentheses.

Example:

javascript

    greet(); // This will print "Hello!" to the console.

Detailed Explanation:

    When you call a function, you pass control to that function, meaning the program runs the code inside it.

    The function may take parameters (inputs) when called, and it may return a result after processing.

    Example with parameters:

    javascript

function add(a, b) {
    return a + b;
}

let result = add(5, 3);

let person={
    name:"Sravani",
    age:20
   }

function greet(msg){
    console.log(Hello ${this.name} ,${msg});
}

greet.call(person,"welocme");


//Apply

The apply() function in programming, especially in JavaScript, is a built-in method that allows you to call a 
function with a given this context and arguments provided as an array (or array-like object). It is primarily 
used to borrow methods from one object for use with another object.
Syntax:

javascript

function.apply(thisArg, [argsArray])

Parameters:

    thisArg: The value of this provided to the function when it is invoked.
    argsArray: An array or array-like object of arguments to pass to the function.

Key Features:

    Control over this: The apply() method lets you set the value of this inside the function, which determines the context (the object on which the function operates).
    Arguments as an array: It allows you to pass arguments as an array or array-like object.

Example:

javascript

function greet(language, punctuation) {
    console.log(this.name + " says " + language + punctuation);
}

const person = { name: "Misbha" };
greet.apply(person, ["Hello", "!"]); // Output: "Misbha says Hello!"

Here, the greet function is called with the this value set to the person object, and the arguments are passed as an array ["Hello", "!"].
Use Case:

apply() is useful when you want to call a function with different this contexts or when you want to pass an array of arguments dynamically.


// let person1={
//     name:"sraas"
// }
// function greeting(profession,age){
//     console.log(Hello,My name is ${this.name} iam ${age} yrs old and iam working as ${profession});
// }
// greeting.apply(person1,["software",14]);

// //Bind

The bind() function in JavaScript creates a new function that, when called, has its this context set to a specific value and, optionally, predefined arguments. This is useful when you want to create a copy of a function but with a fixed this value or fixed arguments.
Syntax:

javascript

function.bind(thisArg, [arg1, arg2, ...])

Parameters:

    thisArg: The value to which this should refer inside the bound function.
    arg1, arg2, ... (optional): Predefined arguments to pass when the function is called.

Key Features:

    Creates a new function: bind() doesn't execute the function immediately. Instead, it returns a new function with the this value and arguments you specify.
    Useful for later invocation: You can call the bound function later with or without additional arguments.

Example:

javascript

const person = {
    name: "Misbha",
    greet: function(greeting) {
        console.log(greeting + ", " + this.name);
    }
};

const greetMisbha = person.greet.bind(person, "Hello");
greetMisbha(); // Output: "Hello, Misbha"

In this example, person.greet.bind(person, "Hello") creates a new function called greetMisbha where the this value is bound to person and the greeting argument is fixed as "Hello".
Use Case:

    When you want to ensure a function always uses a specific this context.
    Partially applying arguments: You can preset some arguments and still allow further arguments to be added when the function is called later.

// let obj={
//     name:"sandeep"
// }
// function rayan(msg){
//     console.log(${this.name} is the brother of ${msg});
// }
// let mudhuvel= rayan.bind(obj);
// mudhuvel("durga"); -->


// prototypes

In JavaScript, prototypes are a powerful mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. This enables prototypal inheritance, a core feature of JavaScript's object-oriented capabilities.
Key Concepts:

    Prototype Object:
        Every JavaScript object has an internal property called [[Prototype]], which is a reference to another object (the prototype).
        You can access an object's prototype via Object.getPrototypeOf() or by using the __proto__ property.

    Prototypal Inheritance:
        Objects in JavaScript can inherit properties and methods from their prototypes. If a property or method is not found on the object itself, JavaScript looks for it in the prototype chain.

    Example:

    javascript

const animal = {
    eat: function() {
        console.log("Eating...");
    }
};

const dog = Object.create(animal);  // dog inherits from animal
dog.eat();  // Output: "Eating..."

Prototype Chain:

    If an object does not have a specific property or method, JavaScript will look for it in the object's prototype. If it's not found there, it will continue searching up the prototype chain until it either finds the property or reaches null.

Constructor Functions and Prototypes:

    When you create an object using a constructor function, the prototype property of the constructor is automatically assigned as the prototype of the created object.

Example:

javascript

    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function() {
        console.log("Hello, " + this.name);
    };

    const person1 = new Person("Misbha");
    person1.greet();  // Output: "Hello, Misbha"

    In this example, Person.prototype defines methods (like greet) that can be shared by all instances of Person.

    Prototype vs __proto__:
        prototype: A property of constructor functions that is used to define properties and methods to be inherited by instances.
        __proto__: A property of objects that points to the prototype object from which the object is inheriting.

Prototype in Practice:

javascript

function Car(brand) {
    this.brand = brand;
}

Car.prototype.drive = function() {
    console.log(this.brand + " is driving.");
};

const car1 = new Car("Toyota");
car1.drive(); // Output: "Toyota is driving."

console.log(car1.__proto__ === Car.prototype);  // true

Summary:

    Prototypes allow objects to share properties and methods.
    JavaScript uses prototypal inheritance, where objects can inherit from other objects.
    The prototype chain is used to look up properties and methods.
    You can define reusable methods on constructor functions' prototypes for all instances.


    // closures

    In JavaScript, a closure is a function that "remembers" the environment (or scope) in which it was created, even after that scope has been destroyed. This allows a function to access variables from its outer (enclosing) function scope, even after the outer function has finished execution.
Key Concept of Closures:

A closure gives a function access to the variables of its parent function, even after the parent function has returned. This is possible because of how JavaScript handles variable scope—inner functions retain access to the scope of outer functions in which they were defined.
How Closures Work:

When a function is defined inside another function, it has access to:

    Its own local variables.
    Variables in its outer function's scope.
    Global variables.

Even if the outer function finishes execution, the inner function (closure) still has access to the outer function's variables, since they are "closed over."
Example of a Closure:

javascript

function outerFunction() {
    let outerVar = "I'm from the outer function";

    function innerFunction() {
        console.log(outerVar);  // Can access outerVar even after outerFunction finishes
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc();  // Output: "I'm from the outer function"

In this example:

    outerFunction defines a variable outerVar.
    innerFunction is defined inside outerFunction, and it has access to outerVar.
    Even after outerFunction has completed, closureFunc (the returned innerFunction) still "remembers" the value of outerVar because it forms a closure.

Practical Use of Closures:

Closures are frequently used in scenarios like data encapsulation, callback functions, and function factories.
Example: Data Encapsulation (Simulating Private Variables)

javascript

function counter() {
    let count = 0;  // This variable is private to the returned function

    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment();  // Output: 1
increment();  // Output: 2

In this example:

    count is not directly accessible outside of counter().
    The inner function (closure) keeps track of the count variable.

Why Use Closures?

    Data Privacy: You can use closures to create private variables that cannot be accessed from the outside.
    Function Factories: Closures allow functions to "remember" the arguments they were initially called with.
    Event Handlers & Callbacks: Closures are commonly used in asynchronous programming, such as event handling and callbacks.

Summary:

    A closure is a function that retains access to its outer function's scope even after the outer function has returned.
    Closures are used to preserve data, encapsulate state, and create function factories.
    In JavaScript, closures enable functions to have persistent variables and private state.


    // strict

    In JavaScript, strict mode is a way to opt into a more restrictive variant of the language, helping you write more secure and error-free code. It was introduced in ECMAScript 5 (ES5) and can be applied to either an entire script or individual functions. When a function or script is in strict mode, certain actions that are normally allowed will throw errors, and some unsafe features of JavaScript are disabled.
Syntax:

Strict mode is invoked by placing the following directive at the top of a script or function:

javascript

"use strict";

Key Features of Strict Mode:

    Eliminates some silent errors:
        Strict mode turns certain previously ignored or silent errors into real errors that will be thrown.

    javascript

"use strict";
x = 10;  // Throws an error, since x is not declared with var, let, or const

Prevents use of undeclared variables:

    In strict mode, you must declare variables using let, const, or var. Using an undeclared variable will result in a ReferenceError.

Disallows duplicate parameter names:

    In normal JavaScript, a function can have duplicate parameter names, but in strict mode, this is prohibited.

javascript

"use strict";
function myFunction(a, a) {  // Throws a SyntaxError in strict mode
    console.log(a);
}

Disallows assignment to read-only properties:

    In strict mode, attempting to assign a value to a non-writable property throws an error.

javascript

"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9;  // Throws a TypeError in strict mode

Prevents this from defaulting to the global object:

    In non-strict mode, if you use this outside of any object, it will default to the global object (e.g., window in browsers). In strict mode, this remains undefined in such cases.

javascript

    "use strict";
    function myFunction() {
        console.log(this);  // In strict mode, this will be undefined
    }
    myFunction();

    Disallows use of certain keywords for future-proofing:
        Some keywords, like implements, interface, let, package, private, public, static, and yield, are reserved for future use, and using them in strict mode will cause errors.

Applying Strict Mode to Functions:

Strict mode can be applied to specific functions without affecting the entire script:

javascript

function myFunction() {
    "use strict";
    // Strict mode rules apply only in this function
}

Summary:

Strict mode in JavaScript enhances error detection, prevents unsafe operations, and eliminates certain problematic features. It is a tool for writing cleaner, more secure code by enforcing stricter syntax and runtime behavior.



// error handling function

In JavaScript, error handling functions are techniques and constructs used to manage and respond to errors that occur during the execution of code. These functions and mechanisms ensure that the program can handle errors gracefully without crashing or producing unexpected results.
Common Error Handling Methods:

    try...catch Statement:

        Purpose: The try...catch statement allows you to define a block of code to test for errors (inside the try block) and handle them (inside the catch block) if they occur.

        Syntax:

        javascript

try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
    console.error(error.message);
}

Example:

javascript

try {
    let result = 10 / 0;  // No error here, but consider cases like JSON parsing
    JSON.parse("{ invalid json }");
} catch (error) {
    console.error("An error occurred: ", error.message);
}

Optional finally block: The finally block is executed after the try and catch blocks, regardless of whether an error was thrown.

javascript

    try {
        // Code that might throw an error
    } catch (error) {
        // Handle the error
    } finally {
        // This block runs no matter what
        console.log("Cleanup code executed.");
    }

Custom Errors using throw:

    Purpose: You can manually create and throw errors using the throw keyword. This is useful for custom error messages or conditions.

    Syntax:

    javascript

throw new Error("Custom error message");

Example:

javascript

    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    try {
        let result = divide(10, 0);
    } catch (error) {
        console.error(error.message);  // Output: "Division by zero is not allowed"
    }

Error Object:

    In JavaScript, the Error object provides information about an error. You can use it to create and handle custom errors.

    Types of Error Objects:
        Error: Base error type.
        ReferenceError: Thrown when an invalid reference is used.
        SyntaxError: Thrown when there is a syntax issue in code.
        TypeError: Thrown when a value is not of the expected type.
        RangeError: Thrown when a number is outside the allowable range.
        URIError: Thrown when there’s an issue with encodeURI() or decodeURI().

    Example:

    javascript

    try {
        undefinedFunction();  // This will throw a ReferenceError
    } catch (error) {
        console.error(error.name);  // Output: ReferenceError
        console.error(error.message);  // Output: undefinedFunction is not defined
    }

Promise Error Handling with .catch():

    When working with asynchronous code using Promises, errors can be handled with .catch().

    Syntax:

    javascript

someAsyncFunction()
    .then(result => {
        // Do something with result
    })
    .catch(error => {
        // Handle the error from the Promise
        console.error(error);
    });

Example:

javascript

    let promise = new Promise((resolve, reject) => {
        let success = false;
        if (success) {
            resolve("Success");
        } else {
            reject(new Error("Operation failed"));
        }
    });

    promise
        .then(result => console.log(result))
        .catch(error => console.error(error.message));  // Output: "Operation failed"

async/await Error Handling with try...catch:

    When using async and await for asynchronous code, you can use try...catch to handle errors within async functions.
    Example:

    javascript

        async function fetchData() {
            try {
                let response = await fetch('https://example.com/api');
                let data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch data: ", error);
            }
        }

        fetchData();

Summary of Error Handling Functions:

    try...catch: Used to catch and handle errors in a controlled way.
    throw: Manually throw an error for custom conditions.
    Error object: Provides information about errors (e.g., Error, ReferenceError, TypeError).
    Promises and .catch(): Handles errors in asynchronous code with promises.
    async/await with try...catch: Manages errors in asynchronous code using modern syntax.

These mechanisms ensure that your code can anticipate and respond to errors gracefully without crashing the application.