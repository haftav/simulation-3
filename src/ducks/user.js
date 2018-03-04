import axios from 'axios';

const initialState = {
    user: {},
    recommends: []
}

const GET_USER = "GET_USER";
const GET_RECOMMENDED = "GET_RECOMMENDED";
const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_RECOMMENDED + '_FULFILLED':
            return Object.assign({}, state, { recommends: action.payload } )
        case UPDATE_USER:
            console.log(action.payload);
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
        
    }

}

export function getUser() {
    let userData = axios.get('/api/auth/authenticated').then(res => {
        // console.log(res.data);
        return res.data
    })
    return {
        type: GET_USER,
        payload: userData
    }
}

export function getRecommended(key, value, id) {
    if (!value) {
        value = '';
    }

    let recommends = axios.post('/api/recommended', { key, value, id }).then(res => {
        return res.data;
    })

    return {
        type: GET_RECOMMENDED,
        payload: recommends
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}