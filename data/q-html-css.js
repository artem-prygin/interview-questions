export default [
    {
        question: 'Can a web page contain multiple header HTML elements? What about footer HTML elements?',
        answer: `Yes to both. The W3 documents state that the tags represent the header and footer areas of their nearest ancestor "section". So not only can the page <code>body</code> contain a <code>header</code> and a <code>footer</code>, but so can every <code>article</code> and <code>section</code> element.<br>
W3 recommends having as many as you want, but only 1 of each for each "section" of your page, i.e. body, section etc.`
        ,
        links: [],
    },
    {
        question: 'Briefly describe the correct usage of the following HTML5 semantic elements: header, article, section, footer',
        answer: `<ul>
<li><code>header</code> is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.</li>
<li><code>article</code> is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing its meaning. Individual blog posts or news stories are good examples.</li>
<li><code>section</code> is a flexible container for holding content that shares a common informational theme or purpose.</li>
<li><code>footer</code> is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.</li>
</ul>
        `
        ,
        links: [
            'https://www.w3schools.com/html/html5_semantic_elements.asp',
        ],
    },
    {
        question: 'What is HTML5 Web Storage? Explain localStorage and sessionStorage.\n',
        answer: `With HTML5, web pages can store data locally within the user’s browser. The data is stored in name/value pairs, and a web page can only access data stored by itself.

Differences between <code>localStorage</code> and <code>sessionStorage</code> regarding lifetime:
<ul>
<li>Data stored through <code>localStorage</code> is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.</li>
<li><code>sessionStorage</code> has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through sessionStorage is deleted.</li>
</ul>

Differences between <code>localStorage</code> and <code>sessionStorage</code> regarding storage scope: Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.
<ul>
<li><code>sessionStorage</code> is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate sessionStorage data.
</li>
<li>Unlike in <code>localStorage</code>, the same scripts from the same origin can't access each other's sessionStorage when opened in different tabs.
</li>
</ul>

Also:
<ul>
<li>Earlier, this was done with cookies.
</li>
<li>The storage limit is far larger (at least 5MB) than with cookies and its faster.
</li>
<li>The data is never transferred to the server and can only be used if the client specifically asks for it.
</li>
</ul>
        `
        ,
        links: [
            'https://www.w3schools.com/html/html5_webstorage.asp',
        ],
    },
    {
        question: 'What is the purpose of the alt attribute on images?',
        answer: `The <code>alt</code> attribute provides alternative information for an image if a user cannot view it. The <code>alt</code> attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.

<ul>
<li>Decorative images should have an empty <code>alt</code> attribute.</li>
<li>Web crawlers use <code>alt</code> tags to understand image content, so they are considered important for Search Engine Optimization (SEO).</li>
<li>Put the . at the end of <code>alt</code> tag to improve accessibility.</li>
</ul>
        `
        ,
        links: [
            'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML',
        ],
    },
    {
        question: 'Where and why is the rel="noopener" attribute used?',
        answer: `The <code>rel="noopener"</code> is an attribute used in A elements (hyperlinks). It prevents pages from having a window.opener property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.
<ul>
<li><code>rel="noopener"</code> is applied to hyperlinks.</li>
<li><code>rel="noopener"</code> prevents opened links from manipulating the source page.</li>
</ul>
        `
        ,
        links: [
            'https://web.dev/external-anchors-use-rel-noopener/',
            'https://mathiasbynens.github.io/rel-noopener/',
        ],
    },
    {
        question: 'What is the difference between em and rem units?',
        answer: `Both <code>em</code> and <code>rem</code> units are based on the font-size CSS property. The only difference is where they inherit their values from.
<ul>
<li><code>em</code> units inherit their value from the font-size of the parent element</li>
<li><code>rem</code> units inherit their value from the font-size of the root element (html)</li>
</ul>
In most browsers, the font-size of the root element is set to 16px by default.`
        ,
        links: [
            'https://medium.com/@dixita0607/css-units-for-font-size-px-em-rem-79f7e592bb97',
        ],
    },
    {
        question: 'What is the difference between \'+\' and \'~\' sibling selectors?',
        answer: `<code>The General Sibling Selector ~</code> selects all elements that are siblings of a specified element.<br>
<code>The Adjacent Sibling Selector +</code> selects all elements that are the adjacent siblings of a specified element.
`
        ,
        links: [
            'https://www.w3schools.com/css/css_combinators.asp',
            'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators',
        ],
    },
    {
        question: 'What are the advantages of using CSS preprocessors?',
        answer: `CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (lighten, darken, transparentize, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.
`
        ,
        links: [
            'https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27',
        ],
    },
    {
        question: 'Can you name the four types of @media properties?',
        answer: `
        <ul>
        <li><code>all</code>, which applies to all media type devices</li>
        <li><code>print</code>, which only applies to printers</li>
        <li><code>screen</code>, which only applies to screens (desktops, tablets, mobile etc.)</li>
        <li><code>speech</code>, which only applies to screenreaders</li>
</ul>
`
        ,
        links: [
            'https://developer.mozilla.org/en-US/docs/Web/CSS/@media',
            'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
        ],
    },
    {
        question: 'What is CSS BEM?',
        answer: `
        The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.
        <br>
        <br>
        <code class="d-block">block component</code>
.block {
}
<br> <br>
<code class="d-block">/* element */</code>
.block__element {
}
<br> <br>
<code class="d-block">/* modifier */</code>
.block__element--modifier {
}
`
        ,
        links: [
            'https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664',
        ],
    },
    {
        question: 'What are the advantages of using CSS sprites and how are they utilized?',
        answer: `
        CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.
<br>
Under HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.
<br>
However, according to benchmark results, although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.
<br>
To utilize a spritesheet in CSS, one would use certain properties, such as background-image, background-position and background-size to ultimately alter the background of an element.
`
        ,
        links: [
            'https://css-tricks.com/css-sprites/',
        ],
    },
];



