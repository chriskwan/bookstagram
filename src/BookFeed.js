import React, { Component } from 'react';
import BookTile from './BookTile'

class BookFeed extends Component {
    constructor() {
        super();

        this.onBookClickHandler = this.onBookClickHandler.bind(this);
    }

    onBookClickHandler(book) {
        this.props.onBookTileClicked(book);
    }

    render() {
        const books = this.props.books.map(book => {
            return (
                <li key={book.title}>
                    <BookTile book={book} onBookClick={(e) => {
                        e.preventDefault();
                        this.onBookClickHandler(book);
                    }}/> 
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