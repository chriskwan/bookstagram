import React, { Component } from 'react';

class BookDetails extends Component {
    render() {
        const bookData = this.props.book;
        return (
            <div>
                <img className="BookDetailsImage" src={require(bookData.image)} alt="book"/>
                <div>{bookData.title}</div>
                <div>{bookData.author}</div>
                <div>{bookData.blurb}</div>
                <div>{bookData.description}</div>
                {/*{bookData.comments.map((comment) => {
                    return <p key={comment}>{comment}</p>
                })}*/}
                {bookData.links.map((link) => {
                    return <p key={link}><a href={link} target="_new">Get this book!</a></p>
                })}
            </div>
        );
    }
}

export default BookDetails;