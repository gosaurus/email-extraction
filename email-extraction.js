// let counter = 0;

// split text by space

// for each 'block' of text, count number of times [space]string + ""
const fs = require('fs');

function readText(filePath)  {
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) { throw err; }
  console.log('data: ', data);
  })};

const input = fs.readText('test.txt');

console.log(input);