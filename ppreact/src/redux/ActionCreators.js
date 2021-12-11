import * as ActionTypes from '../redux/ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addSquare = square => ({
    type: ActionTypes.ADD_SQUARE,
    payload: square
});

export const addSquares = squares => ({
    type: ActionTypes.ADD_SQUARES,
    payload: squares
});

export const squaresFailed = errMess => ({
    type: ActionTypes.SQUARES_FAILED,
    payload: errmESS
});

export const squaresLoading = () => ({
    type: ActionTypes.SQUARES_LOADING
});



export const postSquare = () => dispatch => {
    
    const newSquare = {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newSquare.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newSquare),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addSquare(response)))
        .catch(error => {
            console.log('post square', error.message);
            alert('Your square could not be posted\nError: ' + error.message);
        });
};

export const fetchSquares = () => dispatch => {
    return fetch(baseUrl + 'squares')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addSquares(comments)))
        .catch(error => dispatch(squaresFailed(error.message)));
};


// collect/post login info

export const getLogin = (loginData) => () => {

    return fetch(baseUrl + 'loginData', {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => alert("Thank you for your login data.\n " + JSON.stringify(response)))
        .catch(error => {
            console.log('post login data', error.message);
            alert('Your login data could not be posted\nError: ' + error.message);
        });
};