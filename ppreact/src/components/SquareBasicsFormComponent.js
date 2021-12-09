import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';

class SquareBasicsForm extends Component {
    render() {
        return (
            <LocalForm>
                <div class="form-title">
            <div class="section-title">
                <p class="sub-section-title">your square basics</p>
                <p class="mini-p">choose standard parts of your square to be included every day</p>
            </div>
        </div>
        <form>
            <div class="form-group row align-items-center justify-content-center">
                <div class="col-6 text-left">
                    <label class="typ-quest">Number of days you have been alive</label>
                </div>
                <div class="col-6 text-center">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>y</span>
                            <input class="form-check-input" type="radio" id="y-1" name="y-n1" value="yes" />
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>n</span>
                            <input class="form-check-input" type="radio" id="n-1" name="y-n1" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center justify-content-center">
                <div class="col-6 text-left">
                    <label class="typ-quest">what kind of exercise you did</label>
                </div>
                <div class="col-6 text-center">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>y</span>
                            <input class="form-check-input" type="radio" id="y-2" name="y-n2" value="yes" />
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>n</span>
                            <input class="form-check-input" type="radio" id="n-2" name="y-n2" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center justify-content-center">
                <div class="col-6 text-left">
                    <label class="typ-quest">which food groups you ate from</label>
                </div>
                <div class="col-6 text-center">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>y</span>
                            <input class="form-check-input" type="radio" id="y-3" name="y-n3" value="yes" />
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>n</span>
                            <input class="form-check-input" type="radio" id="n-3" name="y-n3" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center justify-content-center">
                <div class="col-6 text-left">
                    <label class="typ-quest">did you travel anywhere</label>
                </div>
                <div class="col-6 text-center">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>y</span>
                            <input class="form-check-input" type="radio" id="y-4" name="y-n4" value="yes" />
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>n</span>
                            <input class="form-check-input" type="radio" id="n-4" name="y-n4" value="no" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center justify-content-center">
                <div class="col-6 text-left">
                    <label class="typ-quest">did you remember your dreams</label>
                </div>
                <div class="col-6 text-center">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>y</span>
                            <input class="form-check-input" type="radio" id="y-5" name="y-n5" value="yes" />
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <span>n</span>
                            <input class="form-check-input" type="radio" id="n-5" name="y-n5" value="no" />
                        </label>
                    </div>
                </div>
            </div>
        </form>
            </LocalForm>
        );
    }
}

export default SquareBasicsForm;