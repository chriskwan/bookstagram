import React, { Component } from 'react';

class BookDetails extends Component {
    render() {
        const bookData = {
            image: './harrypotter.png',
            title: "Harry Potter and the Goblet of Fire",
            author: "J. K. Rowling",
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
                {bookData.title}
                by {bookData.author}
                {bookData.description}
                {bookData.comments.map((comment) => {
                    return <p key={comment}>{comment}</p>
                })}
                <img className="BookDetailsImage" src={require(bookData.image)} alt="book"/>
            </div>
        );
    }
}

export default BookDetails;