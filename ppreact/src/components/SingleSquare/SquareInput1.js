import React, { Component } from "react";
import { Control } from 'react-redux-form';

class SquareInput1 extends Component {
    constructor(props) {
        super(props);
        this.state = ''; 
    }

    render() {
        return (
        <div className="square-item" id="square1">
            <div className="inside-square-item" data-toggle="tooltip" data-placement="top" title="for input"></div>
        </div>
        );
    }
}

export default SquareInput1;