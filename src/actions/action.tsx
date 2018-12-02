import ActionType from "./actionType";

export interface IIncrement {
  type: ActionType.INCREMENT;
}

export interface IDecrement {
  type: ActionType.DECREMENT;
}

type Action = IIncrement | IDecrement;

export default Action;
