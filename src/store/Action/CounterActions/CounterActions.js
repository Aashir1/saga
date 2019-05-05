import types from "../../constant";

export default class CounterActions {
  static increment() {
    return {
      type: types.INCREMENT
    };
  }

  static decrement() {
    return {
      type: types.DECREMENT
    };
  }
}
