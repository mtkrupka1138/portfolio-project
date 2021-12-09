import React, { Component } from 'react';
import Header from './HeaderComponent'
import { Button, Col, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length;

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            touched: {
                email: false,
                password: false,
            }
        };
      
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {

        return (
            <div className="container">

                <div className="login-container container">
                <div className="form-title">
                    <p>login</p>
                </div>
                <LocalForm onSubmit={values => this.handleSubmit(values)} > 
                    <Row className="form-group">
                        <Label htmlFor="userEmail" className="col-xs col-md-4 col-form-label offset-1">user</Label>
                        <div className="col-xs col-md-5">
                            <Control.text model=".userEmail" id="userEmail" name="userEmail" className="form-control" validators={{required}}/>
                            <Errors
                                        className="text-danger"
                                        model=".userEmail"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                        </div>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" className="col-xs col-md-4 col-form-label offset-1">password</Label>
                        <div className="col-xs col-md-5">
                            <Control.text model=".password" id="password" name="password" className="form-control" validators={{required}}/> 
                            <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid password'
                                        }}
                                    />
                        </div>
                    </Row>
                    <Row className="form-group btn-row justify-content-center">
                        <div className="col-4">
                            <Link to='/profilecreation'><button type="button" className="btn typ-btn">create profile</button></Link>
                        </div>
                        <div className="col-3">
                            <Link to='/dailysquare'><button type="button" className="btn typ-btn">sign in</button></Link>
                        </div>
                    </Row>
                </LocalForm>
                </div>
            </div>
        );
    }  
}

   

export default Login;
