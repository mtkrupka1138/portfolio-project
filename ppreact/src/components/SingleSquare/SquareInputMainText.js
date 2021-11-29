import React, { Component } from "react";
import { Control } from 'react-redux-form';

class SquareInputMainText extends Component {
    constructor(props) {
        super(props);
        this.state = ''; 
    }

    render() {
        return (
        <div className="main-square" id="main-square">
            <div className="inner-square"></div>
            <Control.textarea model='.mainSquareText' id='mainSquareText' name='.mainSquareText' placeholder='What defined your day?'>
            </Control.textarea>
        </div>
        );
    }
}

export default SquareInputMainText;