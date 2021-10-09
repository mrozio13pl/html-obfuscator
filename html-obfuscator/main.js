(function(){
    let fs = require('fs')
    let path = require('path')
    let i, o = {}
    let obfuscator = function(file){
        let encrypted = o.obfuscate(fs.readFileSync(path.join(file), 'utf8'));
        let html = "<script language=\"javascript\">";
        html += "document.write(unescape('" + encrypted + "'))";
        html += " // https://www.npmjs.com/org/html-obfuscator ";
        html += "</script\>";
        return html
    }
    o.obfuscate=function(tx) {
        var text = '';
        for (i = 0; i < tx.length; i++) {
            text += '%' + o.hexfromdec(tx.charCodeAt(i))
        }
        return text;
    }

    o.hexfromdec=function(num) {
        if(num > 65535) return ("Error at hexfromdec");
        first = Math.round(num / 4096 - .5);
        temp1 = num - first * 4096;
        second = Math.round(temp1 / 256 - .5);
        temp2 = temp1 - second * 256;
        third = Math.round(temp2 / 16 - .5);
        fourth = temp2 - third * 16;
        return (''+o.convert(third)+o.convert(fourth));
    }

    o.convert=function(num) {
        if (num < 10) {
            return num;
        } else {
        if (num == 10) {
            return "A"
        }
        if (num == 11) {
            return "B"
        }
        if (num == 12) {
            return "C"
        }
        if (num == 13) {
            return "D"
        }
        if (num == 14) {
            return "E"
        }
        if (num == 15) {
            return "F"
        }
    }
    }
    module.exports=obfuscator
})()