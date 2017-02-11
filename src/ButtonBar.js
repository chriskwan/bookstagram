import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import Home from 'material-ui/svg-icons/action/home'
import InsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

const discoverIcon = <Home />;
const postIcon = <ModeEdit />;
const profileIcon = <InsertEmoticon />;

class ButtonBar extends Component {
    constructor() {
        super();

        this.state = {
            selectedIndex: 0
        };
    }

    handlePostClick(e) {
        e.preventDefault();
        alert("Stay tuned!");
    }

    selectButton(index) {
        this.setState({
            selectedIndex: index
        })
    }

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem 
                        label="Discover"
                        icon={discoverIcon}
                        onTouchTap={(e) => {
                            this.selectButton(0);
                            this.props.onChangeToFeed(e);
                        }}
                    />
                    <BottomNavigationItem 
                        label="Post"
                        icon={postIcon}
                        onTouchTap={(e) => {
                            this.selectButton(1);
                            this.handlePostClick(e);
                        }}
                    />
                    <BottomNavigationItem
                        label="You"
                        icon={profileIcon}
                        onTouchTap={(e) => {
                            this.selectButton(2);
                            this.props.onChangeToProfile(e);
                        }}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default ButtonBar;