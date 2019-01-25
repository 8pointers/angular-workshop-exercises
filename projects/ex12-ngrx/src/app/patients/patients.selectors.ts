import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getOrderedPatients, getSelectedPatient } from './patients.reducer';

export const selectFeature = createFeatureSelector('patients');

export const selectSelectedPatient = createSelector(
  selectFeature,
  getSelectedPatient
);

export const selectOrderedPatients = createSelector(
  selectFeature,
  getOrderedPatients
);
