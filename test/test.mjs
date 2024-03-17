import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { obfuscate } from '../index.js';

test('obfuscate', () => {
    const source = 'Hello World!';
    const out = '<script>document.write(unescape(\'%48%65%6C%6C%6F%20%57%6F%72%6C%64%21\'))</script>';

    equal(obfuscate(source), out);
});

test.run();