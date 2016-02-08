'use strict';

function StringCalculator() {
};

StringCalculator.prototype._parseInput = function(input) {
  var customDelimeter = '',
  regexp = new RegExp("\n|\,");  

  if(/\/\/(.+)\n/.test(input)) {    
    customDelimeter = '|' + this.escapeForRegExp(RegExp.$1) + '';
    input = input.replace(/\/\/(.+)\n/, '');    
  }  
  regexp = new RegExp("\n|\," + customDelimeter);  
  return input.split(regexp);
}

StringCalculator.prototype.escapeForRegExp = function(value) {
  if(value.charAt(0) === '[' && value.charAt(value.length - 1) === ']') {
    value = value.slice(1).slice(0, -1);
    console.log(value);
  }
  return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

StringCalculator.prototype.add = function (input) {
  if(!input) {
    return 0;
  }
  var numbers = this._parseInput(input),
  negatives = [],
  ii = numbers.length,
  i, sum, number;

  for(i = 0, sum = 0; i<ii; i++) {   
    number = numbers[i];
    if(number < 0) {
      negatives.push(number);
    }
    if(number > 1000) {
      continue;
    }
    sum += parseInt(number, 10);
  }  

  if(negatives.length > 0) {
    throw new Error("Negatives not allowed: " + negatives.join(', '));
  }

  return sum;
}
