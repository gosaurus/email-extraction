
const fs = require('fs');

function readText(filePath)  {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data 
}

const input = readText('test.txt');

// regex expession for softwire.com
// const re = /\b[\w\.'%+-]+[\W\S]@softwire\.com\b/g;
// const arraySoftwire = input.match(re);

// console.log(`List of ${arraySoftwire}`);
// console.log(`Number of emails with domain <softwire.com>: ${arraySoftwire.length}`);

// regex expression for emails with all domains, including 'local@example.org.uk' and 'local@example.uk'
const reAnyEmail = /\b[\w\.'%+-]+[\w\s\.]@{1}([\w-]+\.{1}[A-Za-z]+?[A-Za-z]*[\.]?[A-Za-z]+?)\b/g;
// const reAnyEmail = /\w[\w\.]+\w@((\w+\.\w+)+)(?=\s)/g
const matches = [...input.matchAll(reAnyEmail)]; //returns ITERATOR wtih matches, including capturing groups

console.log(matches.length);

// Parse into dictionary
const domains = {};

for (const match of matches) {
	const domain = match[1];
	if (domains[domain]) {
		domains[domain]++
	}
	else {
		domains[domain] = 1;
	}
};

console.log(domains);