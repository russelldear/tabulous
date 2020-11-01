import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IOdds } from './oddsCalculatorTypes'
import { RootState } from '../../app/store';
import { addOdds } from './oddsCalculatorSlice';
import { OddsCalculatorRow } from './OddsCalculatorRow';
import { v4 as uuid } from 'uuid';

export const OddsCalculator: React.FunctionComponent = () => {

  const oddsState = useSelector((state: RootState) => state.oddsState);

  const dispatch = useDispatch();

  if(oddsState.allOdds.length === 0) {
    dispatch(addOdds({ id: uuid(), home: "1.59", away: "2.31"} as IOdds))
  }

  const getRows = () => {
    return oddsState.allOdds.map(o => 
      <OddsCalculatorRow key={o.id} id={o.id} home={o.home} away={o.away} />
    );
  }

  return (
    <div>
      <div className="centred">
        {getRows()}
      </div>
    </div>
  );
}
