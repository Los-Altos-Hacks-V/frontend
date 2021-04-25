import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
    <div className="App">
      <header className="Dashboard-header">
        <p className="Heading">
          Your <spotGreen>Top Genres</spotGreen>.
        </p>
        <p className="Heading">
          Your <spotGreen>Top Artists</spotGreen>.
        </p>
            <p className="Artist">
                Taylor Swift
            </p>
            <p className="Artist">
                Taylor Swift
            </p>
            <p className="Artist">
                Taylor Swift
            </p>
        <p className="Heading">
          Your Curated List of <spotGreen>Alter Egos</spotGreen>.
        </p>
            <p className="Subject">
            John Doe
            </p>
            <p className="Genres">
            Classical | Pop | Rock | Jazz | 90s
            </p>
            <p className="Subject">
            John Doe
            </p>
            <p className="Genres">
            Classical | Pop | Rock | Jazz | 90s
            </p>
            <p className="Subject">
            John Doe
            </p>
            <p className="Genres">
            Classical | Pop | Rock | Jazz | 90s
            </p>
        </header>
    </div>
    );
  }
}

export default Dashboard;