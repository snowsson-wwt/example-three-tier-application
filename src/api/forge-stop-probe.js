/**
 * Standalone command dispatcher for the completion probe.
 * 
 * @param {string} path - The request path to check
 * @returns {string|null} - 'ready' if path matches '/forge-stop-probe', null otherwise
 */
function forgeStopProbe(path) {
  if (path === '/forge-stop-probe') {
    return 'ready';
  }
  return null;
}

module.exports = forgeStopProbe;
