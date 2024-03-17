const HTMLObfuscator = require('../');
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'demo.html'), 'utf8');

console.log(
    HTMLObfuscator.obfuscate(content)
);