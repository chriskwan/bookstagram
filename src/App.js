import React, { Component } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BookFeed from './BookFeed';
import ButtonBar from './ButtonBar';
import UserProfile from './UserProfile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RaisedButton} from 'material-ui';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
      currentAppState: this.appStates.feed,
      currentBook: null
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

  handleChangeToDetails(book) {
    this.setState({
      currentAppState: this.appStates.details,
      currentBook: book
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
        currentView = <BookDetails book={this.state.currentBook}/>;
        break;
      case this.appStates.profile:
        currentView = <UserProfile />;
        break;
      default:
        break;
    }

    return (
      <MuiThemeProvider>
        <div className="App">
            Bookstagram
            <RaisedButton label="Hello World"/>
            <ButtonBar 
              onChangeToFeed={this.handleChangeToFeed}
              onChangeToDetails={this.handleChangeToDetails}
              onChangeToProfile={this.handleChangeToProfile}
            />
            {this.state.user}
            { currentView }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
