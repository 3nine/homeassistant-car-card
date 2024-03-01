class CarCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("content-card-editor");
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  getCardSize() {
    return 2;
  }
}

customElements.define('car-card', CarCard);
