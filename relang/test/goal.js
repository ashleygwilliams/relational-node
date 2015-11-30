const assert = require('assert');
const shai = require('chai').should();
const Goal = require('../es5/goal');

describe('Goal', function(){
  describe('constructor', function(){
    it('create a new goal object with a block attr that is a function', function(){
      var block = function() { return "test"; };
      var x = new Goal(block);
      x.should.exist;
      x.block.should.exist;
      x.block.should.be.a.Function;
    });
  });
});
