import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p className="Heading">
                        <spotgreen>Welcome</spotgreen>&nbsp;to Altego
                        <spotgreen>.</spotgreen>
                    </p>
                    <p className="Desc">
                        Meet listeners like you from all over the world.
                    </p>
                    <a
                        href="https://accounts.spotify.com/authorize?client_id=dcf1a2dc85864c11aaf00c98daed0e8a&response_type=code&redirect_uri=http%3A%2F%2Ffrontend-o7byi3rdva-uc.a.run.app%2Fdashboard&scope=user-read-private%20user-read-email%20user-read-recently-played"
                        className="Login">LOG IN WITH SPOTIFY</a>
                </header>
            </div>
        );
    }
}

export default Home;