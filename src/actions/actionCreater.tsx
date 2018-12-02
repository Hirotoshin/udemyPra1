import * as Action from "./action";
import ActionType from "./actionType";
// actionCreater

export const incrementCounter = () => {
  return {
    type: ActionType.INCREMENT
  };
};

export const decrementCounter = () => {
  return {
    type: ActionType.DECREMENT
  };
};
