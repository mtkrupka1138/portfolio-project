import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DailySquare from "./DailySquareComponent";


function RenderSquareItem({square}) {
    return (
        <Card>
            <Link to={`/mainsquareview/${square.id}`}>
            <CardImg width="100%" src={baseUrl + square.image} alt={square.date} /> 
                <CardImgOverlay>
                    <CardTitle>{square.date}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function MainSquareView(props) {
    const mainSquare = props.squares.squares.map(square => {
        return (
            <div key={square.id} className="col-md-5 m-1">
                <RenderSquareItem square={square} />
            </div>
        );
    });

    if (props.squares.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.squares.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.squares.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                {mainSquare}
            </div>
        </div>
    );
}

export default MainSquareView;