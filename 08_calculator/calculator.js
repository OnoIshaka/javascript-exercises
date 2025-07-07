const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
	let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(n) {
	let result = 1;
  for (;n > 1; n--){
    result *= n;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
