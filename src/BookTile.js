import React, { Component } from 'react';
import placeholderImage from './cat_reading.jpg';

class BookTile extends Component {
    render() {
        return (
            <div className="BookTile">
                <img src={placeholderImage} className="BookTileImage" alt="Book"/>
                Hey I'm a book with title: { this.props.book.title }!
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    this.props.onBookClick(e, this.props.book);
                }}>Learn More</a>
            </div>
        );
    }
}

export default BookTile;