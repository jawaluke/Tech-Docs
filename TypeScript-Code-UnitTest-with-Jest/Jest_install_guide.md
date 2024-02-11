## Start by adding Jest as a development dependency. In the root of the project folder, execute the following:

```
npm install jest --save-dev
```

## For the next step, you’ll have to install the ts-jest package to bridge the path between TypeScript and Jest, so to speak:

```
npm install ts-jest --save-dev
```

## Finally, you must install the type definitions for Jest:

```
npm install @types/jest --save-dev
```

## create an additional file called “jest.config.js” at the root of the project. It should have the following content:

```
 module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/test/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```


## Now Run with Node command

in, package.json
```
"scripts": {
    "test":"jest"
}
```
and Run,
```
npm run test
```