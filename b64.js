let mode = process.argv[2]

const fs = require('fs');
const b64_file = "data.b64"
const text_file = "text.raw"

if (mode == 'e') {
    let str = fs.readFileSync(text_file);
    let buff = Buffer.from(str);
    let data = buff.toString('base64');
    fs.writeFile(b64_file, data, function (err) {
        if (err) throw err;
            console.log('Encoded!');
        });

} else if (mode == 'd') {
    let str = fs.readFileSync(b64_file).toString('utf8');

    let buff = Buffer.from(str, 'base64');
    let text = buff.toString('ascii');

    console.log(text)
    fs.writeFile(text_file, text, function (err) {
        if (err) throw err;
            console.log('Encoded!');
        });

} else {
    let str = 'Hello World';
    let buff = Buffer.from(str);
    let data = buff.toString('base64');
    fs.writeFile(b64_file, data, function (err) {
        if (err) throw err;
        console.log('Encoded!');
      });
}