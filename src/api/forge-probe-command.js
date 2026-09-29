const assert = require('assert');

/**
 * Handles forge probe commands
 * @param {string} command - The command to handle
 * @returns {string|null} Returns 'pong' for '/forge-probe-ping', null otherwise
 */
function handleForgeProbeCommand(command) {
  if (command === '/forge-probe-ping') {
    return 'pong';
  }
  return null;
}

// Verification tests using node assertions
assert.strictEqual(handleForgeProbeCommand('/forge-probe-ping'), 'pong', 
  'Should return "pong" for /forge-probe-ping command');
assert.strictEqual(handleForgeProbeCommand('/other-command'), null, 
  'Should return null for any other command');
assert.strictEqual(handleForgeProbeCommand(''), null, 
  'Should return null for empty string');
assert.strictEqual(handleForgeProbeCommand('/forge-probe-other'), null, 
  'Should return null for similar but different command');

console.log('All assertions passed successfully!');

module.exports = { handleForgeProbeCommand };
