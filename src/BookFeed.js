import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
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
        const bookTiles = this.props.books.map(book => {
            return (
                <ListItem key={book.title}>
                    <BookTile book={book} onBookClick={(e) => {
                        e.preventDefault();
                        this.onBookClickHandler(book);
                    }}/> 
                </ListItem>
            );
        });

        return (
            <div>
                <List>
                    {bookTiles}
                </List>
            </div>
        );
    }
}

export default BookFeed;