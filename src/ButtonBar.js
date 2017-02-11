import React, { Component } from 'react';

class ButtonBar extends Component {
    handlePostClick(e) {
        e.preventDefault();
        alert("Stay tuned!");
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="" onClick={this.props.onChangeToFeed}>Discover</a>
                    </li>
                    <li>
                        <a href="" onClick={this.handlePostClick}>Post</a>
                    </li>
                    <li>
                        <a href="" onClick={this.props.onChangeToProfile}>You</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ButtonBar;