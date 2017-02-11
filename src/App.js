import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookDetails from './BookDetails';
import BookFeed from './BookFeed';
import UserProfile from './UserProfile';

class App extends Component {
  constructor() {
    super();
    this.appStates = {
      feed: "FEED",
      details: "DETAILS",
      profile: "PROFILE"
    };
    this.state = {
      user: "Chris",
      books: [{ title: "A" }, { title: "B" }, { title: "C" }],
      currentAppState: this.appStates.feed
    }
  }

  render() {    
    let currentView = null;
    
    switch (this.state.currentAppState) {
      case this.appStates.feed:
        currentView = <BookFeed books={this.state.books}/>;
        break;
      case this.appStates.details:
        currentView = <BookDetails />;
        break;
      case this.appStates.profile:
        currentView = <UserProfile />;
        break;
      default:
        break;
    }

    return (
      <div className="App">
        {this.state.user}
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}

          { currentView }

        <div>
          <ul>
            <li>Discover</li>
            <li>Post</li>
            <li>You</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
