const fs = require('fs');
const path = require('path');
const pkg = require('./package.json');

let files = ['kfi.css','kfi.js','kfi.ttf','kfi.woff','kfi.woff2'];

files.forEach((file) =>
{
    let source = path.join(__dirname, `/fonts/${file}`);
    let output = path.join(__dirname, `/output/${file}`);
    fs.copyFile(source, output, (err) =>
    {
        if(err)
        {
            console.error('Error occured: ', err);
        }
        else
        {
            console.log('File copied ' + file);
        }
    });
});