'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Variable = require('./variable');
var merge = require('object-merge');

var State = (function () {
  function State() {
    var variables = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var values = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, State);

    this.variables = variables;
    this.values = values;
  }

  _createClass(State, [{
    key: 'create_variables',
    value: function create_variables(names) {
      var new_vars = names.map(function (name) {
        return new Variable(name);
      });

      return [new State(this.variables.concat(new_vars), this.values), new_vars];
    }
  }, {
    key: 'assign_values',
    value: function assign_values(new_vals) {
      var vals = merge(this.values, new_vals);
      return new State(this.variables, vals);
    }
  }, {
    key: 'value_of',
    value: function value_of(variable) {
      var val_vars = Object.keys(this.values);
      if (variable.name != 'undefined' && val_vars.indexOf(variable.name) !== -1) {
        var val = this.values[variable.name];
        return this.value_of(val);
      } else {
        return variable;
      }
    }
  }, {
    key: 'unify',
    value: function unify(a, b) {
      var a = this.value_of(a);
      var b = this.value_of(b);
      var result = null;

      if (a === b) {
        result = this;
      } else if (a instanceof Variable) {
        result = this.assign_values({ a: b });
      } else if (b instanceof Variable) {
        result = this.assign_values({ b: a });
      }

      return result;
    }
  }]);

  return State;
})();

exports['default'] = State;
module.exports = exports['default'];