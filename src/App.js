import './App.css';
import {Provider} from 'react-redux';
import FeedContainer from './components/FeedContainer.react';
import React, { Component } from 'react';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <FeedContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
