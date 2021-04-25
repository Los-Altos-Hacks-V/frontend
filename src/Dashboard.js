import React, {Component} from 'react';
import axios from "axios";

class Dashboard extends Component {

    async getFriends() {
        return null;
        // Need to use Token (from redirect) to get friends
    }

    render() {
        return (
            <div className="App">
                <header className="Dashboard-header">
                    <p className="Heading">
                        Your <spotgreen>Top Genres</spotgreen>.
                    </p>
                    <p className="Heading">
                        Your <spotgreen>Top Artists</spotgreen>.
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
                        Your Curated List of <spotgreen>Alter Egos</spotgreen>.
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