import Action from "../actions/action";
import ActionType from "../actions/actionType";

export interface IState {
  count: number;
}

const initialState = {
  value: 0
};

export default function rootReducer(state: IState, action: Action): IState {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        count: state.count + 1
      };
    case ActionType.DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}
