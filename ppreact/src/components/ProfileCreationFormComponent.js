import React, { Component } from 'react';
import LoginProfileForm from './LoginProfileFormComponent';
import SquareBasicsForm from './SquareBasicsFormComponent';
import CustomSquareForm from './CustomSquareFormComponent';
import { Button, Row, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'


class ProfileCreationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordValid: '',
            birthdate: '',
            // basic square
            daysAlive: false,
            timeSleepAwake: false,
            food: false,
            exercise: false,
            mainDayText: '',
            // custom square
            customInput1: '',
            customInput2: '',
            customInput3: '',
            customInput4: '',
            customInput5: '',
            touched: {
                username: false,
                password: false,
                passwordValid: false,
                birthdate: false,
                daysAlive: false,
                timeSleepAwake: false,
                food: false,
                exercise: false,
                mainDayText: false,
                customInput1: false,
                customInput2: false,
                customInput3: false,
                customInput4: false,
                customInput5: false,
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
        const value = target.type === 'radio' ? target.selected : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
          this.props.postSquare(values);
          console.log(values);
      }

    
    
    render() {
        return (
            <div className="profile-container">
                <Form model="loginForm" onSubmit={values => this.handleSubmit(values)}>
                    <LoginProfileForm />
                    <SquareBasicsForm />
                    <CustomSquareForm />
                    <Link to='/dailysquare'><Button type="submit" className="btn typ-btn">start squaring!</Button></Link>
                </Form>

            </div>
        );
    }
}


export default ProfileCreationForm;