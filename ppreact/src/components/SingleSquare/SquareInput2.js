import React, { Component } from "react";
import { Control } from 'react-redux-form';

class SquareInput2 extends Component {
    constructor(props) {
        super(props);
        this.state = ''; 
    }

    render() {
        return (
        <div className="square-item" id="square2">
            <div className="inside-square-item" data-toggle="tooltip" data-placement="top" title="for input"></div>
        </div>
        );
    }
}

export default SquareInput2;