export default [
    {
        question: 'What is the difference between stopPropagation and stopImmediatePropagation?',
        answer: `The <code>stopPropagation</code> method is available in an event parameter object. When called in an event handler, it stops the bubbling process. <br> StopImmediatePropagation stops other event handlers on the element from being executed and prevents the event from bubbling up. So, if we want to prevent other handlers on the element from being invoked, we should use stopImmediatePropagation.`,
    },
    {
        question: 'What data types exist in JS?',
        answer: `<strong>The set of types in the JavaScript language consists of primitive values and objects.</strong>
        <ul>
            <li>
            Primitive values (immutable datum represented directly at the lowest level of the language)
                <ul>
                    <li>Boolean</li>
                    <li>Null</li>
                    <li>Undefined</li>
                    <li>Number</li>
                    <li>BigInt</li>
                    <li>String</li>
                    <li>Symbol</li>
                </ul>
            </li>           
            <li>Objects (collections of properties)</li>
        </ul>`,
    },
    {
        question: 'What does preventDefault method?',
        answer: `<strong>The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.</strong> For example, the default click action for <code>a</code> tag is to go to the link provided in its <code>href</code> attribute and this default action could be cancelled with <code>event.preventDefault()</code>. <br>The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once. Calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying <code>cancelable: true</code> has no effect.`,
    },
    {
        question: 'How you could cancel event listener on DOM element?',
        answer: `<code>element.removeEventListener()</code> does the trick`,
    },
    {
        question: 'What is the garbage collector in JS and how it works?',
        answer: `<strong>The main concept that garbage collection algorithms rely on is the concept of reference.</strong>Within the context of memory management, an object is said to reference another object if the former has access to the latter (either implicitly or explicitly). For instance, a JavaScript object has a reference to its prototype (implicit reference) and to its properties values (explicit reference). <br> In this context, the notion of an "object" is extended to something broader than regular JavaScript objects and also contain function scopes (or the global lexical scope).`,
        links: [
            'https://learn.javascript.ru/garbage-collection',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management',
        ],
    },
    {
        question: 'What is the difference between null and undefined?',
        answer: `<code>Undefined</code> means a variable has been declared but has not yet been assigned a value. <br><code>Null</code> is an assignment value. It can be assigned to a variable as a representation of no value.`,
        links: [
            'https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/',
            'https://stackabuse.com/javascript-check-if-variable-is-a-undefined-or-null/',
        ],
    },
    {
        question: 'Explain hoisting in Javascript',
        answer: `<strong>Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.</strong> This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting',
            'https://www.w3schools.com/js/js_hoisting.asp',
        ],
    },
    {
        question: 'What is the difference between “==“ and “===“ operators',
        answer: `The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.`,
        links: [
            'https://www.guru99.com/difference-equality-strict-operator-javascript.html',
        ],
    },
    {
        question: 'What is the difference between synchronous and asynchronous code in JavaScript?',
        answer: `<b>Synchronous</b> means each operation must wait for the previous one to complete.<br>
<b>Asynchronous</b> means an operation can occur while another operation is still being processed.<br>
In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as XMLHttpRequest or setTimeout) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.`,
        links: [],
    },
    {
        question: 'Contrast mutable and immutable values, and mutating vs non-mutating methods',
        answer: `The two terms can be contrasted as:
<ul>
<li>Mutable: subject to change</li>
<li>Immutable: cannot change</li>
</ul>

In JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.
<br>
All String.prototype methods do not have an effect on the original string and return a new string. On the other hand, while some methods of Array.prototype do not mutate the original array reference and produce a fresh array, some cause mutations.`,
        links: [
            'https://vtechguys.medium.com/javascript-array-methods-mutating-vs-non-mutating-8606d9b78c77',
            'https://betterprogramming.pub/to-mutate-or-not-to-mutate-javascript-array-methods-cheat-sheet-2a7f39c9ca65',
        ],
    },
    {
        question: 'What are truthy and falsy values in JavaScript?',
        answer: `A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to true or false when performing certain operations.
<br>
There are 6 falsy values in JavaScript. They are:
<ul>
<li>false</li>
<li>undefined</li>
<li>null</li>
<li>"" (empty string)</li>
<li>NaN</li>
<li>0 (both +0 and -0)</li>
</ul>
Every other value is considered truthy.
<br>
A value's truthiness can be examined by passing it into the Boolean function.`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Glossary/Truthy',
            'https://developer.mozilla.org/en-US/docs/Glossary/Falsy',
        ],
    },
    {
        question: 'What is the difference between the postfix i++ and prefix ++i increment operators?',
        answer: `Both increment the variable value by 1. The difference is what they evaluate to.<br>
The <b>postfix</b> increment operator evaluates to the value before it was incremented.<br>
The <b>prefix</b> increment operator evaluates to the value after it was incremented.`,
        links: [],
    },
    {
        question: 'What is short-circuit evaluation in JavaScript?',
        answer: `
Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.
<code class="d-block">true || false</code>
In the above sample using logical OR, JavaScript won't look at the second operand false, because the expression evaluates to true regardless. This is known as short-circuit evaluation.<br><br>
This also works for logical AND.<br>
<code class="d-block">false && true</code>
This means you can have an expression that throws an error if evaluated, and it won't cause issues.
`,
        links: [
            'https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c',
        ],
    },
    {
        question: 'What is the THIS keyword and how does it work?',
        answer: `The <code>this</code> keyword is an object that represents the context of an executing function. Regular functions can have their this value changed with the methods <code>call(), apply() and bind()</code>. Arrow functions implicitly bind this so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with <code>call()</code>.
<ul>
<li>In non-strict mode, global this is the global object (window in browsers), while in strict mode global this is undefined.</li>
<li>Function.prototype.call and Function.prototype.apply set the this context of an executing function as the first argument, with call accepting a variadic number of arguments thereafter, and apply accepting an array as the second argument which are fed to the function in a variadic manner.</li>
<li>Function.prototype.bind returns a new function that enforces the this context as the first argument which cannot be changed by other functions.
</li>
<li>If a function requires its this context to be changed based on how it is called, you must use the function keyword. Use arrow functions when you want this to be the surrounding (lexical) context.</li>
</ul>
`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        ],
    },
    {
        question: 'What is event delegation and why is it useful? Can you show an example of how to use it?',
        answer: `Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events "bubble" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.
DOM events provide useful information about the element that initiated the event via Event.target. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.
<br><br>
This provides two main benefits:
<ul>
<li>It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.</li>
<li>If elements are dynamically added to the parent, there is no need to register new event listeners for them.</li>
</ul>
`,
        links: [
            'https://davidwalsh.name/event-delegate',
        ],
    },
    {
        question: 'What are the differences between var, let, const and no keyword statements?',
        answer: `<ul>
<li>
<strong>No keyword</strong>
When no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (window in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.
</li>
<li>
<code class="d-block">var</code>
var was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.
</li>
<li>
<code class="d-block">let</code>
let was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.
</li>
<li>
<code class="d-block">const</code>
const was introduced in ES2015 and is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.
</li>
</ul>

Important:
<ul>
<li>All declarations are hoisted to the top of their scope.
</li>
<li>However, with let and const there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.
</li>
<li>Show a common issue with using var and how let can solve it, as well as a solution that keeps var.
</li>
<li>var should be avoided whenever possible and prefer const as the default declaration statement for all variables unless they will be reassigned later, then use let if so.
</li>
</ul>
`,
        links: [
            'https://wesbos.com/let-vs-const/',
        ],
    },

    {
        question: 'How can you avoid callback hells?',
        answer: `Refactoring the functions to return promises and using async/await is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be awaited and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion. There are lots of ways to solve the issue of callback hells:
<ul>
<li>Modularization: break callbacks into independent functions
</li>
<li>Use a control flow library, like async
</li>
<li>Use generators with Promises
</li>
<li>Use async/await (from v7 on)
</li>
</ul>
`,
        links: [
            'https://stackabuse.com/avoiding-callback-hell-in-node-js/',
            'https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8',
        ],
    },
    {
        question: 'What are Promises?',
        answer: `The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. Promises are chainable.
`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        ],
    },
    {
        question: 'What is the difference between the array methods map() and forEach()?',
        answer: `Both methods iterate through the elements of an <code>array.map()</code> maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, <code>forEach()</code> invokes the callback function for each element but does not return a new array. <code>forEach()</code> is generally used when causing a side effect on each iteration, whereas map() is a common functional programming technique.

<ul>
<li>Use <code>forEach()</code> if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
</li>
<li><code>map()</code> is the right choice to keep data immutable where each value of the original array is mapped to a new array.</li>
</ul>
`,
        links: [
            'https://codeburst.io/javascript-map-vs-foreach-f38111822c0f',
        ],
    },
    {
        question: 'Explain the difference between a static method and an instance method',
        answer: `Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.
`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
        ],
    },
    {
        question: 'What is a callback?',
        answer: `Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.
`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Glossary/Callback_function',
        ],
    },
    {
        question: 'What is the difference between a parameter and an argument?',
        answer: `Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.
<ul>
<li>arguments is an array-like object containing information about the arguments supplied to an invoked function.</li>
<li>myFunction.length describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).</li>
</ul>
`,
        links: [],
    },
    {
        question: 'How do you clone an object in JavaScript?',
        answer: `Using the object spread operator <code>...</code>, the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object. With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.
Other alternatives include:
<ul>
<li><code>JSON.parse(JSON.stringify(obj))</code> can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).
</li>
<li><code>Object.assign({}, obj)</code> is another alternative.</li>
<li><code>Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})</code> is another more verbose alternative that shows the concept in greater depth.</li>
</ul>
`,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign',
            'https://www.voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/',
        ],
    },
    {
        question: 'Are semicolons required in JavaScript?',
        answer: `Sometimes. Due to JavaScript's automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases. However, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:
        <ul>
        <li>The line starts with <code>[</code></li>
        <li>The line starts with <code>(</code></li>
</ul>
Also:
<ul>
<li>Semicolons are usually optional in JavaScript but have edge cases where they are required.</li>
<li>If you don't use semicolons, tools like Prettier will insert semicolons for you in the places where they are required on save in a text editor to prevent errors.
</li>
</ul>
`,
        links: [
        ],
    },
    {
        question: 'What are higher-order functions in JavaScript?',
        answer: `A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
        <ul>
        <li>The <code>.reduce()</code> method iterates through an array and returns a single value.</li>
        <li>The <code>.forEach()</code> method executes a callback function on each of the elements in an array in order.</li>
        <li>The <code>.filter()</code> method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.</li>
        <li>The <code>.map()</code> method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function. The original array does not get altered, and the returned array may contain different elements than the original array.</li>
</ul>
`,
        links: [
            'https://www.freecodecamp.org/news/higher-order-functions-in-javascript/',
        ],
    },
];


