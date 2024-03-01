customElements.whenDefined('hui-vertical-stack-card').then(() => {
  class CarCard extends HTMLElement {

    setConfig(config) {
      if (!config.cards || !Array.isArray(config.cards)) {
        throw new Error('Invalid configuration: cards required');
      }

      this.config = config;
      this._createCard();
    }

    _createCard() {
      const card = document.createElement('hui-vertical-stack-card');

      this.config.cards.forEach(cardConfig => {
        const conditionalCard = document.createElement('hui-conditional-card');
        const conditions = cardConfig.conditions.map(condition => {
          return {
            entity: condition.entity,
            state: condition.state,
            state_not: condition.state_not
          };
        });

        conditionalCard.setConfig({
          conditions: conditions,
          card: this._createPictureElementsCard(cardConfig.card)
        });

        card.appendChild(conditionalCard);
      });

      this.appendChild(card);
    }

    _createPictureElementsCard(cardConfig) {
      const pictureElementsCard = document.createElement('hui-picture-elements-card');

      pictureElementsCard.setConfig({
        image: cardConfig.image,
        elements: cardConfig.elements.map(element => {
          return {
            type: element.type,
            entity: element.entity,
            state_color: element.state_color,
            suffix: element.suffix,
            icon: element.icon,
            style: element.style
          };
        }),
        card_mod: cardConfig.card_mod
      });

      return pictureElementsCard;
    }

    set hass(hass) {
      this.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }

  customElements.define('car-card', CarCard);
});
