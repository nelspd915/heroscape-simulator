import React, { Component } from 'react';
import { runBattle } from '../../utils/battle';
import './HeroscapeSimulator.css'

export default class HeroscapeSimulator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rollsAmount: 0,
      attackAmount: 0,
      defenceAmount: 0,
      singleBattleDamage: 0
    };
  }

  // Change handlers
  handleRollsAmountChange = (e) => { this.setState({rollsAmount: e.target.value}) };
  handleAttackAmountChange = (e) => { this.setState({attackAmount: e.target.value}) };
  handleDefenceAmountChange = (e) => { this.setState({defenceAmount: e.target.value}) };

  // Click handlers
  handleRunSingleBattleClick = () => {
    const damage = runBattle(this.state.attackAmount, this.state.defenceAmount);
    this.setState({singleBattleDamage: damage});
  };

  render() {
    console.log("state:", this.state);
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
        </div>
        <div className="container-row">
          <button
            id="run-single-battle-button"
            className="button-control"
            type="button"
            onClick={this.handleRunSingleBattleClick}
          >Run single battle</button>
        </div>
        <div className="container-row">
          <h3 className="label">Damage:</h3>
          <p className="result-value">{this.state.singleBattleDamage}</p>
        </div>
      </div>
    )
  }
}