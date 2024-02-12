class CarCard extends HTMLElement {
    setConfig(config) {
        if (!config || !config.cards || !Array.isArray(config.cards)) {
            throw new Error('Invalid configuration');
        }
        
        this.config = config;
        this.render();
    }

    render() {
        const cards = this.config.cards.map(card => {
            return `
                <ha-card>
                    ${this.generateCard(card)}
                </ha-card>
            `;
        }).join('');

        this.innerHTML = `
            <div class="custom-card">
                ${cards}
            </div>
        `;
    }

    generateCard(card) {
        const type = card.type;

        if (type === 'conditional') {
            const conditions = card.conditions;
            const state = conditions[0].entity.split('.')[0];
            const stateValue = conditions[0].state || 'on';

            if (this.hass.states[state].state !== stateValue) {
                return '';
            }
        }

        if (type === 'picture-elements') {
            return `
                <img src="${card.image}" style="width: 100%; height: auto;">
                ${card.elements.map(element => `
                    <div style="position: absolute; top: ${element.style.top}; left: ${element.style.left};">
                        <ha-icon icon="${element.entity.icon || ''}"></ha-icon>
                        <span>${element.entity.name || ''}</span>
                    </div>
                `).join('')}
            `;
        }

        return '';
    }

    set hass(hass) {
        this.hass = hass;
        this.render();
    }
}
customElements.define('car-card', CarCard);
