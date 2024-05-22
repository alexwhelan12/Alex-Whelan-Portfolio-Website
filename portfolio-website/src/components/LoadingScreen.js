// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Start fade-out transition
            setTimeout(() => {
                setLoading(false); // Hide loader after fade-out transition
            }, 500); // Match this duration with the CSS transition duration
        }, 1500); // Set the duration of the loading animation

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, []);

    return (
        <>
            {loading && (
                <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
                    <div className="loader"></div>
                </div>
            )}
        </>
    );
};

export default LoadingScreen;
