#!/usr/bin/node

// Define the add function
function add(a, b) {
  return a + b;
}

// Get the first and second arguments
const args1 = process.argv[2];
const args2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(args1, 10);
const num2 = parseInt(args2, 10);

// Check if both are valid numbers

if (args1 === undefined && args2 === undefined) {
  console.log('Missing numbers');
} else if (args2 === undefined) {
  console.log('Missing second number');
}
else if (isNaN(num1) || isNaN(num2)) {
  console.log('Please provide two valid integers');
}
else  {
  // Print the sum
  console.log(add(num1, num2));
}
