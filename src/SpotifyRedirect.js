import React, { Component } from 'react';
import axios from 'axios';

class SpotifyRedirect extends Component {
    async RegisterUser() {
        let code = window.location.href.split("?")[1].slice(5)
        console.log(code)
        let body = { code: code }
        let headers = {
            "Content-Type": "x-www-form-urlencoded"
        }
        let token = await axios.post('http://api.altego.tech/spotify-auth', body, {headers})
        console.log(token)
        // Continue working here to send token to Dashboard Page
    }

    render() {
        let token = this.RegisterUser();
        this.props.history.push({
            pathname: '/dashboard',
            state: { token: token }
        });
        return null;
    }
}

export default SpotifyRedirect;