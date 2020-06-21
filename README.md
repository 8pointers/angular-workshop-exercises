# Modern Web Applications With Angular and TypeScript

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.

## Prerequisites

- git client
- NodeJS 14.4.0+ & NPM 6.14.4+
- Recommended Visual Studio Code extensions:
  - [Angular/Karma Test Explorer](https://marketplace.visualstudio.com/items?itemName=raagh.angular-karma-test-explorer)
  - [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=angular.ng-template)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Quick Start

```bash
git clone https://github.com/8pointers/angular-workshop-exercises.git
cd angular-workshop-exercises
npm install
npm start
```

## Development server

Starting development server:

```bash
npm start ex02-component
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Code scaffolding

Creating a new component:

```bash
npm run-script generate component message-of-the-day -- --project=ex02-component
```

## Build

Building a project:

```bash
npm run-script build ex02-component -- --prod=true
```

The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Running unit tests via [Karma](https://karma-runner.github.io):

```bash
npm test ex99-koans
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
