const Variable = require('./variable');

class State {
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
}

export default State;
