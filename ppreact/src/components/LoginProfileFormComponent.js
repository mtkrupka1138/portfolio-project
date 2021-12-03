import React, { Component } from 'react';
import { Button, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class LoginProfileForm extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            username: '',
            password: '',
            touched: {
                rating: false,
                author: false,
                text: false
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
        this.toggleModal();
        this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    render() {
        return (
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <div className="form-group">
                    <Label htmlFor="rating">Username</Label>
                        <Control.select model=".rating" id="rating" name="rating" className="form-control" defaultValue={1}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                </div>
                <div className="form-group">
                    <Label htmlFor="author">Password</Label>
                    <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                        validators={{
                            required, 
                            minLength: minLength(2),
                            maxLength: maxLength(15)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        component="div"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be at least 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Label htmlFor="text">Comment</Label> {/* NOTE: ADDED MIN AND MAX LENGTHS AND REQUIRED VALIDATORS (NOT IN INSTRUCTIONS) */}
                    <Control.textarea model=".text" id="text" name="text" rows="6" className="form-control" 
                        validators={{
                            required, 
                            minLength: minLength(3),
                            maxLength: maxLength(100)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".text"
                        show="touched"
                        component="div"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be at least 3 characters',
                            maxLength: 'Must be 100 characters or less'
                        }}
                    />
                </div>
                <Button outline onClick={this.toggleModal}>Create</Button>
            </LocalForm>
        );
    }
}


export default LoginProfileForm;