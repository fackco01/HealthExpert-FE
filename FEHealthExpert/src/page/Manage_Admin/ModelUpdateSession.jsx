import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Menuleft from "../../components/MenuLeft";

function UpdateSession() {
    const { id } = useParams();
    const [sessionData, setSessionData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const sessionResponse = await axios.get("http://20.2.73.15:8173/api/Session/GetSessions");
                const foundSessions = sessionResponse.data.find(session => session.sessionId === id);
                setSessionData(foundSessions);
                console.log(sessionData);
            } catch (error) {
                console.log(error);
            }

        };
        fetchSessionData();
    }, [id]);

    const HandleSubmit = (e) => {
        e.preventDefault();
        try {
            const response = axios.put(
                `http://20.2.73.15:8173/api/Session/UpdateSession/${id}`,
                sessionData
            );
            if (response) {

                navigate(`/manageSession/${sessionData.courseId}`);
                window.location.reload();
            } else {
                console.error("Error fetching session data: ");
            }
        } catch (error) {
            console.error("Error fetching session data: ", error);
        }
    };

    return (
        <>
            <div className="w-full" >
                <Header />
            </div>
            <div className="w-full flex">
                {/* Side bar */}
                <div className="w-[20%] h-full">
                    <div className="home-page">
                        <Menuleft />
                    </div>
                </div>
                {/* End Side Bar */}
            </div>
            <div className="  text-black p-5">
                <form
                    className="bg-orange-400 h-[500px] w-[70%]  mx-auto"
                    onSubmit={HandleSubmit}
                >
                    <div className="flex  flex-col">
                        <div>
                            <h1 className="text-center text-2xl">CHỈNH SỬA BUỔI HỌC</h1>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 mt-5 ml-5">
                                <div className="">
                                    <div>sessionId:</div>
                                    <input
                                        type="text"
                                        name="sessionId"
                                        className="form-control  w-[300px] rounded-md py-2 mt-3"
                                        placeholder="Enter session id"
                                        value={sessionData.sessionId}
                                        onChange={(e) =>
                                            setSessionData({ ...sessionData, sessionId: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mt-3">
                                    <div className="">sessionName:</div>
                                    <input
                                        type="text"
                                        name="sessionName"
                                        className="form-control w-[300px] py-2 mt-3 rounded-md"
                                        placeholder="Enter session name"
                                        value={sessionData.sessionName}
                                        onChange={(e) =>
                                            setSessionData({ ...sessionData, sessionName: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mt-3">
                                    <div>Description:</div>
                                    <textarea
                                        name="description"
                                        className="form-control w-[1000px] h-[150px] py-2 mt-3 rounded-md"
                                        placeholder="Enter description"
                                        value={sessionData.description}
                                        onChange={(e) =>
                                            setSessionData({
                                                ...sessionData,
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 mt-5">
                                <div className="">
                                    <div>dateStart:</div>
                                    <input
                                        type="text"
                                        name="dateUpdate"
                                        className="form-control w-[300px] py-2 mt-3 rounded-md"
                                        placeholder="Enter dateStart"
                                        value={sessionData.dateStart}
                                        onChange={(e) =>
                                            setSessionData({ ...sessionData, dateStart: e.target.value })
                                        }
                                    />
                                </div>
                                {/* <div className="mt-3">
                                    <div>dateEnd:</div>
                                    <input
                                        type="text"
                                        name="language"
                                        className="form-control w-[300px] py-2 mt-3 rounded-md"
                                        placeholder="Enter dateEnd"
                                        value={sessionData.dateEnd}
                                        onChange={(e) =>
                                            setSessionData({ ...sessionData, dateEnd: e.target.value })
                                        }
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <button className="w-[250px] mr-[90px] rounded-md relative left-[1000px] bg-black hover:bg-blue-600 text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3">
                        Chỉnh sửa
                    </button>
                </form>
            </div>
        </>

    );
}

export default UpdateSession;
