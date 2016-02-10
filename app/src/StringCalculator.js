'use strict';

function StringCalculator() {
  this.numbersInput = null;
  this.delimeterInput = null;
  this.numbers = null;
};

StringCalculator.prototype.add = function (input) {
  if (!input) {
    return 0;
  }  
  this.prepareInput(input);
  var numbers = this.numbers,
  sum = 0,
  ii = numbers.length,
  negatives = [],
  i, number;

  for (i = 0; i < ii; i++) {
    number = parseInt(numbers[i], 10);
    if (number < 0) {
      negatives.push(number);
    }
    if (number > 1000) {
      continue;
    }
    sum = sum + number;
  }  

  if (negatives.length) {
    throw "Negatives not allowed: " + negatives.join(', ');
  }

  return sum;
}

StringCalculator.prototype.parseDelimeter = function(delimeterInput) {
  var delimeterInput = this.delimeterInput,
  matches;  
  if (!delimeterInput) {
    return /,|\n/;
  } else if (matches = delimeterInput.match(/\[(.+?)\]/)) {    
    return matches[1];
  } else if (matches = delimeterInput.match(/\/\/(.*)/)) {        
    return new RegExp(',|\\n|\\' + matches[1]);
  }
    
  return customDelimeter;
}

StringCalculator.prototype.prepareInput = function(input) {
  var delimeter;
  if (/\/\//.test(input)) {
    this.delimeterInput = input.substr(0, input.indexOf('\n'));
    this.numbersInput = input.substr(input.indexOf('\n') + 1);           
  } else {
    this.numbersInput = input;        
  }   
  delimeter = this.parseDelimeter(this.delimeterInput);
  this.numbers = this.parseNumbers(this.numbersInput, delimeter);  
}

StringCalculator.prototype.parseNumbers = function(numbersInput, delimeter) {    
  return numbersInput.split(delimeter);
}
