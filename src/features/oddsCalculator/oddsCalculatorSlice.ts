import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOdds } from './oddsCalculatorTypes'

interface OddsCalculatorState {
  bonusBet: string;
  maxStake: string;
  allOdds: IOdds[];
}

const initialState: OddsCalculatorState = {
  bonusBet: "10",
  maxStake: "200",
  allOdds: [],
};

export const oddsCalculatorSlice = createSlice({
  name: 'oddsCalculator',
  initialState,
  reducers: {
    addOdds: (state, action: PayloadAction<IOdds>) => {
      state.allOdds.push(action.payload);
    },
    updateOdds: (state, action: PayloadAction<IOdds>) => {
      const index = state.allOdds.findIndex(o => o.id === action.payload.id);
      state.allOdds[index] = action.payload;
    },
    updateBonusBet: (state, action: PayloadAction<string>) => {
      state.bonusBet = action.payload;
    },
    updateStake: (state, action: PayloadAction<string>) => {
      state.maxStake = action.payload;
    },
  },
});

export const { addOdds, updateOdds, updateBonusBet, updateStake } = oddsCalculatorSlice.actions;

export default oddsCalculatorSlice.reducer;
