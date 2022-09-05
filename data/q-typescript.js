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
];
