import { useState, useRef, useEffect } from 'react';
import '../components/songs.css';

export function Songs({ songs }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const audioRef = useRef(null);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < songs.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const playSong = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = songs[currentIndex].url;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentIndex, isPlaying, songs]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (audioRef.current) {
                setSeconds(audioRef.current.currentTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <article className="CurrentSong" style={{backgroundImage: `url(${songs[currentIndex].image})`, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                <button onClick={handlePrevClick} className="Song--icon">
                    Previous
                </button>
                <div className="Song--info">
                    <h2>{songs[currentIndex].title}</h2>
                    <p>{songs[currentIndex].artist}</p>
                    <p>{songs[currentIndex].duration}</p>
                    <p>Current Time: {Math.floor(seconds / 60)}:{Math.floor(seconds % 60).toString().padStart(2, '0')}</p>
                    <button onClick={isPlaying ? pauseSong : playSong}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <button onClick={handleNextClick} className="Song--icon">
                    Next
                </button>
            </article>
            <audio ref={audioRef} />
        </div>
    );
}
