import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { Menu } from "antd";

export default function LearningCourse() {
  const [sessions, setSessions] = useState([]);
  const [lessons, setLessons] = useState({});
  const [currentSession, setCurrentSession] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const { id, sessionId } = useParams();
  const [completedLessons, setCompletedLessons] = useState([]);
  const getTotalLessonsCount = () => {
    return Object.values(lessons).reduce((total, sessionLessons) => total + sessionLessons.length, 0);
  };

  useEffect(() => {
    fetchCourse();
  }, [id, sessionId]);

  const fetchCourse = async () => {
    try {
      const sessionResponse = await axios.get("http://20.2.73.15:8173/api/Session/GetSessions");
      const foundSessions = sessionResponse.data.filter(session => session.courseId === id);
      if (foundSessions.length > 0) {
        setSessions(foundSessions);
        // If sessionId is provided in URL, set currentSession to that sessionId
        if (sessionId && foundSessions.some(session => session.sessionId === sessionId)) {
          setCurrentSession(sessionId);
        } else {
          // Otherwise, set currentSession to the first session
          setCurrentSession(foundSessions[0].sessionId);
        }
      } else {
        setSessions([{ sessionName: "Failed to get sessions" }]);
      }

      const lessonResponse = await axios.get("http://20.2.73.15:8173/api/Lesson/GetLessons");
      const lessonsData = lessonResponse.data.reduce((acc, lesson) => {
        if (!acc[lesson.sessionId]) {
          acc[lesson.sessionId] = [];
        }
        acc[lesson.sessionId].push(lesson);
        return acc;
      }, {});
      setLessons(lessonsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenuClick = (e) => {
    const [sessionIndex, lessonIndex] = e.key.split('-').slice(1);
    const lessonSessionId = sessions[sessionIndex].sessionId;
    setCurrentSession(lessonSessionId);
    setCurrentVideo(lessons[lessonSessionId][lessonIndex].videoFile);
  };

  useEffect(() => {
    if (currentSession && lessons[currentSession]) {
      const completed = lessons[currentSession].filter(lesson => completedLessons.includes(lesson.lessonId));
      if (completed.length === lessons[currentSession].length) {
        console.log("Session completed!");
        // You can trigger completion actions here (e.g., send completion notification)
      }
    }
  }, [currentSession, lessons, completedLessons]);

  const completionPercentage = sessions.length > 0 ? (completedLessons.length / getTotalLessonsCount()) * 100 : 0;



  const markLessonCompleted = (lessonId) => {
    setCompletedLessons(prevCompletedLessons => [...prevCompletedLessons, lessonId]);
  };

  return (
    <>
      <div className="home-page">
        <Header />
      </div>

      <div className="flex justify-end">
        <div className="w-[80%] flex flex-col">
          <div className="bg-black w-full h-[600px] ">
            <div>
              <video src={`https://healthexpert.blob.core.windows.net/healthexpertvideos2/${currentVideo}`} controls autoPlay className="w-full h-[550px]" />
            </div>
          </div>
        </div>
        <div className="w-[20%] ">
          <Menu mode="inline" onClick={handleMenuClick} selectedKeys={[`session-${currentSession}`]}>
            {sessions.map((session, index) => (
              <Menu.ItemGroup key={`session-${index}`} title={`Session: ${session.sessionName}`}>
                {lessons[session.sessionId] && lessons[session.sessionId].map((lesson, lessonIndex) => (
                  <Menu.Item key={`lesson-${index}-${lessonIndex}`} onClick={() => markLessonCompleted(lesson.lessonId)}>
                    {lesson.caption}
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            ))}
          </Menu>
        </div>
      </div >

      <div>
        <h3>Completion Status: {completionPercentage.toFixed(2)}%</h3>
      </div>
    </>
  );
}
