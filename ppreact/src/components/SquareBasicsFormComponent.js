import React, { Component } from 'react';
import { Button, Col, Row, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

class SquareBasicsForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-title">
                    <div className="section-title">
                        <p className="sub-section-title">your square basics</p>
                        <p className="mini-p">choose standard parts of your square to be included every day</p>
                    </div>
                </div>
                <div className="form-group row align-items-center justify-content-center">
                    <div className="col-6 text-left">
                        <Label className="typ-quest">Number of days you have been alive</Label>
                    </div>
                    <div className="col-6 text-center">
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>y</span>
                                <Control className="form-check-input" type="radio" model=".y-1" id="y-1" name="y-1" value="yes" />
                            </Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>n</span>
                                <Control className="form-check-input" type="radio" model=".n-1" id="n-1" name="n-1" value="no" />
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="form-group row align-items-center justify-content-center">
                    <div className="col-6 text-left">
                        <Label className="typ-quest">what kind of exercise you did</Label>
                    </div>
                    <div className="col-6 text-center">
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>y</span>
                                <Control className="form-check-input" type="radio" model=".y-2" id="y-2" name="y-2" value="yes" />
                            </Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>n</span>
                                <Control className="form-check-input" type="radio" model=".n-2" id="n-2" name="n-2" value="no" />
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="form-group row align-items-center justify-content-center">
                    <div className="col-6 text-left">
                        <Label className="typ-quest">which food groups you ate from</Label>
                    </div>
                    <div className="col-6 text-center">
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>y</span>
                                <Control className="form-check-input" type="radio" model=".y-3" id="y-3" name="y-3" value="yes" />
                            </Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>n</span>
                                <Control className="form-check-input" type="radio" model=".n-3" id="n-3" name="n-3" value="no" />
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="form-group row align-items-center justify-content-center">
                    <div className="col-6 text-left">
                        <Label className="typ-quest">did you travel anywhere</Label>
                    </div>
                    <div className="col-6 text-center">
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>y</span>
                                <Control className="form-check-input" type="radio" model=".y-4" id="y-4" name="y-4" value="yes" />
                            </Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>n</span>
                                <Control className="form-check-input" type="radio" model=".n-4" id="n-4" name="n-4" value="no" />
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="form-group row align-items-center justify-content-center">
                    <div className="col-6 text-left">
                        <Label className="typ-quest">did you remember your dreams</Label>
                    </div>
                    <div className="col-6 text-center">
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>y</span>
                                <Control className="form-check-input" type="radio" model=".y-5" id="y-5" name="y-5" value="yes" />
                            </Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Label className="form-check-label">
                                <span>n</span>
                                <Control className="form-check-input" type="radio" model=".n-5" id="n-5" name="n-5" value="no" />
                            </Label>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SquareBasicsForm;