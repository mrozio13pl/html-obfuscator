# HTML Obfuscator [![Version](https://img.shields.io/static/v1?label=Version&message=1.0.0&color=blue)](https://www.npmjs.com/package/html-obfuscator) [![License](https://img.shields.io/badge/licence-MIT-green)](https://github.com/mrozio13pl/html-obfuscator/blob/main/LICENSE) [![Build Passing](https://img.shields.io/badge/build-passing-success)](https://www.npmjs.com/package/html-obfuscator)

##### A simple html obfuscator that makes code harder to read and understand

#### BEFORE:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello</title>
</head>
<body>
    <div>
        <p style="text-align: center">Hello world!</p>
    </div>
</body>
</html>
```

#### AFTER:

```html
<script>document.write(unescape('%3C%21%44%4F%43%54%59%50%45%20%68%74%6D%6C%3E%0D%0A%3C%68%74%6D%6C%20%6C%61%6E%67%3D%22%65%6E%22%3E%0D%0A%3C%68%65%61%64%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%63%68%61%72%73%65%74%3D%22%55%54%46%2D%38%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%68%74%74%70%2D%65%71%75%69%76%3D%22%58%2D%55%41%2D%43%6F%6D%70%61%74%69%62%6C%65%22%20%63%6F%6E%74%65%6E%74%3D%22%49%45%3D%65%64%67%65%22%3E%0D%0A%20%20%20%20%3C%6D%65%74%61%20%6E%61%6D%65%3D%22%76%69%65%77%70%6F%72%74%22%20%63%6F%6E%74%65%6E%74%3D%22%77%69%64%74%68%3D%64%65%76%69%63%65%2D%77%69%64%74%68%2C%20%69%6E%69%74%69%61%6C%2D%73%63%61%6C%65%3D%31%2E%30%22%3E%0D%0A%20%20%20%20%3C%74%69%74%6C%65%3E%44%6F%63%75%6D%65%6E%74%3C%2F%74%69%74%6C%65%3E%0D%0A%3C%2F%68%65%61%64%3E%0D%0A%3C%62%6F%64%79%3E%0D%0A%20%20%20%20%68%65%6C%6C%6F%0D%0A%3C%2F%62%6F%64%79%3E%0D%0A%3C%2F%68%74%6D%6C%3E'))</script>
```

## Installation

##### Before installing, [download NodeJS](https://nodejs.org). v14.18.0 and higher are recommended.
####  
```bash 
npm i html-obfuscator
```
## Examples
```js
var obfuscate = require('html-obfuscator')

// index.html is <p>Hello World</p>

console.log(obfuscate('index.html'))

// <script>document.write(unescape('%3C%70%3E%48%65%6C%6C%6F%20%57%6F%72%6C%64%3C%2F%70%3E'))</script>
```
NOTE: You have to type a file in the function which you want to obfuscate, you can't put a code inside a function yet.

### Express

```js
var obfuscate = require('html-obfuscator')

// Express

const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send(obfuscate('index.html')) // Unfortunately, you can't use res.render() yet.
})
app.listen(4000) // Listening on localhost:4000
```
NOTE: It only obfuscates **client-side**, the code in your workspace stays the same.

### fs

```js
var obfuscate = require('html-obfuscator')

// fs

var fs = require('fs')

// Creates new .html file which works the same as index.html but this time it is obfuscated 

fs.writeFileSync('obfuscated.html', obfuscate('index.html'))
```
## License

#### [MIT](https://en.wikipedia.org/wiki/MIT_License#License_terms)

### Inspiration 
##### [Inspiration](http://snapbuilder.com/code_snippet_generator/obfuscate_html_source_code/)
#### Made by some random beginner 
