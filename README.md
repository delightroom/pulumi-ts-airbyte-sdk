# Pulumi Airbyte SDK

This SDK allows you to manage Airbyte resources using Pulumi.

## Installation

```bash
npm install @delightroom/pulumi-airbyte-sdk
```

## Usage

### TypeScript/JavaScript (ESM)

```typescript
import * as airbyte from '@delightroom/pulumi-airbyte-sdk';

// Create a new Airbyte resource
const resource = new airbyte.Resource("my-resource", {
  // configuration
});
```

### JavaScript (CommonJS)

```javascript
const airbyte = require('@delightroom/pulumi-airbyte-sdk');

// Create a new Airbyte resource
const resource = new airbyte.Resource("my-resource", {
  // configuration
});
```

### Pulumi Program

When using this SDK in a Pulumi program, make sure your `tsconfig.json` has the appropriate module settings:

```json
{
  "compilerOptions": {
    "module": "commonjs",  // Use "commonjs" for Node.js environments
    "esModuleInterop": true,
    // other settings...
  }
}
```

## Troubleshooting

### "Cannot use import statement outside a module"

If you see this error, you're trying to use ESM syntax in a CommonJS environment. Make sure you're using `require()` instead of `import` in CommonJS environments:

```javascript
// ❌ Don't do this in CommonJS
import * as airbyte from '@delightroom/pulumi-airbyte-sdk';

// ✅ Do this instead
const airbyte = require('@delightroom/pulumi-airbyte-sdk');
```

### "Module not found"

Make sure you've installed the package and that your import/require path is correct:

```bash
npm install @delightroom/pulumi-airbyte-sdk
```

## Build

```
npm run generate
npm run build
```

## Publish

```
npm run publish
```

## Dual Module Support

This package supports both CommonJS and ES Modules:

### CommonJS Usage
```js
const airbyte = require('@delightroom/pulumi-airbyte-sdk');
```

### ES Modules Usage
```js
import * as airbyte from '@delightroom/pulumi-airbyte-sdk';
```