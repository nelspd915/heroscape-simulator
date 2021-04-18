import React, { Component } from 'react';
import '../../index.css'
import constants from '../../data/constants.json'
import symbols from '../../data/symbols.json'

export default class BattleDice extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    
    if (constants.ATTACK_HITS.includes(this.props.value)) {
      this.side = "skull";
      this.borderColor = this.props.diceType === "attack" ? "red" : "black";
    } else if (constants.DEFENCE_HITS.includes(this.props.value)) {
      this.side = "shield";
      this.borderColor = this.props.diceType === "defence" ? "blue" : "black";
    } else {
      this.side = "blank";
      this.borderColor = "black";
    }

    this.symbol = symbols[this.side];
  }

  render() {
    return(
      <div className={`unit-container post-spaced square-die ${this.borderColor}-border`}>
        {this.symbol}
      </div>
    )
  }
}