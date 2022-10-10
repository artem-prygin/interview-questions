export default [
    {
        question: 'What is RxJS? / What do you understand by RxJS?',
        answer: `RxJS is an acronym that full form is Reactive Extension for Javascript. It is a JavaScript library that uses observables to work with reactive programming and deals with asynchronous data calls, callbacks and event-based programs. RxJS has introduced the concept of "reactive programming" to the web. It implements a reactive extension for TypeScript and JavaScript.
<br>
RxJS works as a combination of the observer pattern, iterator pattern and functional programming.
<br>
RxJS is a library for reactive programming using Observables to make it easier to compose asynchronous or callback-based code. It is a standalone JavaScript library that gives access to programmers to the Observable.
<br>
RxJS can also be used with other JavaScript libraries and frameworks. JavaScript and TypeScript well support it.`,
        links: [
            'https://www.javatpoint.com/rxjs',
        ]
    },
    {
        question: 'What are the most outstanding features of RxJS?',
        answer: `<ul>
<li><code class="d-block">Observer</code>The Observer is an object with next(), error(), and complete() methods, which are called when we have to interact with the observable, i.e., the source interacts for an example button click, Http request, etc.
</li>
<li><code class="d-block">Observable</code>In RxJS, an observable function is used to create an observer and attaches it to the source where values are expected. For example, clicks, mouse events from a DOM element or an Http request, etc.
</li>
<li><code class="d-block">Subscription</code>The role of subscription comes in the scene when the observable is created. To execute the observable, we need to subscribe to it. It can also be used to cancel the execution.
</li>
<li><code class="d-block">Operators</code>Operators are a very important part of RxJS. An operator is a pure function that takes observable input and emits the result in the output form. Input and output both are observable.
</li>
<li><code class="d-block">Subject</code>A subject is observable that can multicast, i.e., talk to many observers. Suppose we have a button with an event listener. The function attached to the event using addlistener is called every time the user clicks on the button. Similar functionality goes for the subject too.
</li>
<li><code class="d-block">Schedulers</code>A scheduler controls the execution of when the subscription has to start and be notified,
</li>
</ul>
`,
        links: [
        ]
    },

    {
        question: 'What is the difference between switchMap, concatMap and mergeMap operators?',
        answer: `<ul>
                    <li><code>SwitchMap</code> is a combination of switchAll and map. SwitchAll cancels the previous subscription and subscribes to the new one. For our scenario where we want to do an API call for each item in the array of the ‘outer’ Observable, switchMap does not work well as it will cancel the first 3 subscriptions and only deals with the last one. This means we will get only one result. </li>
                    <li>Unlike switchMap, that unsubscribes from the current Observable if a new Observable comes in, <code>concatMap</code> will not subscribe to the next Observable until the current one completes. The benefit of this is that the order in which the Observables are emitting is maintained
                    </li>
                    <li><code>MergeMap</code> essentially is a combination of mergeAll and map. MergeAll takes care of subscribing to the ‘inner’ Observable so that we no longer have to Subscribe two times as mergeAll merges the value of the ‘inner’ Observable into the ‘outer’ Observable.</li>
                </ul>`,
        links: [
            'https://vdsabev.medium.com/the-simple-difference-between-rxjs-switchmap-and-mergemap-397c311552a5',
            'https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff',
        ]
    },
    {
        question: 'What is the difference between Subject and BehaviorSubject?',
        answer: `<strong>Both Subject and BehaviorSubject are Observables</strong>
<ul>
<li>If you subscribe to a <code>Subject</code>, we won't get current value or initial value. But when you subscribe to a <code>BehaviorSubject</code>, you will get the current or initial value.</li>
<li>For <code>Subject</code>, we don't need to initial a value. But whenever we declare <code>BehaviorSubject</code> we need to initialize a default value.</li>
<li>In <code>Subject</code>, the subscribers will only receive the upcoming value. In <code>BehaviorSubject</code>, the subscribers will receive the previous value and also upcoming value.</li>
</ul>`,
        links: [
            'https://dev.to/revanth_oleti/difference-between-subject-and-behaviorsubject-9g6',
            'https://upmostly.com/angular/subject-vs-replaysubject-vs-behaviorsubject',
        ]
    },
    {
        question: 'What are the biggest advantages and disadvantages of using RxJS?',
        answer: `<strong>Advantages of using RxJS:</strong>
<ul>
<li>RxJS can be used with other Javascript libraries and frameworks. It is supported by javascript and also with typescript. Few examples are Angular, ReactJS, Vuejs, nodejs etc.
</li>
<li>RxJS is an awesome library when it comes to the handling of async tasks. RxJS uses observables to work with reactive programming that deals with asynchronous data calls, callbacks and event-based programs.
</li>
<li>RxJS offers a huge collection of operators in mathematical, transformation, filtering, utility, conditional, error handling, join categories that makes life easy when used with reactive programming.
</li>
</ul>
<strong>Disadvantages of using RxJS:</strong>
<ul>
<li>Debugging the code with observables is a little difficult.</li>
<li>As you start to use Observables, you can end up with your full code wrapped under the observables.</li>
</ul>`,
        links: [
        ]
    },
    {
        question: 'What do you understand by RxJS Stream?',
        answer: `An RxJS stream is a sequence of ongoing events ordered in time. In other words we can say that a stream is a sequence of data elements made available over time. A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches. It is called stream because it acts as a data that is continuous and not really having an end, unless you explicitly define an end.

A stream can emit three different things:
<ul>
<li>a value (of some type)</li>
<li>an error</li>
<li>a "completed" signal</li>
</ul>
`,
        links: [
        ]
    },
    {
        question: 'What are Operators in RxJS? What are the different types of operators used in RxJS?',
        answer: `Operators are very important part of RxJS. An RxJS operator is a pure function that takes an observable as input and provides the output also in the form of observable. We have to use a pipe() method to work with operators.

Following is a list of most used operators in RxJS:
<ul>
<li>Creation Operator</li>
<li>Mathematical Operator</li>
<li>Join Operator</li>
<li>Transformation Operator</li>
<li>Filtering Operator</li>
<li>Utility Operator</li>
<li>Conditional Operator</li>
<li>Multicasting Operator</li>
<li>Error handling Operator</li>
</ul>
Further, these operators are sub-divided in other types of operators.
`,
        links: [
            'https://www.javatpoint.com/rxjs-operators',
        ]
    },
    {
        question: 'What is an Observable in RxJS?',
        answer: `In RxJS, an observable is a function that is used to create an observer and attaches it to the source where values are expected from. For example, clicks, mouse events from a DOM element or an Http request, etc. afre the example of RxJS observable. Observable gives us the idea of an invokable collection of future values or events. It facilitates us to make asynchronous data streams using observable sequences or just called observables, too.

We have to follow the following three steps to complete the RxJS observable:
<ul>
<li>Create Observable</li>
<li>Subscribe Observable</li>
<li>Execute Observable</li>
</ul>
`,
        links: [
            'https://www.javatpoint.com/rxjs-observables',
        ]
    },
    {
        question: 'What is the difference between RxJS Observables and Promises?',
        answer: `<strong>RxJS Observables</strong>
<ul>
<li>Observables are used to run asynchronously, and we get the return value multiple times</li>
<li>Observables are lazy</li>
<li>Observables can be canceled</li>
<li>Observables provide multiple future values</li>
</ul>
<strong>Promises</strong>
<ul>
<li>Promises are used to run asynchronously, and we get the return value only once</li>
<li>Promises are not lazy</li>
<li>Promises cannot be canceled</li>
<li>Promises provide a single future value</li>
</ul>
`,
        links: [
            'https://medium.com/javascript-everyday/javascript-theory-promise-vs-observable-d3087bc1239a',
            'https://www.syncfusion.com/blogs/post/angular-promises-versus-observables.aspx',
        ]
    },
    {
        question: 'What are the advantages of RXJS Observables over RxJS Promises?',
        answer: `<ul>
<li>An observable is like a Stream. It is used to pass zero or more events where the callback is called for each event.</li>
<li>Observable is always preferred over Promise because it provides all the features of Promise and more.</li>
<li>By using an observable, we can handle single or multiple events.</li>
<li>Observables are cancelable, so this is also an advantage over Promises.</li>
<li>Observable allows lazy initialization.</li>
<li>Observable allows formatting data.</li>
<li>Observable provides operators like map, forEach, reduce etc.</li>
</ul>
`,
        links: [
        ]
    },
    {
        question: 'What is the difference between Cold and Hot Observables in RxJS?',
        answer: `When the data is produced by the Observable itself, t is called the cold Observable. When the data is produced outside the Observable, it is called hot Observable.

<strong>Cold Observables</strong>
<ul>
<li>We can call an Observable "cold" when the data is produced inside the Observable</li>
<li>Cold observables start to run upon subscription</li>
<li>The Cold observable sequence only starts pushing values to observers when subscribe is called</li>
<li>The cold Observable starts running upon subscription</li>
<li>The cold Observable sequence starts pushing values</li>
<li>In cold Observable, the data is produced inside the Observable so, we cannot share the data between multiple subscribers. Two Observables that subscribe at more or less the same may receive two different values. We call this behavior "unicasting."</li>
</ul>

<strong>Hot Observables</strong>
<ul>
<li>We call the Observable "hot" when the data is produced outside the Observable</li>
<li>Hot observables produce values even before a subscription is made</li>
<li>Hot observables such as mouse move events, stock pickers or WebSocket connections are already produced in values even before the subscription is active</li>
<li>The hot Observable produces values before subscriptions.</li>
<li>In hot Observable, the data producer is outside the Observable</li>
<li>As we know that the data is produced outside the Observable in hot Observable, so it can share data between multiple subscribers in hot Observable. This behavior is "multicasting."</li>
</ul>
`,
        links: [
            'https://benlesh.medium.com/hot-vs-cold-observables-f8094ed53339',
            'https://dev.to/bhagatparwinder/hot-vs-cold-observables-5dp3',
        ]
    },
];

