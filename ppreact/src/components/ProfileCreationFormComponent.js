import React, { Component } from 'react';
import LoginProfileForm from './LoginProfileFormComponent';
import SquareBasicsForm from './SquareBasicsFormComponent';
import CustomSquareForm from './CustomSquareFormComponent';

class ProfileCreationForm extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginProfileForm />
                <SquareBasicsForm />
                <CustomSquareForm />

            </React.Fragment>
        );
    }
}


export default ProfileCreationForm;