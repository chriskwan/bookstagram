import React, { Component } from 'react';
import BookTile from './BookTile'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Chris",
      books: [{ title: "A" }, { title: "B" }, { title: "C" }]
    }
  }

  render() {
    const books = this.state.books.map(book => {
      return (
          <li key={book.title}>
            <BookTile title={book.title}/> 
          </li>
      );
    });
    
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
        <ul>
          {books}
        </ul>
      </div>
    );
  }
}

export default App;
