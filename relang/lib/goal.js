export default class Goal {
  constructor(block = function(){}) {
    this.block = block;
  }

  pursue_in(state) {
    var result = this.block.call(state);
    return result;
  }
}
