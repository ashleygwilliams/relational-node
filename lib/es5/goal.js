"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Goal = (function () {
  function Goal() {
    var block = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

    _classCallCheck(this, Goal);

    this.block = block;
  }

  _createClass(Goal, [{
    key: "pursue_in",
    value: function pursue_in(state) {
      var result = this.block.call(state);
      return result;
    }
  }], [{
    key: "equal",
    value: function equal(a, b) {
      return new Goal(function (state) {
        var state = state.unify(a, b);

        return regeneratorRuntime.mark(function results() {
          return regeneratorRuntime.wrap(function results$(context$4$0) {
            while (1) switch (context$4$0.prev = context$4$0.next) {
              case 0:
                if (!state) {
                  context$4$0.next = 3;
                  break;
                }

                context$4$0.next = 3;
                return state;

              case 3:
              case "end":
                return context$4$0.stop();
            }
          }, results, this);
        });
      });
    }
  }]);

  return Goal;
})();

exports["default"] = Goal;
module.exports = exports["default"];