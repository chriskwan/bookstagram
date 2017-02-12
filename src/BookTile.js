import React, { Component } from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import placeholderImage from './cat_reading.jpg';

class BookTile extends Component {
    render() {
        const tileData = {
            userName: "Ana", //cwkTODO don't hardcode
            date: (new Date()).toDateString(),
        };

        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem>Reply</MenuItem>
            <MenuItem>Forward</MenuItem>
            <MenuItem>Delete</MenuItem>
        </IconMenu>
        );

        return (
            <Card>
                <CardHeader
                    title={tileData.userName}
                    subtitle={tileData.date.toString()}
                    avatar={placeholderImage}
                />
                <CardMedia>
                    <img src={require(this.props.book.image)} className="BookTileImage" alt="Book"/>
                </CardMedia>
                <CardText>
                    <List>
                        {this.props.book.comments.map((comment) => {
                            return <ListItem
                                key={comment}
                                leftAvatar={ <Avatar src={placeholderImage} size={25} /> }
                                rightIconButton={rightIconMenu}
                                secondaryText={
                                        <p style={{color: darkBlack}}>{comment}</p>
                                    }
                                    secondaryTextLines={1}
                                />
                        })}
                    </List>
                </CardText>
                <CardActions>
                    <FlatButton label="Learn More" onClick={(e) => {
                        e.preventDefault();
                        this.props.onBookClick(e, this.props.book);
                    }}/>
                </CardActions>
            </Card>
        );
    }
}

export default BookTile;