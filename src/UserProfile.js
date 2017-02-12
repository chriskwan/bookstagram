import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';

import placeholderImage from './cat_reading.jpg';

class UserProfile extends Component {
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

        const placeholderImageUrl = './cat_reading.jpg';

        const tilesData = [{
            img: placeholderImageUrl,
            title: 'Breakfast',
            featured: true
        },
        {
            img: placeholderImageUrl,
            title: 'Tasty burger'
        },
        {
            img: placeholderImageUrl,
            title: 'Camera'
        },
        {
            img: placeholderImageUrl,
            title: 'Morning',
            featured: true
        },
        {
            img: placeholderImageUrl,
            title: 'Hats'
        },
        {
            img: placeholderImageUrl,
            title: 'Honey'
        },
        {
            img: placeholderImageUrl,
            title: 'Vegetables'
        },
        {
            img: placeholderImageUrl,
            title: 'Water plant'
        }];

        const userData = {
            name: 'Ana',
            numBooks: 422,
            numFollowers: 273,
            numFollowing: 99
        };

        const style = {
            margin: 12,
        };

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

        return (
            <div>
                <Toolbar>
                    <MenuItem primaryText={userData.name} />
                </Toolbar>
                
                <Avatar src={placeholderImage} />

                
                {userData.numBooks} books
                {userData.numFollowers} followers
                {userData.numFollowing} following

                <RaisedButton label="edit profile" style={style}/>

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

export default UserProfile;