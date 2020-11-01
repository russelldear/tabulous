import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { updateBonusBet, updateStake } from './oddsCalculatorSlice';
export const Stakes: React.FunctionComponent = () => {

  const oddsState = useSelector((state: RootState) => state.oddsState);

  const dispatch = useDispatch();

  const changeBonusBet = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateBonusBet(e.target.value));
  }

  const changeStake = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateStake(e.target.value));
  }

  return (
    <div className="section">
      <div className="left">
        <div className="tabLabel">
          <label>Bonus Bet </label></div>
        <div>
          <input className="rounded" onChange={changeBonusBet} value={oddsState.bonusBet} /></div>
      </div>
      <div className="right">
        <div className="tabLabel">
          <label>Maximum Stake </label></div>
        <div>
          <input className="rounded" onChange={changeStake} value={oddsState.maxStake} /></div>
      </div>
      <div className="clear"></div>
    </div>
  );
}
