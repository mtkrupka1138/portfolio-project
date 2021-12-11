import * as ActionTypes from './ActionTypes';

export const Squares = (state = { errMess: null, squares: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SQUARES:
            return {...state, errMess: null, squares: action.payload};

        case ActionTypes.SQUARES_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_SQUARE:
            const square = action.payload;
            return {...state, squares: state.squares.concat(square)};

        default:
            return state;
    }
};