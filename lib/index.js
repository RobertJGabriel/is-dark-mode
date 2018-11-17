'use strict';
const runJXA = require('run-jxa');

const PROP = `Application('System Events').appearancePreferences.darkMode`;

function isDarkMode() {
  let isMac = process.platform === 'darwin';
  let result = new Promise(resolve => {
    if (isMac === true) {
      return resolve(runJXA(`return ${PROP}()`));
    }
    if (isMac === false) {
      return resolve(false);
    }
  });

  return result
    .then(value => {
      return value;
    })
    .catch(error => {
      return error;
    });
}

module.exports = isDarkMode;
