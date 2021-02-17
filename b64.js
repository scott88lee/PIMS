let mode = process.argv[2]

const fs = require('fs');

if (mode == 'e') {
    let buff = fs.readFileSync('raw');
    let base64data = buff.toString('base64');
    fs.
} else if (mode == 'd') {
    console.log('Decode')
}