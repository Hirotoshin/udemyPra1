import * as Action from "./action";
import ActionType from "./actionType";
// actionCreater

export function incrementCounter(count: number): Action.IIncrement {
  return {
    count,
    type: ActionType.INCREMENT
  };
}

export function decrementCounter(count: number): Action.IDecrement {
  return {
    count,
    type: ActionType.DECREMENT
  };
}
