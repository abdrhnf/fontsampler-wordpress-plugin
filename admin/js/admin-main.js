/**
 * Fontsampler Admin Entry Point (ES6)
 * Webpack build - imports existing admin modules
 */

// Import jQuery (externalized)
import $ from 'jquery';

// Import admin modules
import './admin-font-upload';
import './admin-layout';
import './admin-ui';

// Export for global access
window.FontsamplerAdmin = {
    version: '0.5.0-webpack',
    initialized: true,
};

console.log('Fontsampler Admin loaded (Webpack build)');