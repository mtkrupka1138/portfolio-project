import React, { Component } from 'react';
import LoginProfileForm from './LoginProfileFormComponent';
import SquareBasicsForm from './SquareBasicsFormComponent';
import CustomSquareForm from './CustomSquareFormComponent';
import { Button, Row, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';


class ProfileCreationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordValid: '',
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
      }

    
    
    render() {
        return (
            <div className="profile-container">
                <Form model="loginForm" onSubmit={values => this.handleSubmit(values)}>
                <LoginProfileForm />
                <SquareBasicsForm />
                <CustomSquareForm />
                <Button type="submit" className="btn typ-btn">start squaring!</Button>
                </Form>
                
                {/* <Form model="loginForm" onSubmit={values => this.handleSubmit(values)}>
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
                    <div>
                        <Button type="submit" className="btn typ-btn">start squaring!</Button>
                    </div>
                </Form> */}
            </div>
        );
    }
}


export default ProfileCreationForm;