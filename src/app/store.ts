import { configureStore } from '@reduxjs/toolkit';
import oddsReducer from '../features/oddsCalculator/oddsCalculatorSlice';

export const store = configureStore({
  reducer: {
    oddsState: oddsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
