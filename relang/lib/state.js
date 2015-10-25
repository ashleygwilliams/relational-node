const Variable = require('./variable');
const merge = require('object-merge');

export default class State {
  constructor(variables = [], values = {}){
    this.variables = variables;
    this.values = values;
  }

  create_variables(names) {
    var new_vars = names.map(function(name) {
      return new Variable(name);
    });

    return  [ 
              new State(this.variables.concat(new_vars), this.values)
            , new_vars 
            ];
  }

  assign_values(new_vals) {
    var vals = merge(this.values, new_vals);
    return new State(this.variables, vals);
  }

}

