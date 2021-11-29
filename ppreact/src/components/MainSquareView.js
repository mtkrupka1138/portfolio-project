import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DailySquare from "./DailySquareComponent";


class MainSquareView extends Component {
    constructor(props) {
        super(props);
        this.state = ''; 
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <DailySquare />
                <Footer />
            </React.Fragment>
        );
    }
}

export default MainSquareView;