import fs from 'fs';
import path from 'path';

const manifest = JSON.parse(fs.readFileSync('public/build/manifest.json', 'utf8'));

// Extract all Vue component paths
const vueFiles = Object.keys(manifest)
    .filter(k => k.startsWith('resources/js/') && k.endsWith('.vue'))
    .sort();

console.log(`Found ${vueFiles.length} Vue components`);

for (const filePath of vueFiles) {
    const compiledFile = manifest[filePath].file;
    const dir = path.dirname(filePath);
    const componentName = path.basename(filePath, '.vue');

    // Create directory
    fs.mkdirSync(dir, { recursive: true });

    // Create stub Vue SFC
    const stub = `<template>
  <!-- TODO: Reconstruct template from ${compiledFile} -->
  <div>
    <h1>${componentName}</h1>
  </div>
</template>

<script setup>
// Compiled from: ${compiledFile}
// Manifest key: ${filePath}
</script>
`;

    fs.writeFileSync(filePath, stub);
    console.log(`Created: ${filePath}`);
}

console.log(`\nDone! Created ${vueFiles.length} Vue component stubs.`);
