import React, { Component } from 'react';
import placeholderImage from './cat_reading.jpg';

class BookTile extends Component {
    handleLearnMoreClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="BookTile">
                <img src={placeholderImage} className="BookTileImage" alt="Book"/>
                Hey I'm a book with title: { this.props.title }!
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    this.props.onBookClick(e, this.props.title);
                }}>Learn More</a>
            </div>
        );
    }
}

export default BookTile;