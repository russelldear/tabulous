import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const OddsCalculatorResult: React.FunctionComponent = () => {

  const oddsState = useSelector((state: RootState) => state.oddsState);

  let bet;
  let bonusBet = 20;// parseFloat($("#bonusBet").val());
  let maxBet = 20; //parseFloat($("#maxBet").val());

  let minAB;
  let minBA;
  let max = 0;
  let dollarsToBet = 0;
  let betOption = 0;
  let bonusOption = 0;
  let gain = 0;

  const calculate = () => {
    for (let i = 0; i < oddsState.allOdds.length; i++) {
      const odds = oddsState.allOdds[i];
      const home = parseFloat(odds.home);
      const away = parseFloat(odds.away);
      
      if (home > 0 && away > 0) {

        for (bet = maxBet; bet > 0; bet--) {
          minAB = +Math.min((home * bet) - bet, ((away * bonusBet) - bonusBet) - bet).toFixed(2);
          minBA = +Math.min((away * bet) - bet, ((home * bonusBet) - bonusBet) - bet).toFixed(2);

          var currentMax = Math.max(minAB, minBA);

          if (currentMax > max) {

            dollarsToBet = bet;

            if (minAB > minBA) {
              betOption = home;
              bonusOption = away;
              gain = minAB;
            } else {
              betOption = away;
              bonusOption = home;
              gain = minBA;
            }
          }

          max = Math.max(max, currentMax);
        }
      }
    }
  }

  calculate();

  return (
    <div>
      You should bet ${dollarsToBet} dollars on the ${betOption.toFixed(2)} option, and put your bonus bet on the ${bonusOption.toFixed(2)} option, for a minimum gain of {gain}.
    </div>
  );
}
