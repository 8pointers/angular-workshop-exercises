import { ActionsUnion, ActionTypes } from './counter.actions';

export function counterReducer(state = 0, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;
    case ActionTypes.Decrement:
      return state - 1;
    default:
      return state;
  }
}
