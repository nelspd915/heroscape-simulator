import React, { Component } from 'react';
import { calcDamage, runBattle } from '../../utils/battle';
import { flattenedAverage, flattenNegative, round } from '../../utils/math'
import '../../index.css'
import BattleDice from '../BattleDice/BattleDice';

export default class HeroscapeSimulator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rollsAmount: 10,
      attackAmount: 3,
      defenceAmount: 3,
      historyLength: 3,
      battleCounter: 0,
      singleBattleDamage: 0,
      damageTracker: []
    };

    this.rollHistory = [];
    this.damageTracker = [];
    this.battleCounter = 0;
  }

  // Change handlers
  handleRollsAmountChange = (e) => { this.setState({rollsAmount: e.target.value}) };
  handleAttackAmountChange = (e) => { this.setState({attackAmount: e.target.value}) };
  handleDefenceAmountChange = (e) => { this.setState({defenceAmount: e.target.value}) };
  handleHistoryLengthChange = (e) => { this.setState({historyLength: e.target.value}) };

  // Click handlers
  handleRunSingleBattleClick = () => {
    const damage = this.runSingleBattle()

    this.setState({
      avgDamage: flattenNegative(damage)
    });
  };
  handleRunBattlesClick = () => {
    const damages = [];
    for (let i = 0; i < this.state.rollsAmount; i++) {
      damages.push(this.runSingleBattle());
    }

    this.setState({
      avgDamage: flattenedAverage(damages)
    });
  };
  handleClearClick = () => {
    this.rollHistory = [];
    this.damageTracker = [];
    this.battleCounter = 0;
    this.latestBattleRoll = undefined;
    this.setState({
      attackRoll: undefined,
      defenceRoll: undefined,
      battleCounter: this.battleCounter,
      avgDamage: 0,
      damageTracker: [],
      cumAvgDamage: undefined
    });
  }

  render() {
    return(
      <div>
        <h1>Heroscape Simulator</h1>
        <div className="container-row">
          <div className="unit-container">
            <h3 className="label">Rolls:</h3>
            <input 
              id="rollsAmount"
              className="input-parameter"
              type="number"
              value={this.state.rollsAmount}
              onChange={this.handleRollsAmountChange}
            />
          </div>
          <div className="unit-container red-border">
            <h3 className="label">Attack:</h3>
            <input 
              id="attackAmount"
              className="input-parameter"
              type="number"
              value={this.state.attackAmount}
              onChange={this.handleAttackAmountChange}
            />
          </div>
          <div className="unit-container blue-border">
            <h3 className="label">Defence:</h3>
            <input 
              id="defenceAmount"
              className="input-parameter"
              type="number"
              value={this.state.defenceAmount}
              onChange={this.handleDefenceAmountChange}
            />
          </div>
          <div className="unit-container">
            <h3 className="label">History Length:</h3>
            <input 
              id="historyLength"
              className="input-parameter"
              type="number"
              value={this.state.historyLength}
              onChange={this.handleHistoryLengthChange}
            />
          </div>
        </div>
        <div className="container-row">
          <button
            id="run-single-battle-button"
            className="button-control"
            type="button"
            onClick={this.handleRunSingleBattleClick}
          >Single Battle</button>
          <button
            id="run-battles-button"
            className="button-control"
            type="button"
            onClick={this.handleRunBattlesClick}
          >Run Battles</button>
          <button
            id="clear-button"
            className="button-control"
            type="button"
            onClick={this.handleClearClick}
          >Clear</button>
        </div>
        <div className="spacer"></div>
        <div className="container-row">
          <h3 className="label">Average Damage:</h3>
          <p className="result-value">{round(this.state.avgDamage ?? 0, 6)}</p>
          <h3 className="label">Cumulative Average Damage:</h3>
          <p className="result-value">{round(this.state.cumAvgDamage ?? 0, 6)}</p>
        </div>
        {this.renderRoll(this.state.attackRoll, this.state.defenceRoll, "currentRoll", true)}
        <div className="spacer"></div>
        <div className="spacer"></div>
        {this.renderPreviousRolls()}
      </div>
    )
  }

  runSingleBattle() {
    // Save previous roll to history
    this.rollHistory.unshift({
      attackRoll: [...this.latestBattleRoll?.attackRoll ?? []],
      defenceRoll: [...this.latestBattleRoll?.defenceRoll ?? []]
    })

    const {attackRoll, defenceRoll} = runBattle(this.state.attackAmount, this.state.defenceAmount);

    // Update latest battle roll with new results
    this.latestBattleRoll = {attackRoll, defenceRoll};

    if (this.rollHistory.length > this.state.historyLength) {
      this.rollHistory = this.rollHistory.slice(0, this.state.historyLength);
    }

    this.battleCounter++;

    // Track damage
    const damage = calcDamage(attackRoll, defenceRoll);
    if (this.damageTracker.length === 0) {
      this.damageTracker = [damage];
    } else {
      this.damageTracker.push(damage);
    }

    this.setState({
      attackRoll,
      defenceRoll,
      battleCounter: this.battleCounter,
      damageTracker: this.damageTracker,
      cumAvgDamage: flattenedAverage(this.damageTracker)
    });

    return damage;
  }

  renderRoll(attackRoll, defenceRoll, key, background = false) {

    const damage = calcDamage(attackRoll, defenceRoll);

    return ( 
      attackRoll?.length > 0 || defenceRoll?.length > 0 ?
      
        <div
          className={`container-row unit-container side-spaced no-border ${!background ? "no-background" : ""}`}
          key={key}
        >
          <div className="container-row row-double-spaced leading-list">
            {this.displayDice("attack", attackRoll)}
          </div>
          <div className="label row-auto-spaced">
            {"-->"}
          </div>
          <div className="container-row row-double-spaced leading-list">
            {this.displayDice("defence", defenceRoll)}
          </div>
          <h3 className="label">Damage:</h3>
          <p className="result-value">{flattenNegative(damage)}</p>
        </div> : null
    );
  }

  renderPreviousRolls() {
    const rolls = this.rollHistory.map((roll, i) => {
      return this.renderRoll(roll.attackRoll, roll.defenceRoll, `previousRoll-${i}`);
    });

    return [
      ...rolls,
      this.state.battleCounter > this.state.historyLength + 1 ? 
        <div className="label elipsis" key="elipsis">. . . . . </div>
        : null
    ];
  }

  displayDice(type, rollResults = []) {
    const dice = [];
    rollResults.forEach((die, i) => {
      dice.push(
        <BattleDice diceType={type} value={die} key={`${i}-${type}-${die}`}></BattleDice>
      )
    });

    return dice;
  }
}