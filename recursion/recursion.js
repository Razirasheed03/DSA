function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  const resultFactorial = factorial(5);
  console.log(`Factorial of 5 is: ${resultFactorial}`);