import { ActionsUnion, ActionTypes } from './patients.actions';

export interface Patient {
  id: number;
  name: string;
  weight: number;
  height: number;
}

export interface State {
  orders: string[];
  selectedOrder: number;
  orderBy: string;
  patients: Patient[];
}

const initialState = {
  orders: ['weight', 'height'],
  orderBy: 'weight',
  patients: [
    { id: 1, name: 'First', weight: 65, height: 1.7 },
    { id: 2, name: 'Second', weight: 75, height: 1.8 },
    { id: 3, name: 'Third', weight: 55, height: 1.6 }
  ]
};

export function patientsReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.ChangeOrder:
      return {
        ...state,
        orderBy: action.payload.orderBy
      };
    case ActionTypes.Toggle:
      return {
        ...state,
        selected: action.payload.id
      };
    case ActionTypes.AddHeight:
      return {
        ...state,
        patients: state.patients.map(patient =>
          patient.id === action.payload.id ? { ...patient, height: patient.height + action.payload.delta } : patient
        )
      };
    case ActionTypes.AddWeight:
      return {
        ...state,
        patients: state.patients.map(patient =>
          patient.id === action.payload.id ? { ...patient, weight: patient.weight + action.payload.delta } : patient
        )
      };
    default:
      return state;
  }
}

export const getSelectedPatient = (state: State) => state.selected;
export const getOrders = (state: State) => state.ord;
export const getOrderedPatients = (state: State) => state.patients.sort((p1, p2) => p1[state.orderBy] - p2[state.orderBy]);
