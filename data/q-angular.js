export default [
    {
        question: 'What is Angular?',
        answer: `<strong>Angular is a development platform, built on TypeScript. As a platform, Angular
                            includes:</strong>
                        <ul>
                            <li>A component-based framework for building scalable web applications</li>
                            <li>A collection of well-integrated libraries that cover a wide variety of features,
                                including routing, forms management, client-server communication, and more
                            </li>
                            <li>A suite of developer tools to help you develop, build, test, and update your code</li>
                        </ul>`,
        links: [
            'https://angular.io/guide/what-is-angular',
        ],
    },
    {
        question: 'What are some of the advantages of Angular over other frameworks?',
        answer: `<ul>
                            <li>Features that are provided out of the box - Angular provides a number of built-in
                                features like routing, state management, rxjs library and http servicesstraight out of
                                the box. This means that one does not need to look for the above-stated features
                                separately. They are all provided with angular.
                            </li>
                            <li>Declarative UI - Angular uses HTML to render the UI of an application. HTML is a
                                declarative language and is much easier to use than JavaScript.
                            </li>
                            <li>Long-term Google support - Google announced Long-term support for Angular. This means
                                that Google plans to stick with Angular and further scale up its ecosystem.
                            </li>
                        </ul>`,
    },
    {
        question: 'What are templates in Angular?',
        answer: ` <strong>A template is a kind of HTML that instructs Angular about how to display a component.</strong> An Angular HTML template, like conventional HTML, produces a view, or user interface, in the browser, but with far more capabilities. Angular API evaluates an HTML template of a component, creates HTML, and renders it.`,
    },
    {
        question: 'What do you understand by Angular expressions?',
        answer: `Angular expressions are code snippets that are used to bind application data to HTML. Angular resolves the expressions, and the result is returned to where the expression is written. <br>Angular expressions are usually written in double braces: <code>{{ expression }}</code> similar to JavaScript.`,
        links: [
            'https://www.w3schools.com/angular/angular_expressions.asp',
        ],
    },
    {
        question: 'What are the Lifecycle hooks of Angular?',
        answer: `When the Angular components are created, they enter their lifecycle and remain when they are destroyed. Angular Lifecycle hooks are used to check the phases and trigger changes at specific phases during the entire duration.
        <ul>
        <li><code>ngOnChanges( ):</code> This method is called when one or more input properties of the component are changed. The hook receives a SimpleChanges object containing the previous and current values of the property.
</li>
        <li><code>ngOnInit( ):</code> This is the second lifecycle hook. It is called once, after the ngOnChanges hook. It is used to initialize the component and sets the input properties of the component.
</li>
        <li><code>ngDoCheck( ):</code> This hook is called after ngOnChanges and ngOnInit and is used to detect and act on changes that Angular cannot detect. In this hook, we can implement our change detection algorithm.
</li>
        <li><code>ngAfterContentInit( ):</code> This hook is called after the first ngDoCheck hook. This hook responds after the content gets projected inside the component.
</li>
        <li><code>ngAfterContentChecked( ):</code> This hook is called after ngAfterContentInit and every subsequent ngDoCheck. It responds after the projected content is checked.
</li>
        <li><code>ngAfterViewInit( ):</code> This hook is called after a component's view or initializing a child component's view.
</li>
        <li><code>ngAfterViewChecked( ):</code> This hook is called after ngAfterViewInit. It responds after the component's view or when the child component's view is checked.
</li>
        <li><code>ngOnDestroy( ):</code> This hook is called just before Angular destroys the component. This is used to clean up the code and detach event handlers.
</li>
</ul>
`,
        links: [
            'https://indepth.dev/posts/1494/complete-guide-angular-lifecycle-hooks',
            'https://www.freecodecamp.org/news/angular-lifecycle-hooks/',
        ],
    },
    {
        question: 'What is AOT in Angular?',
        answer: `In Angular, AOT stands for Ahead-Of-Time compiler. It is used to convert your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code. By compiling the application during the build process provides a faster rendering in the browser. An Angular application is made of several components and their HTML templates. Because of these Angular components and templates, the browsers are not able to understand them directly. So, Angular applications require a compilation process before they run in a browser. That's why AOT compilers are required.`,
        links: [
        ],
    },
    {
        question: 'What is JIT in Angular?',
        answer: `In Angular, JIT stands for Just-in-Time compiler. The JIT compiler provides a dynamic translation or run-time compilation, which provides a way of executing computer code that involves compilation during the execution of a program at run time rather than before execution.
        <ul>
        <li>Just-in-Time (JIT) compiler compiles our app in the browser at run-time while Ahead-of-Time (AOT) compiler is used to compile your app at build time on the server.
</li>
        <li>The JIT compilation runs by default when you run the ng build (build only), or ng serve (build and serve locally) CLI commands. This is used for development. On the other hand, we have to include the --aot option with the ng build or ng serve command for AOT compilation.
</li>
        <li>JIT and AOT are both two ways used to compile code in an Angular project. JIT compiler is used in development mode while AOT is used for production mode.
</li>
        <li>JIT is easy to use. We can easily implement features and debug in JIT mode because here we have a map file while AOT does not. On the other hand, the biggest advantage of using AOT for production is that it reduces the bundle size for faster rendering.
</li>
</ul>
`,
        links: [
            'https://levelup.gitconnected.com/just-in-time-jit-and-ahead-of-time-aot-compilation-in-angular-8529f1d6fa9d',
        ],
    },
    {
        question: 'What are directives in Angular?',
        answer: `A directive is a class in Angular that is declared with a <code>@Directive</code> decorator. Every directive has its own behavior, and you can import them into various components of an application.
`,
        links: [
            'https://www.w3schools.com/angular/angular_directives.asp',
        ],
    },
    {
        question: 'What is lazy loading in Angular?',
        answer: `Lazy loading is one of the most powerful and useful concepts of Angular Routing. It makes the web pages easy to download by downloading them in chunks instead of downloading everything in a big bundle. Lazy loading facilitates asynchronously loading the feature module for routing whenever required using the property loadChildren.
`,
        links: [
            'https://angular.io/guide/lazy-loading-ngmodules',
        ],
    },
    {
        question: 'What is Dependency Injection in Angular?',
        answer: `Dependency injection is an application design pattern that is implemented by Angular. It is used to form the core concepts of Angular. Dependencies are services in Angular which have some specific functionality. Various components and directives in an application can need these functionalities of the service. Angular provides a smooth mechanism by which these dependencies are injected into components and directives.
`,
        links: [
            'https://angular.io/guide/dependency-injection-overview',
            'https://www.simplilearn.com/tutorials/angular-tutorial/angular-dependency-injection',
        ],
    },
    {
        question: 'Is it possible to make an angular application to render on the server-side?',
        answer: `Yes, we can make an angular application to render on the server-side. Angular provides a technology Angular Universal that makes you able to render applications on the server-side.
Following are the benefits of using Angular Universal:
<ul>
<li>Better User Experience: It enables users to see the view of the application instantly.</li>
<li>Better SEO: Angular Universal ensures that the content is available on every search engine leading to better SEO.</li>
<li>Load Faster: Angular Universal ensures that the render pages available to the browsers sooner to make the loading faster server-side application loads faster.</li>
</ul>
`,
        links: [
            'https://angular.io/guide/universal',
        ],
    },
    {
        question: 'What are string interpolation and property binding in Angular?',
        answer: `String interpolation and property binding are parts of data-binding in Angular. Data-binding is a feature of Angular, which is used to provide a way to communicate between the component (Model) and its view (HTML template). There are two ways of data-binding, one-way data binding and two-way data binding. In Angular, data from the component can be inserted inside the HTML template. Any changes in the component will directly reflect inside the HTML template in one-way binding, but vice-versa is not possible. On the other hand, it is possible in two-way binding.<br>
String interpolation and property binding both are examples of one-way data binding. They allow only one-way data binding.
<br>
String interpolation uses the double curly braces <code>{{ }}</code> to display data from the component. Angular automatically runs the expression written inside the curly braces. For example, <code>{{ 5+5 }}</code> will be evaluated by Angular, and the output will be 10. This output will be displayed inside the HTML template.
<br>
Property binding is used to bind the DOM properties of an HTML element to a component's property. In property binding, we use the square brackets <code>[ ]</code> syntax.
`,
        links: [
        ],
    },
    {
        question: 'What are the different types of directives in Angular?',
        answer: `There are mainly three types of directives in Angular:
<ul>
<li><b>Component Directives:</b> The component directives are used to form the main class in directives. To declare these directives, we have to use the <code>@Component</code> decorator instead of <code>@Directive</code> decorator. These directives have a view, a stylesheet and a selector property.
</li>
<li><b>Structural directives:</b> These directives are generally used to manipulate DOM elements. The structural directive has a <code>*</code> sign before them. We can apply these directives to any DOM element.
</li>
<li><b>Attribute Directives:</b> The attribute directives are used to change the look and behavior of a DOM element. For example, <code>[hidden]</code> directive sets css style <code>{display: none}</code> to the element.
</li>
</ul>
`,
        links: [
            'https://angular.io/guide/built-in-directives',
            'https://thinkster.io/tutorials/fundamentals-of-angular-directives-learn-the-three-types-of-directives',
        ],
    },
    {
        question: 'What is the key difference between a constructor and ngOnInit?',
        answer: `Constructor is a default method in TypeScript classes that are normally used for the initialization purpose. On the other hand, the ngOnInit is specifically an Angular method and is used to define Angular bindings. Even though constructors are getting called first, it is always preferred to move all of your Angular bindings to the ngOnInit method.
`,
        links: [
        ],
    },
    {
        question: 'What do you understand by services in Angular?',
        answer: `In Angular, services are singleton objects that get instantiated only once during the lifetime of an application. An Angular service contains methods that are used to maintain the data throughout the life of an application. Angular services are used to organize as well as share business logic, models, or data and functions with various components of an Angular application. Angular services offer some functions that can be invoked from an Angular component, such as a controller or directive.
`,
        links: [
        ],
    },
    {
        question: 'What do you understand by Angular MVVM architecture?',
        answer: `The MVVM architecture or Model-View-ViewModel architecture is a software architectural pattern that provides a facility to developers to separate the development of the graphical user interface (the View) from the development of the business logic or back-end logic (the Model). By using this architecture, the view is not dependent on any specific model platform.
        <ul>
        <li>Model. The Model consists of the structure of an entity and specifies the approach. In simple words, we can say that the model contains data of an object.</li>
        <li>View. The View is the visual layer of the application. It specifies the structure, layout, and appearance of what a user sees on the screen. It displays the data inside the Model, represents the model, and receives the user's interaction with the view in the form of mouse clicks, keyboard input, screen tap gestures, etc., and forwards these to the ViewModel via the data binding properties. In Angular terms, the View contains the HTML template of a component.</li>
        <li>ViewModel. The ViewModel is an abstract layer of the application. It is used to handle the logic of the application. It also manages the data of a model and displays it in the view. View and ViewModel are connected with two-way data-binding. If you make any changes in the view, the ViewModel takes a note and changes the appropriate data inside the model.</li>
</ul>
`,
        links: [
            'https://www.htmlgoodies.com/javascript/the-model-view-viewmodel-pattern-and-angular-development/',
        ],
    },
    {
        question: 'What is Change Detection?',
        answer: `The key technique of change detection is to execute checks against two states: the current state and the new state. If one of these states differs from the other, something has changed, meaning the view needs to be rendered. Angular Framework provides two strategies to run change detection:
<ul>
<li><code>Default</code>. By default, without configuring the change detection strategy to use, Angular will use <code>ChangeDetectionStrategy.default</code> change detection strategy. With this strategy, Angular will have no assumption on the component’s dependency and will check every component from the component tree from top to bottom every time an event triggers change detection on browser events, timers, XHRs, and promises. This type of behavior can have a negative impact on performance for a large application that has many components.</li>
<li><code>OnPush</code>. We can change the detection strategy from default to <code>ChangeDetectionStrategy.OnPush</code> by adding <code>changeDetection</code> property on <code>@Component</code> decorator.</code> With OnPush strategy we can skip checks for components that uses OnPush strategy and all of its child component.</li>
</ul>

With <code>ChangeDetectionStrategy.OnPush</code> strategy, Angular will only update the component if one or more of these conditions happens:
<ul>
<li>The <code>@Input()</code> reference changed
</li>
<li>An event from the component or one of its children.
</li>
<li>Async pipe linked to the template emits a new value.
</li>
<li>Manually triggered the change detection
</li>
</ul>
`,
        links: [
            'https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/',
            'https://blogs.halodoc.io/understanding-angular-change-detection-strategy/',
        ],
    },
    {
        question: 'What are Angular Pipes?',
        answer: `Angular Pipes are a way to transform the format of output data for display. The data can be strings, currency amounts, dates, etc. Pipes are simple functions that accept an input and return a transformed value in a more technical understanding. They do not alter the data but change into the required format to display in the browser. Angular provides many built-in pipes for typical data transformation. You can also create custom pipes if you want to do custom transformation.<br>
Features:
<ul>
<li>Pipes are defined using the pipe <code>|</code> symbol.
</li>
<li>We can apply two formats to single data by chaining pipes. A chained pipe is when the output of the first pipe is input to the next pipe.
</li>
<li>Pipes can have optional parameters using the colon(:) symbol to fine-tune the output.
</li>
</ul>
`,
        links: [
            'https://angular.io/guide/pipes',
        ],
    },
    {
        question: 'Explain pure and impure pipe in Angular',
        answer: `<b>Pure pipes</b> in Angular are the pipes that execute when it detects a pure change in the input value.
A pure change is when the change detection cycle detects a change to either a primitive input value (such as String, Number, Boolean, or Symbol) or object reference (such as Date, Array, Function, or Object).<br>
<b>Impure pipes</b> in Angular are the pipes that execute when it detects an impure change in the input value. 
An impure change is when the change detection cycle detects a change to composite objects, such as adding an element to the existing array.
`,
        links: [
            'https://www.geeksforgeeks.org/explain-pure-and-impure-pipe-in-angular/',
        ],
    },
    {
        question: 'How does an Angular application work?',
        answer: `Every Angular app contains a file named <code>angular.json</code>. This file contains all the configurations of the app. While building the app, the builder looks at this file to find the application's entry point. When the application enters the build section, the options object's main property defines the entry point of the application. The application's entry point is <code>main.ts</code>, which creates a browser environment for the application to run and calls a function called <code>bootstrapModule</code>, which bootstraps the application (<code>AppModule</code>). The <code>AppModule</code> is declared in the app.module.ts file. This module contains declarations of all the components.
`,
        links: [
        ],
    },
    {
        question: 'What is Angular Router?',
        answer: `Angular Router is a mechanism that facilitates users to navigate from one view to the next as users perform application tasks. It follows the concept model of browser's application navigation. The Angular Router, representing a particular component view for a given URL, is not part of Angular Core. It is available in a library named <code>@angular/router</code>, and we have to import the required router components. This process is called router imports.
`,
        links: [
            'https://angular.io/guide/router',
            'https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/',
        ],
    },
];
