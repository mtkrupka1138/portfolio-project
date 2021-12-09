import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './LoginComponent';
import Header from './HeaderComponent';
import ProfileCreationForm from './ProfileCreationFormComponent';
import DailySquare from './DailySquareComponent';

class Main extends Component {

    render() {

        const LoginPage = () => {
            return (
                <Login />
            );
        }
    

    return (
        <div>
            <Header /> 
            <Switch>
                <Route exact path='/home' component={LoginPage} />
                <Route exact path='/profilecreation' component={ProfileCreationForm} />
                <Route exact path='/dailysquare' component={DailySquare} />
                <Redirect to ='/home' />
            </Switch>
        </div>
    );

    }
}


export default withRouter(Main);