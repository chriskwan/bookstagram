import React, { Component } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BookFeed from './BookFeed';
import ButtonBar from './ButtonBar';
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
        { currentView }
        <ButtonBar />
      </div>
    );
  }
}

export default App;
