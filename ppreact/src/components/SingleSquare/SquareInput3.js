import React, { Component } from "react";
import { Control } from 'react-redux-form';

class SquareInput3 extends Component {
    constructor(props) {
        super(props);
        this.state = ''; 
    }

    render() {
        return (
        <div className="square-item" id="square3">
            <div className="inside-square-item" data-toggle="tooltip" data-placement="top" title="for input"></div>
        </div>
        );
    }
}

export default SquareInput3;