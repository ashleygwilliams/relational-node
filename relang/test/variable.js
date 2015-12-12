const assert = require('assert');
const chai = require('chai').should();

const variables = require('./fixtures/variables');

describe('Variable', function(){
  describe('constructor', function(){
    it('should be equal to itself', function(){
      var x = variables.x;
      x.should.equal(x);
    });
    it('should not be equal to another Variable with a different name', function(){
      var x = variables.x;
      var y = variables.y;
      x.should.not.equal(y);
    });
    it('should not be equal to another Variable with the same name', function(){
      var x = variables.x;
      x.should.not.equal(variables.z);
    })
  });
});
