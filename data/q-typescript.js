export default [
    {
        question: 'What happens with Interfaces after TypeScript compilation to JavaScript?',
        answer: `<strong>Interfaces exist only in Typescript, and they are not compiled to JavaScript anyhow</strong>
In TypeScript, an interface is an abstract type that tells the compiler which property names a given object can have. TypeScript creates implicit interfaces when you define an object with properties. It starts by looking at the object's property name and data type using TypeScript's type inference abilities.`,
    },
    {
        question: 'What are the differences between types and interfaces?',
        answer: `<ul>
            <li><code>Type</code> when used for declaring two different types where the variable names declared are the same then the typescript compiler will throw an error. <code>Interface</code> when used for declaring two interfaces with the same name has the capability to merge these two interfaces.</li>
            <li>The <code>types</code> can be used for other types also such as primitives, unions, and tuples. The <code>interface</code> cannot be used with other types of declaration as done with type in Typescript.</li>
            <li>In typescript <code>type</code>, or type alias cannot be extended and hence the type cannot extend class as it does not support this feature. The <code>interfaces</code> can be extended with type alias or the interface can be extended by type also. Where interface can easily extend classes is one of the best features of the typescript interface.</li>
        </ul>`,
        links: [
            'https://blog.logrocket.com/types-vs-interfaces-in-typescript/',
            'https://www.educba.com/typescript-type-vs-interface/',
        ],
    },
    {
        question: 'What is the difference between TypeScript and JavaScript?',
        answer: `<ul>
            <li>TypeScript is known as an Object-oriented programming language whereas JavaScript is a prototype based language.</li>
            <li>TypeScript has a feature known as Static typing but JavaScript does not support this feature.</li>
            <li>TypeScript supports Interfaces but JavaScript does not.</li>
            <li>TypeScript always points out the compilation errors at the time of development (pre-compilation). Because of this getting runtime errors is less likely, whereas JavaScript is an interpreted language.</li>
            <li>TypeScript supports static/strong typing. This means that type correctness can be checked at compile time. This feature is not available in JavaScript.</li>
            <li>TypeScript is nothing but JavaScript and some additional features i.e. ES6 features.</li>
        </ul>`,
        links: [
            'https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/',
        ],
    },
    {
        question: 'What are the components of TypeScript?',
        answer: `<strong>The TypeScript language is internally divided into three main layers. </strong>Each of these layers is divided into sublayers or components. In the following diagram, we can see the three layers and each of their internal components. These layers are:
            <ul>
            <li>Language. It features the TypeScript language elements. It comprises elements like syntax, keywords, and type annotations.</li>
            <li>The TypeScript Compiler. The TypeScript compiler (TSC) transform the TypeScript program equivalent to its JavaScript code. It also performs the parsing, and type checking of our TypeScript code to JavaScript code.</li>
            <li>The TypeScript Language Services. The language service provides information which helps editors and other tools to give better assistance features such as automated refactoring and IntelliSense.</li>
            </ul>
        `,
        links: [
            'https://www.javatpoint.com/typescript-components',
        ],
    },
    {
        question: 'What are the modules in TypeScript?',
        answer: `<strong>Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.</strong> Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.<br>
Modules are declarative; the relationships between modules are specified in terms of imports and exports at the file level.<br>
    Modules import one another using a module loader. At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it. Well-known module loaders used in JavaScript are Node.js’s loader for CommonJS modules and the RequireJS loader for AMD modules in Web applications.
        `,
        links: [
            'https://www.typescriptlang.org/docs/handbook/modules.html',
            'https://www.tutorialsteacher.com/typescript/typescript-module',
        ],
    },
    {
        question: 'What is function overloading?',
        answer: `<strong>TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type. However, the number of parameters should be the same.</strong>
        <ul>
            <li> Method overloading is the process in which one method could be used multiple times with same name and different parameter types or return types.</li>
            <li>Function name and number of parameters in overloaded functions should be same.</li>
            <li>Return type of overloaded functions along with data types of parameters could be altered (changed).</li>
            <li>Method Overloading provides code reusability, which saves time and efforts.</li>
            <li>This process also saves memory space, so that the program execution becomes a bit faster.</li>
            <li>This process also increases code readability.</li>
        </ul>
        `,
        links: [
            'https://www.tutorialsteacher.com/typescript/function-overloading',
            'https://dmitripavlutin.com/typescript-function-overloading/',
        ],
    },
    {
        question: 'Explain decorators in TypeScript',
        answer: `<strong>Decorators are the methods by which we are able to wrap code with another.</strong> Essentially like a wrapper. Decorators are a useful design pattern that allows certain specific behavior to be injected into an object/function, either statically or dynamically. Decorators can be attached to a class declaration, method, accessor, property, or parameter.
        `,
        links: [
            'https://www.typescriptlang.org/docs/handbook/decorators.html',
            'https://www.digitalocean.com/community/tutorials/how-to-use-decorators-in-typescript',
        ],
    },
    {
        question: 'List some of the utility types provided by TypeScript and explain their usage.',
        answer: `TypeScript provides various utility types that make common type transformations easy. These utility types are available globally. Here are some of the essential utility types included in TypeScript.
<ul>
<li><code>Partial< Type></code>. Constructs a type with all properties of Type set to optional.</li>
<li><code>Required< Type></code>. Constructs a type consisting of all properties of Type set to required.</li>
<li><code>Readonly< Type></code>. Constructs a type with all properties of Type set to readonly.</li>
<li><code>Record< Keys, Type></code>. Constructs an object type with property keys are of type Keys, and values are Type.</li>
</ul>
        `,
        links: [
            'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        ],
    },
    {
        question: 'How to make object properties immutable in TypeScript?',
        answer: `You can mark object properties as immutable by using the readonly keyword before the property name. When you mark a property as readonly, it can only be set when you initialize the object. Once the object is created, you cannot change it. 
        <code class="d-block">readonly x: number;</code>
        `,
        links: [
        ],
    },
    {
        question: 'How to enforce strict null checks in TypeScript?',
        answer: `Null pointers are one of the most common sources of unexpected runtime errors in programming. TypeScript helps you avoid them to a large degree by enforcing strict null checks.

You can enforce strict null checks in two ways:
<ul>
<li>providing the <code>--strictNullChecks</code> flag to the TypeScript (tsc) compiler
</li>
<li>setting the <code>strictNullChecks</code> property to true in the <code>tsconfig.json</code> configuration file.
</li>
</ul>
When the flag is false, TypeScript ignores null and undefined values in the code. When it is true, null and undefined have their distinct types. The compiler throws a type error if you try to use them where a concrete value is expected.
        `,
        links: [
        ],
    },
    {
        question: 'What are type aliases? How do you create one?',
        answer: `Type aliases give a new, meaningful name for a type. They don’t create new types but create new names that refer to that type.
For example, you can alias a union type to avoid typing all the types everywhere that value is being used.
<code class="d-block">type alphanumeric = string | number;</code>
        `,
        links: [
        ],
    },
    {
        question: 'Does TypeScript support static classes?',
        answer: `TypeScript doesn’t support static classes, unlike the popular object-oriented programming languages like C# and Java.
These languages need static classes because all code, i.e., data and functions, need to be inside a class and cannot exist independently. Static classes provide a way to allow these functions without associating them with any objects.<br>
In TypeScript, you can create any data and functions as simple objects without creating a containing class. Hence TypeScript doesn’t need static classes. A singleton class is just a simple object in TypeScript. 
        `,
        links: [
        ],
    },
    {
        question: 'Interfaces vs Types in TypeScript',
        answer: `<ul>
<li>Both can be used to describe the shape of an object or a function signature. But the syntax differs.</li>
<li>Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.</li>
<li>Both can be extended, but again, the syntax differs. Additionally, note that an interface and type alias are not mutually exclusive. An interface can extend a type alias, and vice versa.</li>
<li>A class can implement an interface or type alias, both in the same exact way. Note however that a class and interface are considered static blueprints. Therefore, they can not implement / extend a type alias that names a union type.</li>
<li>Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).</li>
</ul>
        `,
        links: [
            'https://blog.logrocket.com/types-vs-interfaces-in-typescript/',
        ],
    },
    {
        question: 'What is the purpose of the tsconfig.json file?',
        answer: `A <code>tsconfig.json</code> file in a directory marks that directory as the root of a TypeScript project. It provides the compiler options to compile the project.
        `,
        links: [
            'https://www.typescriptlang.org/docs/handbook/tsconfig-json.html',
        ],
    },
    {
        question: 'What are abstract classes? When should you use one?',
        answer: `Abstract classes are similar to interfaces in that they specify a contract for the objects, and you cannot instantiate them directly. However, unlike interfaces, an abstract class may provide implementation details for one or more of its members.
An abstract class marks one or more of its members as abstract. Any classes that extend an abstract class have to provide an implementation for the abstract members of the superclass.
        `,
        links: [
        ],
    },
    {
        question: 'What are Generics?',
        answer: `Generics means parameterized types. The idea is to allow type (Integer, String, … etc., and user-defined types) to be a parameter to methods, classes, and interfaces. Using Generics, it is possible to create classes that work with different data types.
        <br>
        <code>type Wrapped< T> '=' { value: T };</code><br>
        <code>const wrappedValue: Wrapped< number> '=' { value: 10 };</code>
        `,
        links: [
            'https://www.w3schools.com/typescript/typescript_basic_generics.php',
            'https://www.typescriptlang.org/docs/handbook/2/generics.html',
        ],
    },
];




