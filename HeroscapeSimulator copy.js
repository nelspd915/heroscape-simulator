import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './HeroscapeSimulator.css';

const HeroscapeSimulator = () => {

  const [rollsAmount, setRollsAmount] = useState(0);

  const handleRollsAmountChange = (e) => {
    setRollsAmount(e.target.value);
  }

  return (
    <div className="HeroscapeSimulator" data-testid="HeroscapeSimulator">
      <input 
        id="rollsAmount"
        type="number"
        value={rollsAmount}
        onClick={handleRollsAmountChange}
      ></input>
    </div>
  )
};

// HeroscapeSimulator.propTypes = {};

// HeroscapeSimulator.defaultProps = {};

export default HeroscapeSimulator;
