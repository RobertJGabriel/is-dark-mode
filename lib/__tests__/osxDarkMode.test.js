const isDarkMode = require('../index.js');

describe('isDarkMode testing', () => {
  it('Is the theme dark', () => {
    const testResult = isDarkMode().then(data => expect(data).toEqual(true));
    return testResult;
  });
});
