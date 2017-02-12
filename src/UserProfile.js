import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

import placeholderImage from './cat_reading.jpg';

class UserProfile extends Component {
    render() {
        const userData = {
            name: 'Ana',
            numBooks: 422,
            numFollowers: 273,
            numFollowing: 99
        };

        const style = {
            margin: 12,
        };

        return (
            <div>
                {userData.name}
                
                <Avatar src={placeholderImage} />

                
                {userData.numBooks} books
                {userData.numFollowers} followers
                {userData.numFollowing} following

                <RaisedButton label="edit profile" style={style}/>
            </div>
        );
    }
}

export default UserProfile;