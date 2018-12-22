# Exercises for the Modern Web Applications With Angular and TypeScript workshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Prerequisites

- git client
- NodeJS 10.14.2+ & NPM 6.4.1+
- Recommended Visual Studio Code extensions:
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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
npm run-script start ex01-intro
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
npm run-script test ex99-koans
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
