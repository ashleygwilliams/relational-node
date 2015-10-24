const assert = require('assert');
const chai = require('chai').should();
const Variable = require('../es5/variable');

describe('Variable', function(){
  describe('constructor', function(){
    it('should be equal to itself', function(){
      var x = new Variable("x");
      x.should.equal(x);
    });
    it('should not be equal to another Variable with a different name', function(){
      var x = new Variable("x");
      var y = new Variable("y");
      x.should.not.equal(y);
    });
    it('should not be equal to another Variable with the same name', function(){
      var x = new Variable("x");
      x.should.not.equal(new Variable("x"));
    })
  });
});
