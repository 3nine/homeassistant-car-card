# Car Card

This card displays entities at the top, a car image in the center, and entities at the bottom.

## Installation

1. Installieren Sie HACS, falls Sie es noch nicht installiert haben.
2. Öffnen Sie die HACS-Registerkarte in Ihrer Home Assistant-Benutzeroberfläche.
3. Klicken Sie auf "Integrationen" (oder eine entsprechende Kategorie).
4. Klicken Sie auf das "+"-Symbol unten rechts.
5. Geben Sie die URL Ihres Repositories ein (https://github.com/yourusername/car-card).
6. Klicken Sie auf "Hinzufügen".
7. Installieren Sie die Car Card aus der Liste der verfügbaren Integrationen.

## Verwendung

Fügen Sie die Car Card wie folgt zu Ihrem Lovelace-Dashboard hinzu:

```yaml
type: 'custom:car-card'
entities:
  - entity: sensor.entity1
    position: top
  - entity: sensor.entity2
    position: top
  - entity: sensor.entity3
    position: top
  - entity: sensor.entity4
    position: top
  - entity: sensor.entity5
    position: bottom
  - entity: sensor.entity6
    position: bottom
  - entity: sensor.entity7
    position: bottom
  - entity: sensor.entity8
    position: bottom
