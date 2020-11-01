import React from 'react';
import { useDispatch } from 'react-redux';
import { IOdds } from './oddsCalculatorTypes'
import { addOdds, updateOdds } from './oddsCalculatorSlice';
import { v4 as uuid } from 'uuid';

export const OddsCalculatorRow: React.FunctionComponent<IOdds> = (odds: IOdds) => {

  const dispatch = useDispatch();

  const changeHome = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOdds({ id: odds.id, home: e.target.value, away: odds.away } as IOdds));
  }

  const changeAway = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOdds({ id: odds.id, home: odds.home, away: e.target.value } as IOdds));
  }

  const onCompletingRow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      dispatch(addOdds({ id: uuid(), home: "", away: "0.00"} as IOdds));
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <div>
      <div className="left">
        <input
          autoFocus
          onChange={changeHome}
          value={odds.home}
        />
      </div>
      <div className="right">
        <input
          onChange={changeAway}
          onKeyDown={onCompletingRow}
          value={odds.away}
        />
      </div>
      <div className="clear"></div>
    </div>
  );
}
