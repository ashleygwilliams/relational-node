const Goal = require('../../lib/es5/goal');
const State = require('../../lib/es5/state');

const states = require('./states');

var success = "test";
var test_block = function() { return success; };
var x;
var equals_goal = Goal.equal(x, 5);
var og_state = states.second;
var pursue = equals_goal.pursue_in(og_state);


module.exports = {
  new: new Goal(test_block),
  pursue: pursue,
  goals : {
    equals: Goal.equal(x, 5)
  },
  states: {
    x: new State([x], { x: "test" })
  },
  success: success
};
