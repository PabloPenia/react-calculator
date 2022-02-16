# React Calculator

Simple calculator without `eval()`.

- Calculations are made using precedence operators first.
- Allows negative numbers on calculations such `5*-5`
- If a not allowed operator is entered replaces the last entered.

## Install

clone this repo: `git clone https://github.com/PabloPenia/react-calculator.git`
run: `npm ci` in the project directory (requires nodejs and npm: https://nodejs.org)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## TODO

- **Add a max limit to entered calculations:** As now only 15 digits are displayed, but all entered digits are counted in calculations./

For example: if you enter 20 digits you will see the last 15, but in the result you will see the calculation of the 20 digits because is hidden with CSS./

This could cause some wrong results if the final result is more than 15 digits long./

This will be fixed in next update.
