# React Vessel
![npm](https://img.shields.io/npm/v/@mornya/react-vessel)
![node](https://img.shields.io/node/v/@mornya/react-vessel)
![NPM](https://img.shields.io/npm/l/@mornya/react-vessel)
<br>Copyright 2020. mornya. All rights reserved.

## About
SPA 형태의 React.js 앱 개발을 위한 TypeScript 기반의 코드 템플릿을 생성해 주는 프로젝트. 빠른 개발/배포를 위해 초기 환경을 미리 설정해 두어, 컴파일/테스트/앱 개발 등 관련 세부 설정에 대해 신경쓰지 않고 코드 개발에 집중하도록 React.js 앱 스케폴딩을 제공.

## Features
- TypeScript / ES6+ support with [TypeScript](https://www.typescriptlang.org/).
- No Babel
- Linting TypeScript / JavaScript codes with [ESLint](http://eslint.org/).
- Testing codes with [Jest](https://facebook.github.io/jest/).
- Your package can be created with a template, and fewer preferences.
- Code developed with [React.js](https://reactjs.org/) is bundled via [Webpack](https://webpack.js.org/) and extracts static resources.

## Installation
생성된 프로젝트의 빌드/테스트 등 개발 전반에 필요한 `react-vessel`은 기본적으로 전역 모듈로 설치되어 있어야 한다.<br>
아래와 같이 커맨드 라인에서 실행 가능하도록 한다.
> `npm` 대신 `yarn` 사용시, 프로젝트 루트 경로에 `package-lock.json` 파일이 존재하면 제거하고 `yarn.lock` 파일만 참조되도록 한다.
```bash
$ npm install -g @mornya/react-vessel
or
$ yarn global add @mornya/react-vessel
```

## Available scripts
`package.json`에 정의된 script 항목에 대한 내용은 아래와 같다.

### `start`
> HMR 및 react-hot-loader 등이 적용된 로컬 개발 서버를 실행한다. 루트 디렉토리의 `.env` 파일이 참조되어 로컬 개발 서버의 호스트명, 접속 포트 등을 설정 할 수 있다.
```bash
$ npm start
$ npm run serve
$ npm run dev
```

### `analyze`
> `production mode`로 컴파일된 번들의 용량을 체크한다. `file` 파라미터를 추가하면 프로젝트 루트 경로에 `stats.json` 파일을 출력한다.
```bash
$ npm run analyze
$ npm run analyze file
```

### `clean`
> 빌드 output 디렉토리 경로를 삭제한다.
```bash
$ npm run clean
```

### `build`
> 작성된 모듈들은 TypeScript 컴파일러에 의해 트랜스파일링 된 후 minify를 거쳐 `./dist` 디렉토리에 출력된다.<br>
 tsconfig.json 설정에 따라 트랜스파일이 진행되며, 완료시 웹 서비스가 가능한 환경을 제공한다.
```bash
$ npm run build
```

### `lint`
> ESLint를 실행하여 문법 오류 등을 체크한다.
```bash
$ npm run lint
```

### `lint:fix`
> ESLint를 실행하여 문법 오류 등을 체크 및 자동으로 고친다.
```bash
$ npm run lint:fix
```

### `test`
> Jest를 실행하여 테스트케이스를 수행한다.
```bash
$ npm run test
```

### `test:watch`
> Jest를 실행하여 watch mode로 테스트케이스를 수행한다.
```bash
$ npm run test:watch
```

### `Test:coverage`
> Jest를 실행하여 테스트 커버리지 데이터를 수집하여 `/coverage` 디렉토리에 출력한다.
```bash
$ npm run test:coverage
```
