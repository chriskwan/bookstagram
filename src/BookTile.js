import React, { Component } from 'react';
import placeholderImage from './cat_reading.jpg';

class BookTile extends Component {
    render() {
        return (
            <div className="BookTile">
                <img src={placeholderImage} className="BookTileImage" />
                Hey I'm a book with title: { this.props.title }!
            </div>
        );
    }
}

export default BookTile;