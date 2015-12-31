export default class Goal {
  constructor(block = function(){}) {
    this.block = block;
  }

  pursue_in(state) {
    var result = this.block.call(state);
    return result;
  }

  static equal(a, b) {
    var block = function(state) {
      //state = state.unify(a, b);

      //return function* results() {
      //  if (state) yield state;
      //}
    };
    return new Goal(block);
  }
}
