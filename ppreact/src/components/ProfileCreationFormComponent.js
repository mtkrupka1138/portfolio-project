import React, { Component } from 'react';
import LoginProfileForm from './LoginProfileFormComponent';
import SquareBasicsForm from './SquareBasicsFormComponent';
import CustomSquareForm from './CustomSquareFormComponent';

class ProfileCreationForm extends Component {
    render() {
        return (
            <div className="profile-container">
                <LoginProfileForm />
                <SquareBasicsForm />
                <CustomSquareForm />
            </div>
        );
    }
}


export default ProfileCreationForm;