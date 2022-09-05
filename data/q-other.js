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
];
