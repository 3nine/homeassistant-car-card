class CarCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.entities = [];
    this.shadowRoot.innerHTML = `
      <style>
        /* CSS-Styling für Ihre Karte */
      </style>
      <div>
        <!-- HTML-Inhalt Ihrer Karte -->
        <div class="top-entities">
          ${this.renderEntities('top')}
        </div>
        <div class="car-image">
          <!-- Platz für das Auto-Bild -->
          <img src="car.png" alt="Car Image">
        </div>
        <div class="bottom-entities">
          ${this.renderEntities('bottom')}
        </div>
      </div>
    `;
  }

  renderEntities(position) {
    return this.entities
      .filter(entity => entity.position === position)
      .map(entity => `<div>${entity.name}</div>`)
      .join('');
  }

  setConfig(config) {
    if (!config.entities) {
      throw new Error('You need to define entities');
    }
    this.entities = config.entities.map(entity => ({ name: entity, position: entity.position }));
  }

  getCardSize() {
    return 8;
  }
}

customElements.define('car-card', CarCard);
