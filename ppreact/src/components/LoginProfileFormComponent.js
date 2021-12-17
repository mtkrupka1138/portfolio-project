import React, { Component } from 'react';
import { Button, Col, Row, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class LoginProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <React.Fragment>
                <div className="form-title">
                    <div className="section-title">
                        <p className="sub-section-title">profile creation</p>
                        <p className="mini-p">set up account information</p>
                    </div>
                </div>
                <Row className="form-group">
                    <Label htmlFor="username" className="col-sm-4 col-form-label">username</Label>
                    <div className="col-sm-8">
                        <Control.text model=".username" id="username" name="username" className="form-control" />
                    </div>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="password" className="col-sm-4 col-form-label">password</Label>
                    <div className="col-sm-8">
                        <Control.text model=".password" id="password" name="password" className="form-control" />
                    </div>
                </Row>
                <Row className="form-group row">
                    <Label htmlFor="passwordValid" className="col-sm-4 col-form-label">password validation</Label>
                    <div className="col-sm-8">
                        <Control.text model=".passwordValid" id="passwordValid" name="passwordValid" className="form-control" />
                    </div>
                </Row>
                <Row className="form-group row">
                    <Label htmlFor="birthdate" className="col-sm-4 col-form-label">birthdate</Label>
                    <div className="col-sm-8">
                        <Control.text model=".birthdate" id="birthdate" name="birthdate" className="form-control" /> 
                    </div>
                </Row>
            </React.Fragment>
        );
    }
}


export default LoginProfileForm;