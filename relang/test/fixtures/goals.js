const Goal = require('../../es5/goal');
const State = require('../../es5/state');

var success = "test";
var test_block = function() { return success; };
var x;

module.exports = {
  new: new Goal(test_block),
  states: {
    x: new State([x], { x: "test" })
  },
  success: success
};
