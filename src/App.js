import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookDetails from './BookDetails';
import BookFeed from './BookFeed';
import UserProfile from './UserProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Chris",
      books: [{ title: "A" }, { title: "B" }, { title: "C" }]
    }
  }

  render() {    
    return (
      <div className="App">
        {this.state.user}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BookFeed books={this.state.books}/>
        <BookDetails />
        <UserProfile />
      </div>
    );
  }
}

export default App;
