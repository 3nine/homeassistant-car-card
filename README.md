# Car Card

This card displays entities at the top, a car image in the center, and entities at the bottom.

## Installation

### HACS
Car Card is curently not available in HACS (Home Assistant Community Store)

### Manual
1. Download car-card.js file from the latest release.
2. Put car-card.js file into your config/www folder.
3. Add reference to car-card.js in Dashboard. There's two way to do that:
    - **Using UI:** Settings → Dashboards → More Options icon → Resources → Add Resource → Set Url as /local/car-card.js → Set Resource type as JavaScript Module.
    - **Note:** If you do not see the Resources menu, you will need to enable Advanced Mode in your User Profile
    - **Using YAML:** Add following code to lovelace section.
       ```yaml
            resources:
                - url: /local/car-card.js
                  type: module
            ```
## Usage

All the Mushroom cards can be configured using Dashboard UI editor.

1. In Dashboard UI, click 3 dots in top right corner.
2. Click _Edit Dashboard_.
3. Click Plus button to add a new card.
4. Find one of the _Custom: Car Card_ card in the list.

### Cards

Different cards are available for differents entities :
-   🛠 [Minimum Card]()
