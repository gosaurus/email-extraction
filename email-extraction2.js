
const fs = require('fs');

function readText(filePath)  {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data 
}

const input = readText('test.txt');


const SoftwireEmails = (input) => {
	// regex expession for softwire.com
	const re = /\b[\w\.'%+-]+[\W\S]@softwire\.com\b/g;
	const arraySoftwire = input.match(re);
	return `Number of Softwire emails: ${arraySoftwire.length}`;
}; 

const DomainEmails = (input) => {
	// regex expression for emails with all domains, including 'local@example.org.uk' and 'local@example.uk'
	const reAnyEmail = /\b[\w\.'%+-]+[\w\s\.]@{1}([\w-]+\.{1}[A-Za-z]+?[A-Za-z]*[\.]?[A-Za-z]+?)\b/g;
	const matches = [...input.matchAll(reAnyEmail)]; //returns ITERATOR wtih matches, including capturing groups


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
	return domains;
}


// main program
console.log(SoftwireEmails(input));
console.log(DomainEmails(input));