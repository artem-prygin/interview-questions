export const generateAccordionItems = (data) => data
    .map((x, index) => {
        return `
            <div class="accordion-item">
                <h2 class="accordion-header"
                    id="heading-${index}">
                    <button class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-${index}"
                            aria-expanded="false"
                            aria-controls="collapse-${index}">
                        ${index + 1}. ${x.question}
                    </button>
                </h2>
                <div id="collapse-${index}"
                     class="accordion-collapse collapse"
                     aria-labelledby="heading-${index}">
                    <div class="accordion-body">
                        ${x.answer}
                        <div class="links">
                            ${x.links ? x.links.map((link, index) => {
            if (index === 0) {
                return `<strong class="mt-1">Links:</strong><a href="${link}" target="_blank">${link}</a>`;
            }
            return `<a href="${link}" target="_blank">${link}</a>`;
        }).join('<br>') : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
