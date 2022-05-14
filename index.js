const csv = require('csvtojson');
const fs = require('fs');
const readStream = fs.createReadStream('./files/nodejs-hw1-ex1.csv');
const writeStream = fs.createWriteStream('./files/result.txt');

csv()
    .fromStream(readStream)
    .on('data', (jsonItem) => {
        console.log('Processing line...');
        writeStream.write(jsonItem.toString());
    })
    .on('done', () => {
        console.log('Finished.');
    })
    .on('error', (error) => {
        console.log(error);
    });
