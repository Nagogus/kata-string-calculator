describe('StringCalculator', function() {
	var expect = chai.expect;
  var calc;
	beforeEach(function() {
		calc = new StringCalculator();
	});

  it('should return 0 if nothing passed', function() {
    expect(calc.add()).to.equal(0);
  });

  it('should return same number if one param passed', function() {
    expect(calc.add('5')).to.equal(5);
  })

  it('should return sum of two numbers if two params passed', function() {
    expect(calc.add('5,2')).to.equal(7);
  })

  it('should return sum of three numbers if three params passed', function() {
    expect(calc.add('5,2,10')).to.equal(17);
  })

  it('should support new line as separator', function() {
    expect(calc.add('5\n2')).to.equal(7);
  })

  it('should support new line and comma as separator together', function() {
    expect(calc.add('5\n2,3')).to.equal(10);
  })

  it('should support custom separator', function() {
    expect(calc.add('//;\n5;7;3')).to.equal(15);
  })

  it('should support custom separator together with other separators', function() {
    expect(calc.add('//;\n5,7,3')).to.equal(15);
    expect(calc.add('//;\n5\n7;3,1')).to.equal(16);
  })

});
