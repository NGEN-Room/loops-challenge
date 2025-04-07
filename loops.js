// 1️⃣ Return all numbers from 1 to n using a for loop
function countUpTo(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
  
  // 2️⃣ Return even numbers between 1 and n using if statement
  function evenNumbers(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
    return result;
  }
  
  // 3️⃣ Return the sum of numbers from 1 to n using a while loop
  function sumWithWhile(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  
  // 4️⃣ Return the factorial of a number using a do...while loop
  function factorial(n) {
    let result = 1;
    let i = 1;
    do {
      result *= i;
      i++;
    } while (i <= n);
    return result;
  }
  
  // 5️⃣ Count down from n to 1
  function countdown(n) {
    const result = [];
    for (let i = n; i >= 1; i--) {
      result.push(i);
    }
    return result;
  }
  
  // 6️⃣ Return a label for numbers from 1 to n: "even" or "odd"
  function evenOrOddLabels(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        result.push("even");
      } else {
        result.push("odd");
      }
    }
    return result;
  }
  
  // 7️⃣ Return the first number divisible by both 3 and 5 in a range
  function firstDivisibleBy3And5(start, end) {
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) return i;
    }
    return null;
  }
  
  // 8️⃣ (Hard) Return an array of prime numbers between 1 and n
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function primeNumbers(n) {
    const result = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) result.push(i);
    }
    return result;
  }
  
  // 9️⃣ (Hard) Create a multiplication table up to n
  function multiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    return table;
  }
  
  module.exports = {
    countUpTo,
    evenNumbers,
    sumWithWhile,
    factorial,
    countdown,
    evenOrOddLabels,
    firstDivisibleBy3And5,
    primeNumbers,
    multiplicationTable
  };