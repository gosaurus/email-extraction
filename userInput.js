import fs from 'fs';
import readline from "readline-sync";

export function readText(filePath)  {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data 
}

export const input = readText('test.txt');

export function getMinNumber() {
    const minNumber = parseInt(readline.question(
        "Enter a number to show all email domains with occurrence frequency equal to that number or more: \n"
    ));
    return minNumber;
} 

