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
];
