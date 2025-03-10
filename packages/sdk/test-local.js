const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a temporary test directory
const testDir = path.join(__dirname, 'test-local');
if (fs.existsSync(testDir)) {
  fs.rmSync(testDir, { recursive: true, force: true });
}
fs.mkdirSync(testDir);

// Create a simple test project
fs.writeFileSync(path.join(testDir, 'package.json'), JSON.stringify({
  "name": "test-local",
  "version": "1.0.0",
  "dependencies": {
    "@delightroom/pulumi-airbyte-sdk": "file:../"
  }
}));

fs.writeFileSync(path.join(testDir, 'index.js'), `
// Test CommonJS
const airbyte = require('@delightroom/pulumi-airbyte-sdk');
console.log('CommonJS import successful:', !!airbyte);
`);

fs.writeFileSync(path.join(testDir, 'index.mjs'), `
// Test ESM
import * as airbyte from '@delightroom/pulumi-airbyte-sdk';
console.log('ESM import successful:', !!airbyte);
`);

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { cwd: testDir, stdio: 'inherit' });

// Run tests
console.log('\nTesting CommonJS import:');
try {
  execSync('node index.js', { cwd: testDir, stdio: 'inherit' });
  console.log('✅ CommonJS test passed');
} catch (error) {
  console.error('❌ CommonJS test failed');
  process.exit(1);
}

console.log('\nTesting ESM import:');
try {
  execSync('node index.mjs', { cwd: testDir, stdio: 'inherit' });
  console.log('✅ ESM test passed');
} catch (error) {
  console.error('❌ ESM test failed');
  process.exit(1);
}

console.log('\nAll tests passed! 🎉');