import React, { Component } from 'react';

class BookDetails extends Component {
    render() {
        return (
            <div>
                Book Details
                Title: {this.props.book.title}
            </div>
        );
    }
}

export default BookDetails;