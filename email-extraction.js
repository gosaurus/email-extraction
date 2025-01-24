
const fs = require('fs');

function readText(filePath)  {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data 
}

const input = readText('test.txt');

// regex for softwire.com
const re = /[\w\.-]+@softwire\.com/g;
const arraySoftwire = input.match(re);

console.log(arraySoftwire);
console.log(arraySoftwire.length);

// regex for emails with all domains
const reEmails = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g;
const arrayEmails = input.match(reEmails);

console.log(arrayEmails);

let dictionaryDomains = {};


