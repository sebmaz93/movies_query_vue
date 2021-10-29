[![Deploy](https://github.com/sebmaz93/movies_query_vue/actions/workflows/deploy.yml/badge.svg)](https://github.com/sebmaz93/movies_query_vue/actions/workflows/deploy.yml)
[![Lint and Format](https://github.com/sebmaz93/movies_query_vue/actions/workflows/lint.yml/badge.svg)](https://github.com/sebmaz93/movies_query_vue/actions/workflows/lint.yml)
[![Test](https://github.com/sebmaz93/movies_query_vue/actions/workflows/test.yml/badge.svg)](https://github.com/sebmaz93/movies_query_vue/actions/workflows/test.yml)

# Movies DB

Techstack [vue 3](https://v3.vuejs.org/) + [vitejs](https://vitejs.dev/) + [Typescript](https://www.typescriptlang.org/)

Mocking [MSW](https://mswjs.io/)

Testing: [Jest](https://jestjs.io/) + [testing library](https://testing-library.com/docs/vue-testing-library/intro/)

## Getting started
1. clone the repo
2. install deps `npm i`
3. run `npm start`
4. visit [localhost:3000](http://localhost:3000/) in ur browser
5. you can see the app! 🎉

## How to use the app
1. at first there won't be any movies
2. click search without any input to see the default movies
3. type a movie name and search with keyword
4. set filters and search again
5. pressing next / prev paginations will query the next/prev page

## scripts

`npm start`  start dev server

`npm build`  build for production

`npm run serve` start prod preview after build

`npm run lint`  lint the project

`npm run lint:fix`  lint the project and fixing issues

`npm test` run unit tests

`npm run test:w` run unit tests in watch mode

`npm run test:coverage` run unit tests and generate coverage report

`npm run format` format the code with prettier