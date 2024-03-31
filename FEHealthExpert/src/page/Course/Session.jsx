import React, { useState } from 'react';
import axios from 'axios';

const VideoUploader = () => {
    const [file, setFile] = useState(null);
    const [lessonId, setLessonId] = useState('');
    const [caption, setCaption] = useState('');
    const [cover, setCover] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('_IFormFile', file);
        formData.append('caption', caption);
        formData.append('cover', cover);
        formData.append('sessionId', sessionId);
        formData.append('lessonId', lessonId);

        try {
            const response = await axios.post('https://localhost:7158/api/Lesson/UploadFile', formData);
            setUploadStatus('Upload successful');
            console.log(response.data); // Do something with the response if needed
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Upload failed');
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label htmlFor="video-file" className="block mb-1 font-semibold">Select a file:</label>
                <input type="file" id="video-file" name="videoFile" className="border border-gray-300 py-1 px-2 rounded-md" onChange={handleFileChange} />
                <br />
                <br />
                <label htmlFor="lessonId" className="block mb-1 font-semibold">Lesson ID:</label>
                <input type="text" id="lessonId" name="lessonId" className="border border-gray-300 py-1 px-2 rounded-md" value={lessonId} onChange={(e) => setLessonId(e.target.value)} />
                <br />
                <label htmlFor="caption" className="block mb-1 font-semibold">Caption:</label>
                <input type="text" id="caption" name="caption" className="border border-gray-300 py-1 px-2 rounded-md" value={caption} onChange={(e) => setCaption(e.target.value)} />
                <br />
                <label htmlFor="cover" className="block mb-1 font-semibold">Cover:</label>
                <input type="text" id="cover" name="cover" className="border border-gray-300 py-1 px-2 rounded-md" value={cover} onChange={(e) => setCover(e.target.value)} />
                <br />
                <label htmlFor="sessionId" className="block mb-1 font-semibold">Session ID:</label>
                <input type="text" id="sessionId" name="sessionId" className="border border-gray-300 py-1 px-2 rounded-md" value={sessionId} onChange={(e) => setSessionId(e.target.value)} />
                <br />
                <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded-md">Upload Video</button>
            </form>
            {uploadStatus && <p className="text-red-500 mt-2">{uploadStatus}</p>}
        </div>
    );
};

export default VideoUploader;
