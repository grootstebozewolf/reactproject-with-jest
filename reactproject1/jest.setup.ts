// Increase the stack trace limit to help with debugging
// TypeScript understands this property directly on Error
(Error as any).stackTraceLimit = Infinity;

// Import and configure source maps support for better debugging
import sourceMapSupport from 'source-map-support';

// Configure source maps support
sourceMapSupport.install({
    handleUncaughtExceptions: false // Handle exceptions in the application code, not in Jest
});

// Import Jest DOM matchers for better assertions on the DOM
import '@testing-library/jest-dom';
