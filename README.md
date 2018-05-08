# Hello World!

This application is built using Javascript, React, Redux, Express, Node.

The client side was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), and uses a Webpack module bundler.

# Installation

Fork or clone this repo onto you local machine and then run `$ npm install`

# Available Scripts

### Client Server

To run the client server `cd` into the client directory and run: `npm start`
This runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

### Back End Server

To run the back end server `cd` into the server directory you run: `npm start`
This server must be running in order to perform RESTful calls to the server.

* [Client](#tree/master/client)
* [Server](#tree/master/server)

### Testing

Unit tests have been written using [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest/).

To run client-side testing `cd` into the client folder and run: `npm test`

Unit tests have been written using Jest and Enzyme. All components have smoke tests to ensure they render on the screen.

Actions have been tested to be sure they return the correct action.

# Structure

This project is a full stack application which contains a client folder and server folder.

### The Process

I built this full stack app using the Atom IDE, which included [linter](https://atom.io/packages/linter) - a package available to aid with linting your code after each save. For debugging, I used Chrome Developer Tools with the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) extension.

When first designing this app I envisioned planting a garden, but scaled this down to the "planting" of a tree, for the sake of time. In general, here are the steps which were completed:

* I started with [Create React App](https://github.com/facebookincubator/create-react-app) and added a server.
* I used [Postman](https://www.getpostman.com/) to ensure that my server was working.
* In the client I built the basic components with little functionality.
* Added rough styling for layout
* I added Redux and created an action, reducer, and store on the most basic level, and checked that it worked going through the Redux architecture.
* Added needed elements to dummy components
* Added connect() to components needing access to store
* Added dispatching where needed for resource Actions
* Wrote and added action that makes call to server and attached it to tree component
* Wrote tests/README and made any other adjustments

### Client Structure

The client is split into a `public` and `src` subfolders. The `public` subfolder contains stylesheets, a favicon, media, and the `index.html` with a `<div>` root element.

The `src` folder our `index.js` which is our entry point into the React app. `src` also contains our Redux `store.js`, and subfolders for the Tests, Actions, Reducers, and Components.

The root component `App`, contains a header and a `PlantGrowthContainer`. The `PlantGrowthContainer` contains a `Plant` and a `ResourcesContainer`. The `ResourcesContainer` has one `ResourcesCounter` and multiple reusable `Resource` components.

### Server Structure

The server folder contains a `server.js` which uses [Express.js](https://expressjs.com/) to apply middleware and perform GET requests.
