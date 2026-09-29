const assert = require('assert');

/**
 * Handles main health probe command
 * @param {string} path - The request path
 * @returns {string|null} Returns 'healthy' for '/main-health-probe', null otherwise
 */
function handleMainHealthCommand(path) {
  if (path === '/main-health-probe') {
    return 'healthy';
  }
  return null;
}

// Verification with node assertions
assert.strictEqual(handleMainHealthCommand('/main-health-probe'), 'healthy', 
  'Should return "healthy" for /main-health-probe');
assert.strictEqual(handleMainHealthCommand('/other-path'), null, 
  'Should return null for other paths');
assert.strictEqual(handleMainHealthCommand(''), null, 
  'Should return null for empty string');

module.exports = handleMainHealthCommand;
