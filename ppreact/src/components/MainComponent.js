import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Login from './LoginComponent';
import Header from './HeaderComponent';
import ProfileCreationForm from './ProfileCreationFormComponent';
import DailySquare from './DailySquareComponent';
import { addSquare, addSquares, squaresFailed, squaresLoading, postSquare, fetchSquares, getLogin } from '../redux/ActionCreators';

class Main extends Component {

    // componentDidMount() {
    //     this.props.fetchSquares();
    // }

    render() {

        const LoginPage = () => {
            return (
                <Login />
            );
        }

        const DailySquarePage = () => {
            return (
                <DailySquare
                    square={this.props.squares.squares.filter(square => square.id)} 
                />
            );
        }
    

    return (
        <div>
            <Header /> 
            <Switch>
                <Route exact path='/home' component={LoginPage} />
                <Route exact path='/profilecreation' render={() => <ProfileCreationForm postSquare={this.props.postSquare} /> } />
                <Route exact path='/dailysquare' component={DailySquarePage} />
                <Redirect to ='/home' />
            </Switch>
        </div>
    );

    }
}

const mapStateToProps = state => {
    return {
        squares: state.squares,
    };
};

const mapDispatchToProps = {
    postSquare: (squareInfo) => (postSquare(squareInfo)),
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));