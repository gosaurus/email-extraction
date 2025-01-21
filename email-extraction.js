// let counter = 0;

// split text by space

// for each 'block' of text, count number of times [space]string + ""
const fs = require('fs');

function readText(filePath)  {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data 
}

const input = readText('test.txt');
const emailArray = input.split(" ");
console.log(emailArray);

const re = /(.*)@softwire.com/;