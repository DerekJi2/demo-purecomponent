import React, { Component } from 'react';
import { render } from 'react-dom';
import { PureSample, FakePureSample } from './PureSample';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: 'PureComponent'
    };
  }

  updateState() {
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <PureSample 
          id={this.state.id}
          name={this.state.name}
        >Pure Sample</PureSample>

        <FakePureSample 
          user={this.state}
        >Fake Pure Sample</FakePureSample>

        <button onClick={this.updateState.bind(this)}>Update</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
