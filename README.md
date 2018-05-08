# Hello World!

This application is built using Javascript, React, Redux, Express, Node.

The client side was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Installation

Fork or clone this repo onto you local machine and then run `$ npm install`

# Available Scripts

### Client Server

To run the client server `cd` into the client directory and run: ###`npm start`
This runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

### Back End Server

To run the back end server `cd` into the server directory you run: ###`npm start`
This server must be running in order to perform RESTful calls to the server.

* [Client](#tree/master/client)
* [Server](#tree/master/server)

### Testing

Unit tests have been written using [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest/).

To run client-side testing `cd` into the client folder and run: ###`npm test`

# Structure

This project is a full stack application which contains a client folder and server folder.

### Client Structure

The client is split into a `public` and `src` subfolders. The `public` subfolder contains stylesheets, a favicon, media, and the `index.html` with a `<div>` root element.

The `src` folder our `index.js` which is our entry point into the React app. `src` also contains our Redux `store.js`, and subfolders for the Tests, Actions, Reducers, and Components.

The root component `App`, contains a header and a `PlantGrowthContainer`. The `PlantGrowthContainer` contains a `Plant` and a `ResourcesContainer`. The `ResourcesContainer` has one `ResourcesCounter` and multiple reusable `Resource` components.

### Server Structure

The server folder contains a `server.js` which uses [Express.js](https://expressjs.com/) apply middleware and perform GET requests.

# Linting

This code was linted in development using [linter](https://atom.io/packages/linter), a package available through the Atom IDE.
