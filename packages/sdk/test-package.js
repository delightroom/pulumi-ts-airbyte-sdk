// Test CommonJS import
try {
  const cjsImport = require('./bin/index.js');
  console.log('✅ CommonJS import successful');
} catch (error) {
  console.error('❌ CommonJS import failed:', error);
  process.exit(1);
}

// Test ESM import (using dynamic import)
(async () => {
  try {
    const esmImport = await import('./bin/index.mjs');
    console.log('✅ ESM import successful');
  } catch (error) {
    console.error('❌ ESM import failed:', error);
    process.exit(1);
  }
})();