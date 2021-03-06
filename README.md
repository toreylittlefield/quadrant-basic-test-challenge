<p align="center">
  <a href="https://github.com/toreylittlefield/quadrant-basic-test-challenge/blob/main/project-files/Proto-Instructions.png" rel="noopener">
 <img height=200px src="https://raw.githubusercontent.com/toreylittlefield/quadrant-basic-test-challenge/main/project-files/Proto-Instructions.png" alt="Project logo"></a>
</p>

<h3 align="center">Quadrant Basic Test</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/toreylittlefield/quadrant-basic-test-challenge.svg)](https://github.com/toreylittlefield/quadrant-basic-test-challenge/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/toreylittlefield/quadrant-basic-test-challenge.svg)](https://github.com/toreylittlefield/quadrant-basic-test-challenge/pulls)
[![Netlify Status](https://api.netlify.com/api/v1/badges/75d4747b-85ce-4fa7-8ba5-769a47fac224/deploy-status)](https://app.netlify.com/sites/quadrant-basic-test/deploys)

</div>

---

<p align="center"> A practical challenge creating a basic form component for a eCommerce CRM using React with Node.js and GraphQL
    <br>
</p>

## 📝 Table of Contents

- [View Live Site](#live-site)
- [Quick Start](#quick-start)
- [About](#about)
- [System Architecture](#architecture)
- [File Structure](#file-structure)
- [Getting Started](#getting_started)
- [Testing](#tests)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)
  <!-- - [TODO](../TODO.md) -->
  <!-- - [Contributing](../CONTRIBUTING.md) -->

## ▶️ View Live Site <a name = "live-site"></a>

See the live project @ [https://quadrant-basic-test.netlify.app/](https://quadrant-basic-test.netlify.app/) hosted on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/75d4747b-85ce-4fa7-8ba5-769a47fac224/deploy-status)](https://app.netlify.com/sites/quadrant-basic-test/deploys)

## 💨 Quick Start <a name = "quick-start"></a>

_Requires npm and node_

###### Run:

```
git clone https://github.com/toreylittlefield/quadrant-basic-test-challenge.git
```

```
cd quadrant-basic-test-challenge
```

```
cd client
npm install
npm start
```

```
cd server
npm install
npm start
```

## 🧐 About <a name = "about"></a>

This repo consists of a React Single Page Application that demonstrates a single client facing component for adding, editing, and deleting existing fashion items & listings in a larger eCommerce CRM. The backend is built with Node.js and runs an Express GraphQL server which queries & mutations item & listing data for the CRM.

## 🏗 System Architecture <a name = "architecture"></a>

<p align="left">
  <a href="https://github.com/toreylittlefield/quadrant-basic-test-challenge/tree/main/project-files" rel="noopener">
 <img height=550 src="https://raw.githubusercontent.com/toreylittlefield/quadrant-basic-test-challenge/main/project-files/Quadrant%20React%20Basic-Test.png" alt="Project Draw.io System Architecture"></a>
</p>

## 📁 File Structure <a name = "file-structure"></a>

#### Frontend

```
├ client/
├── src/
| ├── components/
| | ├── Buttons/...
| | ├── ImageLoader/...
| | ├── Inputs/...
| | ├── Navs/...
| | └── index.js // <- All Styled Components
| |
| ├── utils/
| |  └── ... <- All Utilities
| |
| ├── ui/
| | ├── globalstyles.js <- For Global themeing
| | └── ...
| |
| ├── screens/
| |  └── MainPage.js <- Only Page View
| |
| ├── Apollo/ <-- Apollo GraphQL Services
| | ├── queries.js
| | └── mutations.js
| |
| ├── assets/ <-- Icons/Images
| | ├── images/...
| | └── icons/...
| |
| └── __tests__/ <- Our Client Tests
|  ├── ...test.js
|  └── App.test.js
|
├── App.js <- React App & Apollo Client Instance
└── public/
  └── index.html
```

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

System Requirements

- npm v6.14.5+
- Node.js v12.18+

To check Node & npm versions run:

```
npm -v
node -v
```

For installation & downloading Node.js & npm see:
[Setup Node & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installing

Local Development Installation Instructions Are As Follows

- Clone the repo:

```
git clone https://github.com/toreylittlefield/quadrant-basic-test-challenge.git
```

- Open the directory

```
cd quadrant-basic-test-challenge
```

##### Client (Frontend)

To run the React App client on port 3000

- Open the terminal at the root project directory & run

```
cd client
npm install
npm start
```

Then open the developer React server @ http://localhost:3000/

##### Express GraphQL Server (Backend)

To run the Express GraphQL Server on port 4000

- Open the terminal at the root project directory & run

```
cd server
npm install
npm start
```

Optional: run the Express GraphQL server playground @ http://localhost:4000/graphql

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

##### Frontend

- [Styled Components](https://styled-components.com/) - CSS-in-JS Styling Library
- [Material UI](https://material-ui.com/) - React Component Library
- [React](https://reactjs.org/) - UI JS Library -> _Created with [create-react-app](https://github.com/facebookincubator/create-react-app)_
- [Apollo Client](https://www.apollographql.com/docs/react) - State | Store Management For GraphQL
- **Optional** --- [Redux-Toolkit](https://redux-toolkit.js.org/) - State | Store Management

##### Backend

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Express GraphQL](https://github.com/graphql/express-graphql) - GraphQL Express Server Middleware
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL Server
- **Optional** --- [MongoDB / PostgresSQL](https://www.mongodb.com/) - Database / Store

## ✍️ Authors <a name = "authors"></a>

- [@toreylittlefield](https://github.com/toreylittlefield) - The one who completed this project

- [@kukielp](https://github.com/kukielp) - Mentor & reviewer for this project (thanks!)

<!-- See also the list of [contributors](https://github.com/toreylittlefield/quadrant-basic-test-challenge/contributors) who participated in this project. -->

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Special thanks to Paul K. for providing his time, knowledge, mentorship, and for pushing me to build out this challenge.
<!-- - Hat tip to anyone whose code was used
- Inspiration
- References -->
