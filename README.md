# Noob

Noob is a project scaffold that attempts to give noobs like myself the ability to quickly start a frontend client with all of the necessary configurations setup.

## Getting Started

You will want to download the latest release of the repository.

Install the required dependencies:

```bash
# with node package manager
npm i
# with yarn
yarn
```

Make a copy of the example environment variables file. The file by default isn't tracked on git.

```bash
cp .env.example .env
```

Make sure you have both [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed. If not, checkout their website for more information.

```bash
# with npm
npm run dev
# with yarn
yarn dev
```

## Technologies Included

Noob's core is built using the following technologies:

- [React.js](https://reactjs.org/): A library used for building client facing web applications.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript which adds static type definitions.

Quality of development tools and libraries:

- [Prettier](https://prettier.io/): A opinionated code formatter which supports JSX/Typescript.
- [ESLint](https://eslint.org/): Static code analyzer to quickly find problems. Also gives us the ability to enforce google coding style standard.
- [Husky](https://typicode.github.io/husky/): A tool to make git hooks easy, this improves your commits, and helps run test pre-commit!

## Out of the Box Features

- Production ready Dockerfile
- Docker Compose for easy local development and hot reloading
- Trunk based development

## Coming soon

- Add testing with Jest
- Auto Generate components/tests
- Example protected pages
