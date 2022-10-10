export default [
    {
        question: 'What is REST?',
        answer: `<strong>REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.</strong>
        Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like posts, users, comments, and a RESTful API exposes access to this data with:
        <br>
        An identifier for the resource. This is known as the endpoint or URL for the resource.
        The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.
        <br>
        Here is an example of the URL and HTTP method with a posts resource:
        <ul>
            <li>Reading: /posts/ => GET</li>
            <li>Creating: /posts/new => POST</li>
            <li>Updating: /posts/:id => PUT</li>
            <li>Destroying: /posts/:id => DELETE</li>
        </ul>`
        ,
        links: [
            'https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f',
        ],
    },
    {
        question: 'What is recursion and when is it useful?',
        answer: `Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.
 <br>
For example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply... we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.`
        ,
        links: [],
    },
    {
        question: 'What is the DOM?',
        answer: `The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.
        <ul>
        <li>The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.</li>
<li>The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the HEAD with a defer attribute, or inside a DOMContentLoaded event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.</li>
<li>document.getElementById() and document.querySelector() are common functions for selecting DOM nodes.</li>
<li>Setting the innerHTML property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.</li>
</ul>
        `
        ,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
        ],
    },
    {
        question: 'What is event-driven programming?',
        answer: `Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.
<br>
A common example of this is the pattern of elements listening to DOM events such as click and mouseenter, where a callback function is run when the event occurs.
        `
        ,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/Events',
            'https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d',
        ],
    },
    {
        question: 'What is the purpose of cache busting and how can you achieve it?',
        answer: `Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.
<br>
However, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.
<br>
Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.

A common technique to force the browser to re-download the file is to append a query string to the end of the file.

<strong>src="js/script.js" => src="js/script.js?v=2"</strong>
The browser considers it a different file but prevents the need to change the file name.
        `
        ,
        links: [
            'https://css-tricks.com/strategies-for-cache-busting-css/',
        ],
    },
    {
        question: 'What is the difference between lexical scoping and dynamic scoping?',
        answer: `Lexical scoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available.
<ul>
<li>Lexical scoping is also known as static scoping.</li>
<li>Lexical scoping in JavaScript allows for the concept of closures.</li>
<li>Most languages use lexical scoping because it tends to promote source code that is more easily understood.</li>
</ul>
        `
        ,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        ],
    },
    {
        question: 'What is functional programming?',
        answer: `Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.
        <ul>
        <li>Cleaner, more concise development experience</li>
        <li>Simple function composition</li>
        <li>Features of JavaScript that enable functional programming (.map, .reduce etc.)</li>
        <li>JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)</li>
</ul>
        `
        ,
        links: [
            'https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d',
            'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0',
        ],
    },
    {
        question: 'What is Big O Notation?',
        answer: `Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.
Algorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.
        `
        ,
        links: [
            'https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b',
        ],
    },
    {
        question: 'Explain the differences between imperative and declarative programming',
        answer: `These two types of programming can roughly be summarized as:
<ul>
<li>Imperative: how to achieve something</li>
<li>Declarative: what should be achieved</li>
</ul>
A common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The "how" is abstracted away by the browser.
<ul>
<li>Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.</li>
<li>Declarative programming is more terse and easier to process at a glance.
</li>
</ul>
        `
        ,
        links: [
            'https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2',
        ],
    },
    {
        question: 'What is memoization?',
        answer: `Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.
        <ul>
        <li>The above technique returns a unary function even if the function can take multiple arguments.</li>
        <li>The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.</li>
        <li>Memoization increases performance on subsequent function calls but still needs to do work on the first call.</li>
</ul>
        `
        ,
        links: [
            'https://www.sitepoint.com/implementing-memoization-in-javascript/',
        ],
    },
    {
        question: 'What is a pure function?',
        answer: `A pure function is a function that satisfies these two conditions:
<ul>
<li>Given the same input, the function returns the same output.</li>
<li>The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).</li>
</ul>
Pure functions can mutate local data within the function as long as it satisfies the two conditions above.<br>
<ul>
<li>Pure functions are easier to reason about due to their reliability.</li>
<li>All functions should be pure unless explicitly causing a side effect (i.e. setInnerHTML).</li>
<li>If a function does not return a value, it is an indication that it is causing side effects.</li>
</ul>
        `
        ,
        links: [
            'https://www.nicoespeon.com/en/2015/01/pure-functions-javascript/',
        ],
    },
    {
        question: 'What is the event loop in Node.js?',
        answer: `The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received. The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded
        `
        ,
        links: [
            'https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/',
        ],
    },
    {
        question: 'What is a cross-site scripting attack (XSS) and how do you prevent it?',
        answer: `XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.
For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a SCRIPT tag into the website that other users will execute against their knowledge.
<ul>
<li>The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.</li>
<li>The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.</li>
<li>The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.</li>
</ul>
Also:
<ul>
<li>On the client, using textContent instead of innerHTML prevents the browser from running the string through the HTML parser which would execute scripts in it.</li>
<li>On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script.</li>
</ul>
        `
        ,
        links: [
            'https://www.acunetix.com/websitesecurity/cross-site-scripting/',
        ],
    },
    {
        question: 'What is Reactive Programming?',
        answer: `Reactive programming is a declarative programming paradigm which deals with asynchronous data streams. Glenn Wadden first developed reactive programming in 1986 as a programming language in the Supervisory Control and Data Acquisition (SCADA) industry. Event buses or typical click events are called asynchronous event streams, used in reactive programming to observe and do some side effects. Reactive programming facilitates us to create data streams of anything, not just from click and hover events.
        `
        ,
        links: [
            'https://www.techtarget.com/searchapparchitecture/definition/reactive-programming',
        ],
    },
    {
        question: 'What is Redux?',
        answer: `Redux is an open-source JavaScript library which is used to manage the application state. It is most commonly used with libraries such as React, Angular, or RxJS for building user interfaces. Redux is inspired by Facebook's Flux architecture and also very similar to it. It was created by Dan Abramov and Andrew Clark.
        Redux follows the following three fundamental principles:
<ul>
<li>Single source of truth: It stores the state of your whole application in an object tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
</li>
<li>State is ready only: It emits an action that is the only way to change the state. It ensures and specifies that neither the views nor the network callbacks will ever write directly to the state.
</li>
<li>Changes are made with pure functions: We have to write pure reducers to specify how the state tree is transformed by actions. Reducers are simple pure functions that take the previous state and an action, and return the next state.
</li>
</ul>
        `
        ,
        links: [
            'https://redux.js.org/',
        ],
    },
    {
        question: 'What are SOLID principles?',
        answer: `The SOLID Principles are five principles of Object-Oriented class design. They are a set of rules and best practices to follow while designing a class structure. <br>They all serve the same purpose: <b>"To create understandable, readable, and testable code that many developers can collaboratively work on."</b><br>
Following the SOLID acronym, they are:
<ul>
<li>The Single Responsibility Principle</li>
<li>The Open-Closed Principle</li>
<li>The Liskov Substitution Principle</li>
<li>The Interface Segregation Principle</li>
<li>The Dependency Inversion Principle</li>
</ul>
        `
        ,
        links: [
            'https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/',
            'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
        ],
    },
];


