# Noob

Noob is a project scaffold that attempts to give noobs like myself the ability to quickly start a web ui with all of the necessary configurations and tooling already setup.

## Getting Started

You will want to download the latest release of the repository.

Install the required dependencies:

```bash
# with node package manager
npm i
```

Make a copy of the example environment variables file. The file by default isn't tracked on git.

```bash
cp .env.example .env
```

Make sure you have both [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed. If not, checkout their website for more information.

```bash
# with npm
npm run dev
```

## Technologies Included

Noob's core is built using the following technologies:

- [React.js](https://reactjs.org/): A library used for building client facing web applications.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript which adds static type definitions.

Quality of development tools and libraries:

- [Prettier](https://prettier.io/): A opinionated code formatter which supports JSX/Typescript.
- [ESLint](https://eslint.org/): Static code analyzer to quickly find problems. Also gives us the ability to enforce google coding style standard.
- [Husky](https://typicode.github.io/husky/): A tool to make git hooks easy, this improves your commits, and helps run tests pre-commit!
- [Jest](https://jestjs.io/): A Javascript testing framework focused on simplicity.
- [Enzyme](https://enzymejs.github.io/enzyme/): A Javascript testing utility for React.
- [Plop](https://plopjs.com/): A tool used to generate code using a handlebars template.

## Out of the Box Features

- Docker Compose setup for local development
- Enforced code styling
- Testing
- Git Hooks
- Functional component generation

## Coming soon

- Production ready Dockerfile
- Example implementation of Context API
- Example protected pages
- Helm chart
