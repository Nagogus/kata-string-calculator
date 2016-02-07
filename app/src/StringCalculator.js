'use strict';

function StringCalculator() {
};

StringCalculator.prototype._parseInput = function(input) {
  var customDelimeter = '',
  regexp = new RegExp("\n|\,");
  if(!input) {
    return [];
  }
  if(input.match(/^[\/]{2}(.*)/)) {
    customDelimeter = '\\' + RegExp.$1;
    input = input.slice(input.indexOf('\n') + 1);
    regexp = new RegExp('\\n|' + customDelimeter + '|\,');
  }
  return input.split(regexp);
}

StringCalculator.prototype.add = function (input) {
  var numbers = this._parseInput(input),
  sum = 0;

  numbers.forEach(function(number) {
    sum += parseInt(number, 10);
  });
  return sum;
}
