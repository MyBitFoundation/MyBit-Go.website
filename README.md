# MyBit.io

🌎 MyBit.io Website 2.0 powered by [Next.js 4](https://github.com/zeit/next.js/)

## Features

* ⚡️ [Server Side Rendering (SSR)](https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8) w/Static HTML Export for improved SEO
* 🛠 Automatic Linting and Code Formatter w/[Xo](https://github.com/sindresorhus/xo) and [Prettier](https://github.com/prettier/prettier)
* 💅🏻 Dynamic Website and Styles w/[React.js v16.0](https://reactjs.org/) and [Styled JSX 2](https://github.com/zeit/styled-jsx)

## Requirements

* [Node v8.x >](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

## Setup

### Install

```shell
$ yarn
```

### Development

```shell
$ PORT=8080 yarn dev
```

### Deployment

```shell
$ yarn build
$ cd out && python -m SimpleHTTPServer 8080
```