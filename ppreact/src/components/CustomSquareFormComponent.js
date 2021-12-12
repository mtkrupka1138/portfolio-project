import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';

class CustomSquareForm extends Component {
    render() {
        return (
            // <LocalForm>
            <React.Fragment>
<div class="form-title">
            <div class="section-title">
                <p class="sub-section-title">customize your square</p>
                <p class="mini-p">create parts of your square unique to you (habit tracking anyone?)</p>
            </div>
        </div>
            <div class="form-group row">
                <label for="email" class="col-sm-4 col-form-label">custom input 1</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="test-input" />
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-4 col-form-label">custom input 2</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-4 col-form-label">custom input 3</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-4 col-form-label">custom input 4</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-4 col-form-label">custom input 5</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" />
                </div>
            </div>
            </React.Fragment>
                
                
            // </LocalForm>
        );
    }
}

export default CustomSquareForm;