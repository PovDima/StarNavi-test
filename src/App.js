import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import * as ServerData from './actions/serverData';
import Leader from './components/Leader';
import Game from './components/Game';

import './App.css';

class App extends Component {
  
  async componentDidMount() {
    await this.props.getServerData()
  }

  render() {
    return (
      <div className="App">
        <Game />
        <Leader />
      </div>
    );
  }
}
export default connect(state => {
  return {}
}, { ...ServerData })(App);
