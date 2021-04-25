import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <p className="Heading">
          <spotGreen>Welcome</spotGreen> to Altego<spotGreen>.</spotGreen>
        </p>
        <p className="Desc">
          Meet listeners like you from all over the world.
        </p>
        <a
          href="https://accounts.spotify.com/authorize?client_id=dcf1a2dc85864c11aaf00c98daed0e8a&response_type=code&redirect_uri=http%3A%2F%2Faltego.tech%2Fspotify-auth&scope=user-read-private%20user-read-email%20user-read-recently-played&state=34fFs29kd09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="Login">LOGIN WITH SPOTIFY</button>
        </a>
        </header>
    </div>
    );
  }
}

export default Home;