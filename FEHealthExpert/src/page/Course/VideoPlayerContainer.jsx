import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer'; // Corrected import statement

const VideoPlayerContainer = () => {
    const [lessonId, setLessonId] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state for better UX

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state when submitting form

        // Optional: Add console.log to check lessonId state
        console.log("Lesson ID:", lessonId);

        // Optionally, perform any actions on form submission if needed

        // Remove this comment and call any API-related functions here if necessary

        setLoading(false); // Reset loading state after API request
    };

    return (
        <div>
            <h2>Enter Lesson ID</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="lessonId">Lesson ID:</label>
                <input type="text" id="lessonId" value={lessonId} onChange={(e) => setLessonId(e.target.value)} />
                <br />
                <button type="submit">Fetch Video</button>
            </form>
            {loading && <p>Loading...</p>} {/* Show loading message if loading */}
            <VideoPlayer lessonId={lessonId} />
        </div>
    );
};

export default VideoPlayerContainer;
