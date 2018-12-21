import { ActionsUnion, ActionTypes } from './motd.actions';

export function motdReducer(state = {}, action: ActionsUnion) {
  if (action.type === ActionTypes.Refresh) {
    return { isLoading: true };
  }
  if (action.type === ActionTypes.Success) {
    return { message: action.message, isLoading: false };
  }
  if (action.type === ActionTypes.Failure) {
    return { reason: action.reason, isLoading: false };
  }
  return state;
}
