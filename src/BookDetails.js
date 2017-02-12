import React, { Component } from 'react';

class BookDetails extends Component {
    render() {
        const bookData = this.props.book;
        return (
            <div className="BookDetails">
                <img className="BookDetailsImage" src={require(bookData.image)} alt="book"/>
                <p className="BookDetailsTitle">{bookData.title}</p>
                <p>{bookData.author}</p>
                <p className="BookDetailsText">{bookData.blurb}</p>
                <p className="BookDetailsText">{bookData.description}</p>
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