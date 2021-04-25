import React, { Component } from 'react';
import axios from 'axios';

class SpotifyRedirect extends Component {
    async RegisterUser() {
        console.log(window.location.href)
        let code = window.location.href.split("?")[1].slice(5)
        let body = { code: code }
        let sent = await axios.post('http://altego-service-o7byi3rdva-uc.a.run.app/spotify-auth', body)
        return sent.response()
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