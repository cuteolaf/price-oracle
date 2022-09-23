# RESTful API using Node.js, Express, Mongoose & TypeScript

![technologies](https://user-images.githubusercontent.com/43285317/45602339-ae69a100-b9d9-11e8-919b-a41b1c2fa66e.png)

This is a boilerplate for building scalable and robust REST APIs using Node.js & TypeScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Available Routes](#available-routes)
  - [Available Scripts](#available-scripts)
- [To Do](#to-do)
- [License](#license)

## Prerequisites

You need to install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) either on your local machine or using a cloud service as [mLab](https://mlab.com/).

## Features

- [TypeScript](https://www.typescriptlang.org/) as Language

- Framework: [Express.js](https://expressjs.com/)

- ODM: [Mongoose](https://mongoosejs.com/)

- Linting and formatting code using [TSLint](https://palantir.github.io/tslint/) & [Prettier](https://prettier.io/)

- Easy configuration of environment variables thanks to [dotenv](https://github.com/motdotla/dotenv)

- [EditorConfig](https://editorconfig.org/)
  for maintain consistent coding style

- [Morgan](https://github.com/expressjs/morgan)
  for logging request

- Using the last ES6 / ES7 features as `async-await`

- Versioned routes for better scalability

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Rename the file `.env.example` to `.env`, then you need to configure the file `config.ts` located in `src/config`

3. Start the app using `npm run dev`

4. After that, go to: `http://localhost:3000/v1/users`

### Available routes

| Method   | Resource        | Description                                                                                                                                 |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET`    | `/v1/price?name=ETH`        | Returns the price of token.                                                                                           |
| `GET`    | `/v1//sign?list=ETH,BNB&date=1663883649`    | Returns the signed data with token name, price and date |
| `GET`    | `/v1/verify?list=ETH,BNB&date=1663883649&signedData=0x12356`    | Verify if the inputed signature is correct |

### Available scripts

- `build` - Transpile TypeScript to ES6,
- `lint` - Lint your TS code,
- `dev` - To run the app without transpile to ES6,
- `clean` - Remove dist, node_modules, coverage folders,
- `start` - Run the transpiled app
- `prod` - Build & run the transpiled app



## License

MIT © Auto Inspector
