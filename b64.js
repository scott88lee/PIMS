let mode = process.argv[2]

const fs = require('fs');

if (mode == 'e') {
    let buff = fs.readFileSync('raw');
    let base64data = buff.toString('base64');
    fs.writeFile('data.b64', base64data, function (err) {
        if (err) throw err;
        console.log('Encoded!');
      });
} else if (mode == 'd') {
    let data = fs.readFileSync('data.b64');
    console.log(data)
    let bufferObj = Buffer.from(data, "base64");

    // Encode the Buffer as a utf8 string
    let decodedString = data.toString("utf8");
    console.log(decodedString);
    // console.log(data)
}