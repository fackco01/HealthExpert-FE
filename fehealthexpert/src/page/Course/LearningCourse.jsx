import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

export default function LearningCourse() {
  const [sessions, setSessions] = useState([]);
  const [lessons, setLessons] = useState({});
  const [currentVideo, setCurrentVideo] = useState('');
  const { id, sessionId, lessonId } = useParams();

  const { SubMenu } = Menu;
  //const api = "http://20.2.73.15:8173/api/Session/GetSessions"

  const fetchCourse = async () => {
    try {
      const sessionResponse = await axios.get("http://20.2.73.15:8173/api/Session/GetSessions");
      const foundSessions = sessionResponse.data.filter(session => session.courseId === id);
      if (foundSessions.length > 0) {
        // setSession(foundSession.map(
        //   e => {
        //     return { sessionId: e.sessionId }
        //   }
        // ))
        setSessions(foundSessions);
      } else {
        setSessions([{ sessionName: "Failed to get sessions" }]);
      }

      // Fetch lessons
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
  useEffect(() => {
    fetchCourse();
    console.log(sessions);
  }, [id]);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     try {
  //       const response = await axios.get("http://20.2.73.15:8173/api/Lesson/GetLessons");

  //       session.map((e) => {

  //         setLesson([...lesson, { sessionId: e.sessionId, lesson: response.data.map(list => { if (list.sessionId === e.sessionId) return list }) }])
  //       });
  //       // const foundLesson = response.data.filter(lessonList => { session.filter });
  //       // if (foundLesson) {
  //       //   setLesson(foundLesson)
  //       // } else {
  //       //   setLesson("Failed to get lesson");
  //       // }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchSession();
  // }, [session]);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleMenuClick = (e) => {
    const [sessionIndex, lessonIndex] = e.key.split('-').slice(1);
    setCurrentVideo(lessons[sessions[sessionIndex].sessionId][lessonIndex].videoFile);
  };

  //useEffect(() => { console.log(lesson); }, [lesson])
  // const items = [
  //   {
  //     label: "Tuần 1: Nội dung tuần 1",
  //     key: "mail",
  //     children: [
  //       {
  //         type: "group",

  //         children: [
  //           {
  //             label: "Bài 1: Video 1",
  //             key: "setting:1",
  //           },
  //           {
  //             label: "Bài 2: Video 2",
  //             key: "setting:2",
  //           },
  //           {
  //             label: "Bài 3: Video 3",
  //             key: "setting:3",
  //           },
  //         ],
  //       },
  //       {
  //         type: "group",

  //         children: [
  //           {
  //             label: "Bài 1: Video 1",
  //             key: "setting:4",
  //           },
  //           {
  //             label: "Bài 2: Video 2",
  //             key: "setting:5",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     key: "alipay",
  //   },
  // ];
  // const [current, setCurrent] = useState("mail");
  // const onClick = (e) => {
  //   // console.log("click ", e);
  //   setCurrent(e.key);
  // };
  return (
    <>
      <div className="home-page">
        <Header />
      </div>

      <div className="flex justify-end">
        <div className="w-[80%] flex flex-col">
          <div className="bg-black w-full h-[600px] ">
            <div>
              <video src={`https://healthexpert.blob.core.windows.net/healthexpertvideos2/${currentVideo}`} controls={true} autoPlay={isPlaying}
                className="w-full h-[550px]" />
              {!isPlaying && (
                <button onClick={handlePlay}>Play</button>
              )}
              {isPlaying && (
                <button onClick={handlePause}>Pause</button>
              )}
            </div>
          </div>
          <div className="flex mt-5 justify-center">
            <button className="w-[250px] mr-[90px] rounded-md	 bg-blue-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 ">
              PREVIOUS
            </button>
            <button className="w-[250px] bg-blue-500 rounded-md	 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 ">
              NEXT
            </button>
          </div>
          {/* mo ta khoa hoc */}
          <div className="mt-5">
            <h2 className="text-[20px] font-bold">Lời khuyên trước khóa học</h2>
          </div>
        </div>
        <div className="w-[20%] ">
          <Menu mode="inline" onClick={handleMenuClick}>
            {sessions.map((session, index) => (
              <SubMenu key={`session-${index}`} title={`Tên Session: ${session.sessionName}`}>
                {lessons[session.sessionId] && lessons[session.sessionId].map((lesson, lessonIndex) => (
                  <Menu.Item key={`lesson-${index}-${lessonIndex}`}>{lesson.caption}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </div >
    </>
  );
}
{/* <Link className="mt-3 ml-5"
            to={`/learningCourse/${id}/${sessionId}/${lessonId}`}>
            <h3 className="h-1/2 bg-orange-400 text-white">Buoi 1</h3>
          </Link> */}
{/* <div>
            {lesson.map(e => <div>
              <p>{e?.session.sessionId}</p>
              <div>{e?.lesson.map(b => <div>{b?.caption}</div>)}</div>
            </div>)}
          </div> */}
{/* <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          /> */}