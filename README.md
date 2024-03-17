# html-obfuscator

Extremely simple HTML obfuscator.

Inspired by [snapbuilder.com](http://snapbuilder.com/code_snippet_generator/obfuscate_html_source_code/).

> [!WARNING]
> Unless you are working with just plain HTML files, you probably want to use something more advanced instead.

## Example

`demo.html`

```html
<div>
    <h1>Hello World!</h1>
</div>
<style>
    div {
        display: flex;
        justify-content: center;
    }
</style>
```

Read `demo.html` file and obfuscate it.

```js
const { obfuscate } = require('html-obfuscator');
const fs = require('fs');
const source = fs.readFileSync('demo.html');

const out = obfuscate(source);
```

Result:

```html
<script>document.write(unescape('%3C%64%69%76%3E%0A%20%20%20%20%3C%68%31%3E%48%65%6C%6C%6F%20%57%6F%72%6C%64%21%3C%2F%68%31%3E%0A%3C%2F%64%69%76%3E%0A%3C%73%74%79%6C%65%3E%0A%20%20%20%20%64%69%76%20%7B%0A%20%20%20%20%20%20%20%20%64%69%73%70%6C%61%79%3A%20%66%6C%65%78%3B%0A%20%20%20%20%20%20%20%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%3A%20%63%65%6E%74%65%72%3B%0A%20%20%20%20%7D%0A%3C%2F%73%74%79%6C%65%3E'))</script>
```

## CLI Usage

```
html-obfuscator <filepath|text>
```

If the argument is a path and exists, it will be used, otherwise the arguments themselves will be treated as HTML and obfuscated.

## License

MIT