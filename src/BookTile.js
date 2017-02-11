import React, { Component } from 'react';

class BookTile extends Component {
    render() {
        return (
            <div className="BookTile">
                Hey I'm a book with title: { this.props.title }!
            </div>
        );
    }
}

export default BookTile;