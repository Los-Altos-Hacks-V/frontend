import React, {Component} from 'react';
import axios from "axios";

class Dashboard extends Component {

    async getFriends() {
        let info = {}
        try {
            let token = window.location.href.split("?")[1].slice(6)
            let body = {token: token}
            let headers = {
                "Content-Type": "x-www-form-urlencoded"
            }
            let data = await axios.post('http://api.altego.tech/spotify-auth', body, {headers})
            info = data["data"]
        } catch {
            info = {
                "Genres": ["Hip-Hop", "Classical", "Jazz", "Blues", "Rock"],
                "Artists": ["The Weeknd", "Shawn Mendes", "Alec Benjamin"],
                "Alteregos": [
                    ["Henry Marks", "Classical | Jazz | Rock | Pop"],
                    ["Keshav Majithia", "Hip-Hop | Rock | Pop | Pop Rap | Tropical House"],
                    ["Julia Ding", "Blues | Rock | Tropical House | Rap | Pop"]
                ]
            }
        }
        return (
            <header className="Dashboard-header">
                <p className="Heading">
                    Your <spotgreen>Top Genres</spotgreen>.
                </p>
                <p className="Artist">
                    Hip-Hop, Classical, Jazz, Blues, Rock
                </p>
                <p className="Heading">
                    Your <spotgreen>Top Artists</spotgreen>.
                </p>
                <p className="Artist">
                    The Weeknd
                </p>
                <p className="Artist">
                    Shawn Mendes
                </p>
                <p className="Artist">
                    Alec Benjamin
                </p>
                <p className="Heading">
                    Your Curated List of <spotgreen>Alter Egos</spotgreen>.
                </p>
                <p className="Subject">
                    Henry Marks
                </p>
                <p className="Genres">
                    Classical | Jazz | Rock | Pop | Hip-Hop
                </p>
                <p className="Subject">
                    Keshav Majithia
                </p>
                <p className="Genres">
                    Hip-Hop | Rock | Pop | Pop Rap | Tropical House
                </p>
                <p className="Subject">
                    Julia Ding
                </p>
                <p className="Genres">
                    Blues | Rock | Tropical House | Rap | Pop
                </p>
            </header>
        )
    }

    render() {
        return <header className="Dashboard-header">
            <p className="Heading">
                Your <spotgreen>Top Genres</spotgreen>.
            </p>
            <p className="Artist">
                Hip-Hop, Classical, Jazz, Blues, Rock
            </p>
            <p className="Heading">
                Your <spotgreen>Top Artists</spotgreen>.
            </p>
            <p className="Artist">
                The Weeknd
            </p>
            <p className="Artist">
                Shawn Mendes
            </p>
            <p className="Artist">
                Alec Benjamin
            </p>
            <p className="Heading">
                Your Curated List of <spotgreen>Alter Egos</spotgreen>.
            </p>
            <p className="Subject">
                Henry Marks
            </p>
            <p className="Genres">
                Classical | Jazz | Rock | Pop | Hip-Hop
            </p>
            <p className="Subject">
                Keshav Majithia
            </p>
            <p className="Genres">
                Hip-Hop | Rock | Pop | Pop Rap | Tropical House
            </p>
            <p className="Subject">
                Julia Ding
            </p>
            <p className="Genres">
                Blues | Rock | Tropical House | Rap | Pop
            </p>
        </header>;
    }
}

export default Dashboard;