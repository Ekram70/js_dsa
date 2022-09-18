// recursion is a funciton calling itself

/* Write a function to find factorial */

function factorial(num) {
  if (num == 2) {
    return 2;
  }

  return num * factorial(num - 1);
}
//Time Complexity: O(n)

/* Write a function to find nth fibonacci number */

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Time Complexity: O(2^n) so bad
