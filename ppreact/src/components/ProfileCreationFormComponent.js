import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import LoginProfile from './LoginProfileComponent';

class ProfileCreationForm extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginProfile />
            </React.Fragment>
        );
    }
}


export default ProfileCreationForm;