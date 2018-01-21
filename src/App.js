import React, { Component } from 'react';
import 'static/App.css';
import Header from 'components/Header.js';
import ExperienceList from 'components/ExperienceList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <ExperienceList />
      </div>
    );
  }
}

export default App;
