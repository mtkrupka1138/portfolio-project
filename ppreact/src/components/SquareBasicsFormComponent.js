import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';

class SquareBasicsForm extends Component {
    render() {
        return (
            // <LocalForm>
                <React.Fragment>
                <div className="form-title">
                    <div className="section-title">
                        <p className="sub-section-title">your square basics</p>
                        <p className="mini-p">choose standard parts of your square to be included every day</p>
                    </div>
                </div>
        <form>
            <div className="form-group row align-items-center justify-content-center">
                <div className="col-6 text-left">
                    <label className="typ-quest">Number of days you have been alive</label>
                </div>
                <div className="col-6 text-center">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>y</span>
                            <input className="form-check-input" type="radio" id="y-1" name="y-n1" value="yes" />
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>n</span>
                            <input className="form-check-input" type="radio" id="n-1" name="y-n1" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-center">
                <div className="col-6 text-left">
                    <label className="typ-quest">what kind of exercise you did</label>
                </div>
                <div className="col-6 text-center">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>y</span>
                            <input className="form-check-input" type="radio" id="y-2" name="y-n2" value="yes" />
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>n</span>
                            <input className="form-check-input" type="radio" id="n-2" name="y-n2" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-center">
                <div className="col-6 text-left">
                    <label className="typ-quest">which food groups you ate from</label>
                </div>
                <div className="col-6 text-center">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>y</span>
                            <input className="form-check-input" type="radio" id="y-3" name="y-n3" value="yes" />
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>n</span>
                            <input className="form-check-input" type="radio" id="n-3" name="y-n3" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-center">
                <div className="col-6 text-left">
                    <label className="typ-quest">did you travel anywhere</label>
                </div>
                <div className="col-6 text-center">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>y</span>
                            <input className="form-check-input" type="radio" id="y-4" name="y-n4" value="yes" />
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>n</span>
                            <input className="form-check-input" type="radio" id="n-4" name="y-n4" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group row align-items-center justify-content-center">
                <div className="col-6 text-left">
                    <label className="typ-quest">did you remember your dreams</label>
                </div>
                <div className="col-6 text-center">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>y</span>
                            <input className="form-check-input" type="radio" id="y-5" name="y-n5" value="yes" />
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <span>n</span>
                            <input className="form-check-input" type="radio" id="n-5" name="y-n5" value="no" />
                        </label>
                    </div>
                </div>
            </div>
        </form>
                </React.Fragment>
                
            // /* </LocalForm> */
        );
    }
}

export default SquareBasicsForm;