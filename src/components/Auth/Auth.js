import React, { Component } from 'react';

export default class Auth extends Component {

    render() {
        return (
            <div>
                <h1>Auth</h1>
                <a href={process.env.REACT_APP_LOGIN}>Log In</a>
            </div>
        )
    }
}