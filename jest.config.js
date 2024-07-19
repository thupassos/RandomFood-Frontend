module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios/.*)"
    ],
  };
  
  module.exports = {
    setupFilesAfterEnv: ['E:\RandomFood\RandomFoodApp\src\jest.setup.js'],
  };
  
  