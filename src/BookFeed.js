import React, { Component } from 'react';
import BookTile from './BookTile'

class BookFeed extends Component {
    constructor() {
        super();
    }
    
    render() {
        const books = this.props.books.map(book => {
            return (
                <li key={book.title}>
                    <BookTile title={book.title}/> 
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