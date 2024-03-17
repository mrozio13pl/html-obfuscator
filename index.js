function convert(num) {
    if (num < 10) return num;

    switch (num) {
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
    }

    return num;
}

function hexFromDec(num) {
    if (num > 65_535) throw new Error(`${num} is can't be converted to hex`);
    const first = Math.round(num / 4096 - .5);
    const temp1 = num - first * 4096;
    const second = Math.round(temp1 / 256 - .5);
    const temp2 = temp1 - second * 256;
    const third = Math.round(temp2 / 16 - .5);
    const fourth = temp2 - third * 16;
    return '' + convert(third) + convert(fourth);
}

function obfuscate(src) {
    let out = '';

    for (let i = 0; i < src.length; i++) {
        out += '%' + hexFromDec(src.codePointAt(i));
    }

    // wrap into script tag
    out = `<script>document.write(unescape('${out}'))</script>`;

    return out;
}

exports.obfuscate = obfuscate;