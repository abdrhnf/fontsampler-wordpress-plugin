/**
 * Fontsampler Frontend Entry Point (ES6)
 * Webpack build - imports existing jQuery-based modules
 */

// Import jQuery (externalized in webpack config, uses WordPress jQuery)
import $ from 'jquery';

// Import existing modules
// Note: These are still jQuery-based, gradual migration to pure ES6
import './fontsampler-init';
import './ui-setup';
import './selection';
import './specimentools-init';

// Export for global access if needed
window.FontsamplerModern = {
    version: '0.5.0-webpack',
    initialized: true,
};

console.log('Fontsampler loaded (Webpack build)');
