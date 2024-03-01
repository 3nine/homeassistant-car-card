class CarCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("content-card-editor");
  }

  setConfig(config) {
      if (!config.entities || !Array.isArray(config.entities)) {
        throw new Error('Invalid configuration: entities required');
      }
      
      if (!config.image) {
        throw new Error('Invalid configuration: image required');
      }

      this.config = config;
      this._createCard();
    }

    _createCard() {
      const card = document.createElement('ha-card');

      const backgroundImage = `background-image: url('${this.config.image}');`;
      const cardStyle = `
        height: 400px;
        background-size: cover;
        background-position: center;
        ${backgroundImage}
      `;

      card.style.cssText = cardStyle;

      const entitiesTop = this._createEntityRow(this.config.entities.slice(0, 4));
      const entitiesBottom = this._createEntityRow(this.config.entities.slice(4));

      card.appendChild(entitiesTop);
      card.appendChild(entitiesBottom);

      this.appendChild(card);
    }

    _createEntityRow(entities) {
      const row = document.createElement('div');
      row.style.display = 'flex';

      entities.forEach(entity => {
        const entityElement = document.createElement('ha-entity');
        entityElement.entity = entity;
        row.appendChild(entityElement);
      });

      return row;
    }

  getCardSize() {
    return 2;
  }

  set hass(hass) {
      this.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

customElements.define('car-card', CarCard);
