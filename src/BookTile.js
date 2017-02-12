import React, { Component } from 'react';

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
            <div className="BookTile">
                <Divider inset={true} />
                <ListItem 
                    leftAvatar={ <Avatar src={placeholderImage} /> }
                >
                    <img src={placeholderImage} className="BookTileImage" alt="Book"/>
                    
                    <List>
                        <Divider inset={true} />
                        <ListItem
                           leftAvatar={ <Avatar src={placeholderImage} /> }
                           rightIconButton={rightIconMenu}
                           primaryText="Recipe to try"
                           secondaryText={
                                <p>
                                <span style={{color: darkBlack}}>Raquel Parrado</span> --
                                We should eat this: grated squash. Corn and tomatillo tacos.
                                </p>
                            }
                            secondaryTextLines={2}
                        />

                        <Divider inset={true} />
                        <ListItem
                            leftAvatar={<Avatar src={placeholderImage} />}
                            rightIconButton={rightIconMenu}
                            primaryText={
                                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
                            }
                            secondaryText={
                                <p>
                                <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                                Wish I could come, but I&apos;m out of town this weekend.
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                    </List>
                
                </ListItem>
                
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    this.props.onBookClick(e, this.props.book);
                }}>Learn More</a>
            </div>
        );
    }
}

export default BookTile;