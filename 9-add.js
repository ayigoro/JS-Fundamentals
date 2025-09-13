#!/usr/bin/node

// Function to add two integers
function add(a, b) {
  return a + b;
}

// Get arguments from the command line
// process.argv[2] = first number
// process.argv[3] = second number
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Check if arguments are numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('Missing numbers');
}else if (num2 == undefined){
  console.log('Missing second number');
} else {
  console.log(add(num1, num2));
}

/**
 * [Got]
Missing numbers

(16 chars long)
[stderr]: 
(0 chars long)
[Expected]
NaN

(4 chars long)
[stderr]: [Anything]
(0 chars long)
 */
