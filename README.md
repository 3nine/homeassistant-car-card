# Car Card

This card displays entities at the top, a car image in the center, and entities at the bottom.

## Installation

# HACS
Car Card is curently not available in HACS (Home Assistant Community Store)

# Manual
1. Download car-card.js file from the latest release.
2. Put car-card.js file into your config/www folder.
3. Add reference to mushroom.js in Dashboard. There's two way to do that:
Using UI: Settings → Dashboards → More Options icon → Resources → Add Resource → Set Url as /local/mushroom.js → Set Resource type as JavaScript Module. Note: If you do not see the Resources menu, you will need to enable Advanced Mode in your User Profile
Using YAML: Add following code to lovelace section.
resources:
    - url: /local/mushroom.js
      type: module
