import React from 'react';
import { OddsCalculator } from './features/oddsCalculator/OddsCalculator';
import { OddsCalculatorResult } from './features/oddsCalculator/OddsCalculatorResult';
import { Stakes } from './features/oddsCalculator/Stakes';
import './App.css';

function App() {
  return (
    <div>
      <div className="content">
        <h1>tabulous</h1>
        <div className="description">Maximise your minimum gain for a set of head-to-head bets, using your bonus bet from the TAB.</div>
        <Stakes />
        <div className="section">
          <div className="heading centered">Head-to-Head Odds</div>
          <OddsCalculator />
        </div>
      </div>
      <OddsCalculatorResult />
    </div>
  );
}

export default App;
