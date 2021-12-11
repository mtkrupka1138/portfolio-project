import React, { Component } from 'react';
import LoginProfileForm from './LoginProfileFormComponent';
import SquareBasicsForm from './SquareBasicsFormComponent';
import CustomSquareForm from './CustomSquareFormComponent';
import { Button } from 'reactstrap';

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
        const value = target.value;
    
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
                <LoginProfileForm username={this.props.username}/>
                <SquareBasicsForm />
                <CustomSquareForm />
                <div>
                    <Button type="submit" className="btn typ-btn">start squaring!</Button>
                </div>
            </div>
        );
    }
}


export default ProfileCreationForm;