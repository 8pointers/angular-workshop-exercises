import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export function counterReducer(state = 0, action: Action) {
  if (action.type === ActionTypes.Increment) {
    return state + 1;
  }
  return state;
}
