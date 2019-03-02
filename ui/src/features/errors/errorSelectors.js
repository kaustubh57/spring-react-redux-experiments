import { createSelector } from 'reselect';

export const errors = state => state.errors;

export const selectErrors = createSelector (
  errors,
  errors => errors
);