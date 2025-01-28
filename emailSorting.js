import { domainArray, sorted } from './email-extraction2.js';
import { getMinNumber } from './userInput.js';

export function sortToMostCommon(domainArray) {

    const sorted = domainArray.toSorted((a,b) => b.count - a.count);
    console.log(`Top 10 most common email domains:\n`);
    const slicedSorted = sorted.slice(0,9);
    return slicedSorted;
}

//output all domains occuring more than given number of times
export function getEmailsByFrequency(sorted) {

    const filteredArray = [];
    const minNumber = getMinNumber();

    for (let domainCountPairIndex = 0; domainCountPairIndex < sorted.length; domainCountPairIndex++) {
        if (sorted[domainCountPairIndex].count >= minNumber) {
            filteredArray.push(sorted[domainCountPairIndex]);
        }
    }
    console.log(`Domains with frequency >= ${minNumber}`);
    return filteredArray;
}