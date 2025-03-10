const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean the bin directory first to avoid any stale files
const binDir = path.join(__dirname, 'bin');
if (fs.existsSync(binDir)) {
  console.log('Cleaning output directory...');
  fs.rmSync(binDir, { recursive: true, force: true });
}

// Build CommonJS version
console.log('Building CommonJS modules...');
execSync('tsc', { stdio: 'inherit' });

// Build ESM version
console.log('Building ESM modules...');
execSync('tsc -p tsconfig.esm.json', { stdio: 'inherit' });

// Process ESM files
function processEsmFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processEsmFiles(fullPath);
    } else if (entry.name.endsWith('.js') && !entry.name.includes('.d.')) {
      // Create a copy for ESM with .mjs extension
      const mjsPath = fullPath.replace(/\.js$/, '.mjs');
      let content = fs.readFileSync(fullPath, 'utf8');

      // Update import paths in the ESM file
      content = content.replace(/from\s+["'](.+?)["'];/g, (match, importPath) => {
        if (importPath.startsWith('.') && !importPath.endsWith('.json')) {
          return match.replace(/["'](.+?)["']/, `"${importPath}.mjs"`);
        }
        return match;
      });

      fs.writeFileSync(mjsPath, content);
    }
  }
}

processEsmFiles(binDir);
console.log('Build completed successfully!');

// Verify the build
if (!fs.existsSync(path.join(binDir, 'index.js'))) {
  console.error('ERROR: CommonJS entry point is missing!');
  process.exit(1);
}

if (!fs.existsSync(path.join(binDir, 'index.mjs'))) {
  console.error('ERROR: ESM entry point is missing!');
  process.exit(1);
}

if (!fs.existsSync(path.join(binDir, 'index.d.ts'))) {
  console.error('ERROR: TypeScript declarations are missing!');
  process.exit(1);
}

console.log('Build verification successful!');