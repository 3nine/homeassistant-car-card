class CarCard extends HTMLElement {
    set hass(hass) {
        if (!this.content) {
            const cardConfig = this._config;
            this.content = document.createElement('div');
            this.content.innerHTML = `
                <ha-card>
                    <img src="${cardConfig.background}" style="width: 100%; height: auto;">
                    <div style="display: flex; justify-content: space-between;">
                        ${this.createEntities(cardConfig.top_entities)}
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        ${this.createEntities(cardConfig.bottom_entities)}
                    </div>
                </ha-card>
            `;
            this.appendChild(this.content);
        }
    }

    setConfig(config) {
        this._config = config;
    }

    createEntities(entities) {
        return entities.map(entity => `
            <div>
                <ha-icon icon="${entity.icon}"></ha-icon>
                <span>${entity.name}</span>
            </div>
        `).join('');
    }
}

customElements.define('car-card', CarCard);
