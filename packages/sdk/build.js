const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build CommonJS version
console.log('Building CommonJS modules...');
execSync('tsc', { stdio: 'inherit' });

// Build ESM version
console.log('Building ESM modules...');
execSync('tsc -p tsconfig.esm.json', { stdio: 'inherit' });

// Rename ESM output files to .mjs
const binDir = path.join(__dirname, 'bin');
function renameJsToMjs(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            renameJsToMjs(fullPath);
        } else if (entry.name.endsWith('.js') && !entry.name.includes('.d.')) {
            const newPath = fullPath.replace(/\.js$/, '.mjs');
            fs.renameSync(fullPath, newPath);

            // Update import paths in the file
            if (fs.existsSync(newPath)) {
                let content = fs.readFileSync(newPath, 'utf8');
                content = content.replace(/from\s+["'](.+?)["'];/g, (match, importPath) => {
                    if (importPath.startsWith('.') && !importPath.endsWith('.json')) {
                        return match.replace(/["'](.+?)["']/, `"${importPath}.mjs"`);
                    }
                    return match;
                });
                fs.writeFileSync(newPath, content);
            }
        }
    }
}

renameJsToMjs(binDir);
console.log('Build completed successfully!');