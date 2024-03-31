import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const VideoPlayer = ({ lessonId }) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const fetchVideoUrl = async () => {
            try {
                //const response = await axios.get(`https://localhost:7158/api/Lesson/GetLessonById?id=${lessonId}`);
                const response = await axios.get(`https://localhost:7158/api/Lesson/GetLessonById?id=6`);
                const lesson = response.data;
                const videoFile = lesson.videoFile;
                if (videoFile) {
                    setVideoUrl(videoFile);
                } else {
                    setError('No video URL found');
                }
            } catch (error) {
                setError('Error fetching video URL');
            } finally {
                setLoading(false);
            }
        };

        fetchVideoUrl();
    }, [lessonId]);

    useEffect(() => {
        if (videoRef.current) {
            isPlaying ? videoRef.current.play() : videoRef.current.pause();
        }
    }, [isPlaying]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Video Player</h2>
            {videoUrl ? (
                <div>
                    {/* <video ref={videoRef} width="320" height="240" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    <ReactPlayer controls={true} url={videoUrl} height="500px" width="750px" />
                </div>
            ) : (
                <div>No video available</div>
            )}
        </div>
    );
};

export default VideoPlayer;
