const fs = require('fs');

function readText(filePath)  {
  return fs.readFileSync(filePath, { encoding: 'utf-8'});
}


const input = readText('test.txt');
const emailToMatch = /\b[0-9A-Za-z.'_%+-]+[^\W\.]@softwire\.com\b/g;

const array = [...input.matchAll(emailToMatch)];
const matches = array.length;

console.log(matches);