var o = require('./html/main')
var fs = require('fs')
fs.writeFileSync('test.html',o('e.html'))