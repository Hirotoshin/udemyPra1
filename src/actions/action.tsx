import ActionType from "./actionType";

export interface IIncrement {
  type: ActionType.INCREMENT;
  count: number;
}

export interface IDecrement {
  type: ActionType.DECREMENT;
  count: number;
}

type Action = IIncrement | IDecrement;

export default Action;
