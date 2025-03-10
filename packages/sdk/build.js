const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Clean the bin directory first to avoid any stale files
const binDir = path.join(__dirname, 'bin');
if (fs.existsSync(binDir)) {
  console.log('Cleaning output directory...');
  fs.rmSync(binDir, { recursive: true, force: true });
}

try {
  // Build TypeScript
  console.log('Building TypeScript...');
  execSync('tsc', { stdio: 'inherit' });

  // Create ESM versions by copying and renaming
  console.log('Creating ESM versions...');
  function createEsmVersions(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        createEsmVersions(fullPath);
      } else if (entry.name.endsWith('.js') && !entry.name.includes('.d.')) {
        // Create a copy for ESM with .mjs extension
        const mjsPath = fullPath.replace(/\.js$/, '.mjs');
        fs.copyFileSync(fullPath, mjsPath);
      }
    }
  }

  createEsmVersions(binDir);
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

  // Add this after creating ESM versions
  console.log('Fixing package.json references...');
  function fixPackageJsonReferences(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        fixPackageJsonReferences(fullPath);
      } else if (entry.name.endsWith('.js') || entry.name.endsWith('.mjs')) {
        let content = fs.readFileSync(fullPath, 'utf8');

        // Replace relative package.json references with the correct path
        content = content.replace(
          /require\(['"]\.\/package\.json['"]\)/g,
          `{version: "${require('./package.json').version}"}`
        );

        content = content.replace(
          /import\s+.*\s+from\s+['"]\.\/package\.json['"]/g,
          `const packageJson = {version: "${require('./package.json').version}"}`
        );

        fs.writeFileSync(fullPath, content);
      }
    }
  }

  fixPackageJsonReferences(binDir);

  // Add this after cleaning the bin directory
  console.log('Creating version file...');
  const versionContent = `
  // This file is auto-generated during the build process
  exports.version = "${require('./package.json').version}";
  `;
  fs.mkdirSync(binDir, { recursive: true });
  fs.writeFileSync(path.join(binDir, 'version.js'), versionContent);

  // Also create an ESM version
  const esmVersionContent = `
  // This file is auto-generated during the build process
  export const version = "${require('./package.json').version}";
  `;
  fs.writeFileSync(path.join(binDir, 'version.mjs'), esmVersionContent);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}