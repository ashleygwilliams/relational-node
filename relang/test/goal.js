const assert = require('assert');
const chai = require('chai').should();

const goals = require('./fixtures/goals');
const states = goals.states;
const success = goals.success;
const Goal = require('../es5/goal');
const State = require('../es5/state');

describe('Goal', function(){
  describe('constructor', function(){
    it('create a new goal object with a block attr that is a function', function(){
      goals.new.should.exist;
      goals.new.block.should.exist;
      goals.new.block.should.be.a.Function;
    });
  });
  describe('#pursue_in', function(){
    it('call a function with a current state', function(){
      goals.new.pursue_in(states.x).should.equal(success);
    });
  });
});
