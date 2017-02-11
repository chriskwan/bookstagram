import React, { Component } from 'react';
import BookTile from './BookTile'

class BookFeed extends Component {
    constructor() {
        super();

        this.onBookClickHandler = this.onBookClickHandler.bind(this);
    }

    onBookClickHandler(e, message) {
        e.preventDefault();
        this.props.onBookTileClicked();
    }

    render() {
        const books = this.props.books.map(book => {
            return (
                <li key={book.title}>
                    <BookTile title={book.title} onBookClick={this.onBookClickHandler}/> 
                </li>
            );
        });

        return (
            <div>
                Book Feed
                <ul>
                    {books}
                </ul>
            </div>
        );
    }
}

export default BookFeed;