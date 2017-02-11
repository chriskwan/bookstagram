import React, { Component } from 'react';

class BookTile extends Component {
    render() {
        return (
            <div className="BookTile">
                <img src={require('./cat_reading.jpg')} className="BookTileImage" />
                Hey I'm a book with title: { this.props.title }!
            </div>
        );
    }
}

export default BookTile;