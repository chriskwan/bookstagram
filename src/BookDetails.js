import React, { Component } from 'react';

class BookDetails extends Component {
    render() {
        const bookData = {
            image: './harrypotter.png',
            title: "Harry Potter and the Goblet of Fire",
            author: "J. K. Rowling",
            blurb: "Harry Potter's 4th year of Hogwarts",
            description: "Sometimes you just need to read some Harry Potter. #resist #dumbledore #hp4 #dumbledorequotes",
            comments: [
                "Jamie: Srsly",
                "Morgan: Yaaaaaas! :sob:"
            ],
            links: [
                "https://www.amazon.com/Harry-Potter-Goblet-Fire-Rowling/dp/0439139600"
            ]
        }

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