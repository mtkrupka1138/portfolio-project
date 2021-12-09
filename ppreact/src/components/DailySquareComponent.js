import React, { Component } from "react";
import SquareInput1 from "./SingleSquare/SquareInput1";
import SquareInput2 from "./SingleSquare/SquareInput2";
import SquareInput3 from "./SingleSquare/SquareInput3";
import SquareInputMainText from "./SingleSquare/SquareInputMainText";

class DailySquare extends Component {
    constructor(props) {
        super(props);
        this.state = ''; 
    }

    render() {
        return (
            <React.Fragment>
                <div className='square-container'>
                    <SquareInput1 />
                    <SquareInput2 />
                    <SquareInput3 />
                    <SquareInputMainText />
                </div>
            </React.Fragment>
        );
    }
}

export default DailySquare;