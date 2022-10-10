import javascriptData from './data/q-javascript.js';
import angularData from './data/q-angular.js';
import typescriptData from './data/q-typescript.js';
import rxjsData from './data/q-rxjs.js';
import htmlCssData from './data/q-html-css.js';
import otherData from './data/q-other.js';
import { generateAccordionItems } from './helpers.js';

const accordion = document.getElementById('accordion');
const quantity = document.getElementById('quantity');
accordion.innerHTML = generateAccordionItems(javascriptData);

quantity.innerText = javascriptData.length + angularData.length + typescriptData.length + rxjsData.length + htmlCssData.length + otherData.length;

const buttons = document.getElementById('buttons');
buttons.addEventListener('click', (e) => {
    e.stopPropagation();
    const activeBtn = document.querySelector('.btn-success');

    if (activeBtn.id === e.target.id || e.target.tagName !== 'BUTTON') {
        return;
    }

    activeBtn.classList.remove('btn-success');
    activeBtn.classList.add('btn-secondary');
    e.target.classList.add('btn-success');

    switch (e.target.id) {
        case 'js':
            accordion.innerHTML = generateAccordionItems(javascriptData);
            break;
        case 'ts':
            accordion.innerHTML = generateAccordionItems(typescriptData);
            break;
        case 'angular':
            accordion.innerHTML = generateAccordionItems(angularData);
            break;
        case 'rxjs':
            accordion.innerHTML = generateAccordionItems(rxjsData);
            break;
        case 'html-css':
            accordion.innerHTML = generateAccordionItems(htmlCssData);
            break;
        case 'other':
            accordion.innerHTML = generateAccordionItems(otherData);
            break;
        default:
            break;
    }
});
