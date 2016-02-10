describe("StringCalculator", function() {
	var expect = chai.expect;
  var calc;
	beforeEach(function() {
		calc = new StringCalculator();
	});

  it("should return 0 if nothing passed", function() {
    expect(calc.add()).to.equal(0);
  });

  it("should return same number if one param passed", function() {
    expect(calc.add("5")).to.equal(5);
  })

  it("should return sum of two numbers if two params passed", function() {
    expect(calc.add("5,2")).to.equal(7);
  })

  it("should return sum of three numbers if three params passed", function() {
    expect(calc.add("5,2,10")).to.equal(17);
  })

  it("should support new line as separator", function() {
    expect(calc.add("5\n2")).to.equal(7);
  })

  it("should support new line and comma as separator together", function() {
    expect(calc.add("5\n2,3")).to.equal(10);
  })

  it("should support custom separator", function() {
    expect(calc.add("//;\n5;7;3")).to.equal(15);
    expect(calc.add("//%\n5%7%3")).to.equal(15);
  })

  it("should support custom separator together with other separators", function() {
    expect(calc.add("//;\n5,7,3")).to.equal(15);
    expect(calc.add("//;\n5\n7;3,1")).to.equal(16);
  })

  it("should throw exception if there is negative number in params", function() {
    expect(calc.add.bind(calc, "5,-2,7")).to.throw("Negatives not allowed: -2");
  })

  it("should throw exception if there is negative numbers in params", function() {
    expect(calc.add.bind(calc, "5,-2,-10")).to.throw("Negatives not allowed: -2, -10");
  })

  it("should throw exception if there is negative number in params and custom delimeter used", function() {
    expect(calc.add.bind(calc, "//%\n5,-2%7")).to.throw("Negatives not allowed: -2");
  })

  it("should ignore number greater than 1000", function() {
    expect(calc.add("5,2,1001")).to.equal(7);
  })

  it("should accept custom delimeters of any length", function() {
    expect(calc.add("//[***]\n5***2***9")).to.equal(16);
  })

  // xit("should accept multiple custom delimeters", function() {
  //   expect(calc.add("//[*][%]\n5*2%9")).to.equal(16);
  // })
});
