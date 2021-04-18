import React, { Component } from 'react';
import HeroscapeSimulator from "./components/HeroscapeSimulator/HeroscapeSimulator";

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  render() {
      return (
          <div>
              <div className="component-body">
                  <HeroscapeSimulator></HeroscapeSimulator>
              </div>
          </div>
      );
  }
}

export default App;