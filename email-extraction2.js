
// const fs = require('fs');
// const readline = require('readline-sync')



// function readText(filePath)  {
//   const data = fs.readFileSync(filePath, 'utf-8');
//   return data 
// }

// const input = readText('test.txt');

import { input } from './userInput.js';
import { sortToMostCommon, getEmailsByFrequency } from './emailSorting.js';


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
export const domainArray = domainEmails(input);

export const sorted = sortToMostCommon(domainArray);
console.log(sorted);

//output all domains occuring more than given number of times
const filteredArr = getEmailsByFrequency(sorted);
console.log(filteredArr);

