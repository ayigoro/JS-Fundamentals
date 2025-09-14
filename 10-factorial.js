// factorial function
function factorial(n) {
  if (isNaN(n) || n <= 1) {  // factorial of NaN or <=1 is 1
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument from command line and convert to integer
const arg = parseInt(process.argv[2]);

// Compute factorial and print
console.log(factorial(arg));
