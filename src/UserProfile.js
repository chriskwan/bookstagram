import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
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

        const userData = {
            name: 'Ana',
            numBooks: 422,
            numFollowers: 273,
            numFollowing: 99
        };

        const style = {
            margin: 12,
            display: 'block'
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
                {/*<Toolbar>
                    <MenuItem primaryText={userData.name} />
                </Toolbar>*/}

                <div className="UserHeader">
                    <div className="UserAvatarGroup">
                        <div className="UserAvatarName">{userData.name}</div>
                        {/*<Divider inset={false} />*/}
                        <div><Avatar src={placeholderImage} size={50}/></div>
                    </div>

                    <div className="UserInfoGroupWithButton">
                        <div className="UserInfoGroup">
                            <div className="UserInfo"><p className="UserInfoTitle">{userData.numBooks}</p><p>books</p></div>
                            <div className="UserInfo"><p className="UserInfoTitle">{userData.numFollowers}</p><p>followers</p></div>
                            <div className="UserInfo"><p className="UserInfoTitle">{userData.numFollowing}</p><p>following</p></div>
                        </div>

                        <RaisedButton label="edit profile" style={style}/>
                    </div>
                </div>

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