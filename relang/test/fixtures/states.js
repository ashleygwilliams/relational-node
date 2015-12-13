const State = require('../../es5/state');

// new state
var state1 = new State();

// state 2: create variables on new state
var result = state1.create_variables(["x", "y", "z"]);
var state2 = result[0];
var x = state2.variables[0];
var y = state2.variables[1];
var z = state2.variables[2];
var variables = result[1];

// state 3: create variables on state
// that already has variables
var state3 = state2.create_variables(["a"])[0];
var a = state3.variables[3];

// state 4: assign values to variables with no value
var new_vals = { x: y, y: z, z: 5 };
var state4 = state3.assign_values(new_vals);

// state 5: assign value to a variable that already
// has a value
var state5 = state4.assign_values({a: "ashley"});

// state 6: unify values successfully
var state6 = state5.unify(x, 5);

// state 7: unify values unsuccessfully
var state7 = state5.unify(y, 6);

module.exports = {
  new: state1,
  second: state2,
  third: state3,
  fourth: state4,
  fifth: state5,
  sixth: state6,
  seventh: state7,
  variables: {
    x: x,
    y: y,
    z: z,
    a: a
  }
};
