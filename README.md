This project is a bit of fun that uses [TheCatAPI](https://docs.thecatapi.com/) to create a SPA that allows you to upload pictures of a cat, favourite them and vote on them.

## Requirements

- [Nodejs](https://nodejs.org/en/)

## Features

- [Webpack](https://webpack.github.io/) for asset bundling / optimisation etc
- [Babel](https://babeljs.io/) compiler for ES6 JavaScript
- [React](https://reactjs.org/) JavaScript library
- [Create React App](https://github.com/facebook/create-react-app) React Bootstrap
- [React Query](https://react-query.tanstack.com/) Data synchronisation
- [Material UI](https://material-ui.com/) Component library
- [Axios](https://github.com/axios/axios) HTTP client
- [Jest](https://jestjs.io/) JavaScript testing framework
- [React Testing Library](https://testing-library.com/) Testing utilities

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This projects requires an API key for the Cat API that needs to be provided from an `.env.developement` file. Luckily for you one has been included in `.env.example`, you'll just need to duplicate this file and call it `.env.developement`.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
