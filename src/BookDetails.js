import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

class BookDetails extends Component {
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                width: 500,
                height: 450,
                overflowY: 'auto'
            }
        };

        const tilesData = [{
            img: "./breadweeatindreams.jpg",
            //img: "./harrypotter.png",
            // title: 'Breakfast',
            // featured: true
        },
        {
            img: "./neverletmego.jpg",
            // title: 'Tasty burger'
        },
        {
            img: "./whiteteeth.png",
            // title: 'Camera'
        },
        {
            img: "./eleanoreandpark.png",
            // title: 'Morning',
            // featured: true
        },
        {
            img: "./blonde.png",
            // title: 'Hats'
        },
        {
            img: "./perksofbeingawallflower.png",
            // title: 'Honey'
        },
        {
            img: "./lookingforalaska.png",
            // title: 'Vegetables'
        },
        {
            img: "./practicalmagic.png",
            // title: 'Water plant'
        }];


        const tiles = tilesData.map((tile) => {
            return (
                <GridTile
                    key={tile.img + tile.title}
                    title={tile.title}
                    titlePosition="top"
                    cols={tile.featured ? 2 : 1}
                    rows={tile.featured ? 2 : 1}
                >
                    <img src={require(tile.img)} alt="book"/>
                </GridTile>
            );
        });

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

                <div style={styles.root}>
                    <GridList
                        cols={2}
                        cellHeight={200}
                        padding={1}
                        style={styles.gridList}
                    >
                        {tiles}
                    </GridList>
                </div>
            </div>
        );
    }
}

export default BookDetails;