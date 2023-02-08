const sumAll = function(num1, num2) {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number') return 'ERROR';
  let sum = 0;
  const start = (num1 <= num2) ? num1 : num2;
  const end = (num1 >= num2) ? num1 : num2;
  for (i = start; i <= end; i++) sum += i;
  return (sum >= 0) ? sum : 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
