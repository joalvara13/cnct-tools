# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Brief

Jose Alvarado

Air Systems Estimator

This app can be used by architects and engineers at cnct. design + development to estimate the required load cpacity of mechanical systems for thier projects. It will give the users quick calculations for in field consultations.

## User Stories

### As a User, I want the ability to calculate the amount of tons my project or space needs so that I can determine the required HVAC system load capacity.

- Enter the square footage.
- Enter the ceiling height.
    - 10% is added to every ft after 8ft.
- Enter the Occupancy Load.
- Select the Occupancy Type.
    - Each type determines what number multiplier is applied to Occupancy Load.
    - Business (30)
    - Mercantile (45)
    - Assembly (60)
    - Residential (25)
- Select Building Envelope R-Value.
    - Each value determines what percentage is added to the formula.
    - High (0%)
    - Medium (10%)
    - Low (20%)
- Calculate.
    - ((SF * 350) * ceiling height percentage increase) + (occLoad * occType) * (R-Value) = BTU/h
    - BTU/h / 12,000 = Tons

## Notes for Version 2.0

### Occupency Type Sub-Categories
- For certain Occupency types, I want another picklist to appear so that I can select a sub-category.
    - Example: If Assembly is selected, another picklist should appear with values such as "Restaurant", "Dance Hall", "Gymnasiums", etc. 
- When a sub-category is selected, the app should open up more fields that the user can populate that will provide a more accurate estimate. Examples: BTU/h output of commercial kitchen equipemnt, stage lighting equipement, high output sports lighting. 

### Grease Trap Sizing Calculator
- TBD