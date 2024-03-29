import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { LoginCredentials } from './forms';
import { Squares } from './squares';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            squares: Squares,
            ...createForms({
                loginForm: LoginCredentials
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};