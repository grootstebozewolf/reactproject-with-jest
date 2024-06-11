// jest.setup.js

// Increase the stack trace limit to help with debugging
Error.stackTraceLimit = Infinity;

// Configure source maps support
require('source-map-support').install({
    handleUncaughtExceptions: false // Handle exceptions in the application code, not in Jest
});

// Additional Jest setup can go here if needed

import '@testing-library/jest-dom';
