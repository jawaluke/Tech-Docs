module.exports = {
    verbose: true,  // full ouput detail
    collectCoverage: true, // showing code coverage
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    testRegex: '/test/.*\\.(test|spec)?\\.(ts|tsx)$', // test directory and file path match regex
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };