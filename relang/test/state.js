const assert = require('assert');
const chai = require('chai').should();
const Variable = require('../es5/variable');
const State = require('../es5/state');

describe('State', function(){
  var state = new State();
  it('should create a new object w/variables attr as an empty array', function(){
    state.should.have.property('variables');
    state.variables.should.be.an.Array;
    state.variables.should.be.empty;
  });
  it('should create a new object w/values attr as an empty object', function(){
    state.should.have.property('values');
    state.values.should.be.an.Object;
    state.values.should.be.empty;
  });
  describe('#create_variables', function(){
    var result = state.create_variables(["x", "y", "z"]);
    var newState = result[0];
    var x = newState.variables[0];
    var y = newState.variables[1];
    var z = newState.variables[2];
    var variables = result[1];
    it('should return a State and an array of variables', function() {
      result[0].should.exist;
      result[0].should.be.an.Object;
      result[0].should.be.an.instanceof(State);
      result[1].should.exist;
      result[1].should.be.an.Array;
    });
    it('the new state should hold the passed variables', function(){
      newState.variables.should.include.members([x, y, z]);
    });
    it('the passed variables should become new variable objects', function(){
      var newVar = newState.variables[0];
      newVar.should.exist;
      newVar.should.be.an.Object;
      newVar.should.be.an.instanceof(Variable);
    });
    it('the returned variables array should contain variable objects of passed variables', function(){
      variables.should.be.an.Array;
      variables.should.include.members([x, y, z]);
      variables[0].should.be.an.instanceof(Variable);
    });
  });
});
