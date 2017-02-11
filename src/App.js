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

    this.handleChangeToFeed = this.handleChangeToFeed.bind(this);
    this.handleChangeToDetails = this.handleChangeToDetails.bind(this);
    this.handleChangeToProfile = this.handleChangeToProfile.bind(this);
  }

  handleChangeToFeed(e) {
    e.preventDefault();
    this.setState({
      currentAppState: this.appStates.feed
    });
  }

  handleChangeToDetails() {
    this.setState({
      currentAppState: this.appStates.details
    });
  }

  handleChangeToProfile(e) {
    e.preventDefault();
    this.setState({
      currentAppState: this.appStates.profile
    });
  }

  render() {    
    let currentView = null;
    
    switch (this.state.currentAppState) {
      case this.appStates.feed:
        currentView = <BookFeed books={this.state.books} onBookTileClicked={this.handleChangeToDetails} />;
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
        Bookstagram
        <ButtonBar 
          onChangeToFeed={this.handleChangeToFeed}
          onChangeToDetails={this.handleChangeToDetails}
          onChangeToProfile={this.handleChangeToProfile}
        />
        {this.state.user}
        { currentView }
      </div>
    );
  }
}

export default App;
