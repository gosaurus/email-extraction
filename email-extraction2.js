
const fs = require('fs');
const readline = require('readline-sync')

function readText(filePath)  {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data 
}

const input = readText('test.txt');


const softwireEmails = (input) => {
	// regex expession for softwire.com
	const re = /\b[\w\.'%+-]+[\W\S]@softwire\.com\b/g;
	const arraySoftwire = input.match(re);
	return `Number of Softwire emails: ${arraySoftwire.length}`;
}; 

function findDomainInArray(domainArray, domainRegex) {
	const objInDomainArray = domainArray.find(domainObj => domainObj.domain == domainRegex);
	return objInDomainArray;
}

const domainEmails = (input) => {
	// regex expression for emails with all domains, including 'local@example.org.uk' and 'local@example.uk'
	const reAnyEmail = /\b[\w\.'%+-]+[\w\s\.]@{1}([\w-]+\.{1}[A-Za-z]+?[A-Za-z]*[\.]?[A-Za-z]+?)\b/g;
	const matches = [...input.matchAll(reAnyEmail)]; //returns ITERATOR wtih matches, including capturing groups

	const domainArray = [];
	for (const match of matches) {
		const domainRegex = match[1];
		const keyValue = {};
		const objInDomainArray = findDomainInArray(domainArray, domainRegex);
		if (objInDomainArray !== undefined) {
			objInDomainArray.count++;
		}
		else {
			keyValue["domain"] = domainRegex;
			keyValue["count"] = 1;
			domainArray.push(keyValue);
		}
	};
	return domainArray;
}

// main program
console.log(`Count of all softwire.com emails:\n${softwireEmails(input)}`);
console.log(`Count of all domains in file:\n${JSON.stringify(domainEmails(input))}`);

// sort to most common
const domainArray = domainEmails(input);
const sorted = domainArray.toSorted((a,b) => b.count - a.count);
console.log(`Top 10 most common email domains:\n`);
console.log(sorted.slice(0,9));
console.log("Sorted array length", sorted.length);

//output all domains occuring more than given number of times
const minNumber = parseInt(readline.question("Enter a number to show all email domains with occurrence frequency equal to that number or more: \n"));
const filteredArray = [];

for (let domainCountPairIndex = 0; domainCountPairIndex < sorted.length; domainCountPairIndex++) {
	console.log("Domain count: ", domainCountPairIndex);
	if (sorted[domainCountPairIndex].count >= minNumber) {
		(console.log(`Inside if statement,${sorted[domainCountPairIndex].count}`));
		filteredArray.push(sorted[domainCountPairIndex]);
	}
}

console.log(`Domains with frequency >= ${minNumber}`);
console.log(filteredArray);

