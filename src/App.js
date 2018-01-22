import React, { Component } from 'react';
import 'static/App.css';
import Header from 'components/Header.js';
import ExperienceList from 'components/ExperienceList.js';
import SocialMedia from 'components/SocialMedia.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <ExperienceList />
          <SocialMedia />
      </div>
    );
  }
}

export default App;
