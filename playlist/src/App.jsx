import './App.css';
import { Songs } from './components/songs';
import skyline from '../images/new-york-skyline.jpg';
import citylights from '../images/cityLights.jpg';
import queen from '../images/queen.jpg'

function App() {
    const songs = [
            {
                title: "Bohemian Rhapsody",
                artist: "Queen",
                duration: "5:59",
                url: "./muziek/Bohemian-Rhapsody.mp3",
                image: queen
            },
            {
                title: "Flashing Lights",
                artist: "Kanye West",
                duration: "3:57",
                url: "./muziek/Flashing-Lights.mp3",
                image: skyline
            },
            {
                title: "Blinding Lights",
                artist: "The Weeknd",
                duration: "3:23",
                url: "./muziek/blinding_lights.mp3" ,
                image: citylights
            },
    ];

    return (
        <Songs songs={songs} />
    );
}

export default App;
