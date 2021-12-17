import React, { Component } from 'react';
import { Button, Col, Row, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

class CustomSquareForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="form-title">
                    <div class="section-title">
                        <p class="sub-section-title">customize your square</p>
                        <p class="mini-p">create parts of your square unique to you (habit tracking anyone?)</p>
                    </div>
                </div>
                <Row class="form-group">
                    <Label htmlFor="customInput1" class="col-sm-4 col-form-label">custom input 1</Label>
                    <div class="col-sm-8">
                        <Control.text model=".customInput1" id="customInput1" name="customInput1" className="form-control" />
                    </div>
                </Row>
                <Row class="form-group">
                    <Label htmlFor="customInput2" class="col-sm-4 col-form-label">custom input 2</Label>
                    <div class="col-sm-8">
                        <Control.text model=".customInput2" id="customInput2" name="customInput2" className="form-control" />
                    </div>
                </Row>
                <Row class="form-group">
                    <Label htmlFor="customInput3" class="col-sm-4 col-form-label">custom input 3</Label>
                    <div class="col-sm-8">
                        <Control.text model=".customInput3" id="customInput3" name="customInput4" className="form-control" />
                    </div>
                </Row>
                <Row class="form-group">
                    <Label htmlFor="customInput4" class="col-sm-4 col-form-label">custom input 4</Label>
                    <div class="col-sm-8">
                        <Control.text model=".customInput4" id="customInput4" name="customInput4" className="form-control" />
                    </div>
                </Row>
                <Row class="form-group">
                    <Label htmlFor="customInput5" class="col-sm-4 col-form-label">custom input 5</Label>
                    <div class="col-sm-8">
                        <Control.text model=".customInput5" id="customInput5" name="customInput5" className="form-control" />
                    </div>
                </Row>
            </React.Fragment>
        );
    }
}

export default CustomSquareForm;