import { createStore, combineReducers } from 'redux';
import { Reducer, initialState } from './reducer';
import { createForms } from 'react-redux-form';
import { LoginCredentials } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                loginForm: LoginCredentials
            })
        })
    );

    return store;
};