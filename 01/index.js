import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');

const groups = input.split('\r\n\r\n');

// Function to calculate the sum of a group
function sumGroup(group) {
    return group.split('\r\n').reduce((acc, num) => acc + parseInt(num), 0);
}

// Function to find the group with the largest sum
function findLargestGroupSum(groups) {
    let maxSum = 0;

    for (const group of groups) {
        const groupSum = sumGroup(group);
        
        if (groupSum > maxSum) {
            maxSum = groupSum; // Update maxSum if the current group's sum is larger
        }
    }

    return maxSum;
}

// Find and log the largest sum
const largestSum = findLargestGroupSum(groups);
console.log(`The largest group sum is: ${largestSum}`);