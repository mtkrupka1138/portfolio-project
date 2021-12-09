import React, { Component } from 'react';
import { Button, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class LoginProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            touched: {
                rating: false,
                author: false,
                text: false
            }
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleBlur = (field) => () => {
    //     this.setState({
    //         touched: {...this.state.touched, [field]: true}
    //     });
    // }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.value;
    
    //     this.setState({
    //         [name]: value
    //     });
    // }

    // handleSubmit(values) {
    //     this.toggleModal();
    //     this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
    // }

    render() {
        return (
            <React.Fragment>
                <div className="form-title">
            <div className="section-title">
                <p className="sub-section-title">profile creation</p>
                <p className="mini-p">set up account information</p>
            </div>
        </div>
        <form>
            <div className="form-group row">
                <label for="email" class="col-sm-4 col-form-label">username</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group row">
                <label for="password" className="col-sm-4 col-form-label">password</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="password" />
                </div>
            </div>
            <div className="form-group row">
                <label for="password" className="col-sm-4 col-form-label">password validation</label>
                <div className="col-sm-8">
                    <input type="password" className="form-control" id="passwordValid" />
                </div>
            </div>
            <div className="form-group row">
                <label for="date" className="col-sm-4 col-form-label">birthdate</label>
                <div className="col-sm-8">
                    <input type="date" className="form-control" id="birthdate" /> 
                </div>
            </div>
        </form>
            </React.Fragment>
        );
    }
}


export default LoginProfileForm;