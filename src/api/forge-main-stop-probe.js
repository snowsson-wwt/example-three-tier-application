/**
 * Standalone main deployment stop probe for safe inspection
 * 
 * This probe provides a simple health check endpoint that allows maintainers
 * to verify deployment status before proceeding with further operations.
 * 
 * @module forge-main-stop-probe
 * 
 * @example
 * // Example 1: Basic usage in an Express-like handler
 * const probe = require('./forge-main-stop-probe');
 * app.use((req, res, next) => {
 *   const result = probe(req.path);
 *   if (result !== null) {
 *     res.send(result);
 *   } else {
 *     next();
 *   }
 * });
 * 
 * @example
 * // Example 2: Direct invocation for the probe path
 * const probe = require('./forge-main-stop-probe');
 * const status = probe('/main-stop-probe');
 * console.log(status); // Outputs: 'ready'
 * 
 * @example
 * // Example 3: Non-matching path returns null
 * const probe = require('./forge-main-stop-probe');
 * const status = probe('/other-endpoint');
 * console.log(status); // Outputs: null
 * 
 * @example
 * // Example 4: Testing with different path variations
 * const probe = require('./forge-main-stop-probe');
 * probe('/main-stop-probe');      // Returns: 'ready'
 * probe('/main-stop-probe/');     // Returns: null (exact match required)
 * probe('/api/main-stop-probe');  // Returns: null (no prefix matching)
 * probe('');                       // Returns: null (empty path)
 * 
 * @example
 * // Example 5: Integration with health check monitoring
 * const probe = require('./forge-main-stop-probe');
 * function checkDeploymentHealth(path) {
 *   const status = probe(path);
 *   if (status === 'ready') {
 *     console.log('Deployment is ready for inspection');
 *     return true;
 *   }
 *   return false;
 * }
 * checkDeploymentHealth('/main-stop-probe'); // true
 */

/**
 * Check if the given path matches the main stop probe endpoint
 * 
 * @param {string} path - The request path to check
 * @returns {string|null} Returns 'ready' if path is '/main-stop-probe', null otherwise
 */
module.exports = function forgeMainStopProbe(path) {
  if (path === '/main-stop-probe') {
    return 'ready';
  }
  return null;
};
