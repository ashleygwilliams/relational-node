const assert = require('assert');
const chai = require('chai').should();

const Variable = require('../es5/variable');
const State = require('../es5/state');
const states = require('./fixtures/states');

var x = states.variables.x;
var y = states.variables.y;
var z = states.variables.z;
var a = states.variables.a;

describe('State', function(){
  it('should create a new object w/variables attr as an empty array', function(){
    states.new.should.have.property('variables');
    states.new.variables.should.be.an.Array;
    states.new.variables.should.be.empty;
  });
  it('should create a new object w/values attr as an empty object', function(){
    states.new.should.have.property('values');
    states.new.values.should.be.an.Object;
    states.new.values.should.be.empty;
  });
  describe('#create_variables', function(){
    it('should return a new State', function() {
      states.second.should.exist;
      states.second.should.be.an.Object;
      states.second.should.be.an.instanceof(State);
      states.second.should.not.equal(states.new);
    });
    it('should return an Array of variables', function() {
      states.second.variables.should.exist;
      states.second.variables.should.be.an.Array;
    });
    it('the new state should hold the passed variables', function(){
      states.second.variables.should.include.members([x, y, z]);
    });
    it('the passed variables should become new variable objects', function(){
      var passed_var = states.second.variables[0];
      passed_var.should.exist;
      passed_var.should.be.an.Object;
      passed_var.should.be.an.instanceof(Variable);
    });
    it('the returned variables array should contain variable objects of passed variables', function(){
      states.third.variables.should.be.an.Array;
      states.third.variables.should.include.members([x, y, z]);
      states.third.variables[0].should.be.an.instanceof(Variable);
    });
    it('should not remove previous variables', function(){
      states.third.variables.should.have.members([x, y, z, a]);
    });
  });
  describe('#assign_values', function(){
    it('should return a new state', function(){
      states.fourth.should.exist;
      states.fourth.should.be.an.object;
      states.fourth.should.be.an.instanceof(State);
      states.fourth.should.not.equal(states.third);
    });
    it('the values object should reflect the new value assignments', function(){
      Object.keys(states.fourth.values).should.have.members(['x', 'y', 'z']);
      states.fourth.values.x.name.should.equal('y');
      states.fourth.values.y.name.should.equal('z');
      states.fourth.values.z.should.equal(5);
    });
    it('the values object should have values from previous state', function(){
      Object.keys(states.fifth.values).should.have.members(['x','y','z', 'a']);
    });
  });
  describe('#value_of', function(){
    it('when given a number it should return the value of a number', function() {
      valState.value_of(5).should.equal(5);
    });
    it('when given a variable it should return the value of that variable', function() {
      valState.value_of(z).should.equal(5);
    });
  });
});
