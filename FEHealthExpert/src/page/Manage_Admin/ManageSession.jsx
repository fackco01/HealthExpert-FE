import React, { useEffect } from "react";
import { useState } from "react";
import MenuLeft from "../../components/MenuLeft";
import { Table } from "antd";
import { MinusCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Space, Tag } from "antd";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalCreatSession from "../../components/ModalCreatSession";
import ModalDeleteSession from "./ModelDeleteSession";
import { useNavigate } from "react-router-dom";

export default function ManageSession() {
  const [sessions, setSessions] = useState([]);
  const { id } = useParams();
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  localStorage.setItem("currentCourse", id)
  const navigate = useNavigate();
  //console.log("session", sessions);

  const [courseName, setCourseName] = useState('');
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://20.2.73.15:8173/api/Course/${id}`);
        setCourseName(response.data.courseName);
      } catch (error) {
        console.error("Error fetching course details: ", error);
      }
    };
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const sessionResponse = await axios.get("http://20.2.73.15:8173/api/Session/GetSessions");
      const foundSessions = sessionResponse.data.filter(session => session.courseId === id);
      if (foundSessions.length > 0) {
        setSessions(foundSessions);

      } else {
        setSessions([{ sessionName: "Failed to get sessions" }]);
      }
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    fetchCourse();
  }, [id]);

  const columns = [
    {
      title: "ID buổi học",
      dataIndex: "sessionId",
      sorter: (a, b) => a.sessionId - b.sessionId,
      width: "10%",
      render: (text, record) => (
        <Link to={`/manageLesson/${record.sessionId}`}>{text}</Link>
      ),
    },
    {
      title: "Tên buổi học",
      dataIndex: "sessionName",
    },
    {
      title: "Trạng thái",
      dataIndex: "description",
    },
    {
      title: "Thao tác",
      render: (_, record) => (
        <div className="flex">
          <button
            type="primary"
            onClick={() => {
              setSelectedSessionId(record.sessionId);
              setIsModalDeleteOpen(true);
            }}
            className="bg-orange-400 w-[100px] py-1 rounded-xl "
          >
            Xóa
          </button>
          <ModalDeleteSession
            sessionId={selectedSessionId}
            onDelete={handleDelete}
            isModalOpen={isModalDeleteOpen}
            setIsModalOpen={setIsModalDeleteOpen}
          />
          <div className="bg-orange-400 w-[100px] py-1 rounded-xl ml-10">
            <Link
              to={`/updateSession/${record.sessionId}`}
            >
              &nbsp;&nbsp;&nbsp;Chỉnh sửa&nbsp;&nbsp;&nbsp;
            </Link>
          </div>

        </div>
      ),
      width: "30%",
    },
  ];
  const handleDelete = async (deletedSessionId) => {

    setIsModalDeleteOpen(false);
    navigate(`/manageSession/${id}`, { replace: true }); // Điều hướng sau khi xóa

  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const showModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const handleCancelCreate = () => {
    setIsModalCreateOpen(false);
  };

  const showModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const handleCancelDelete = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <>
      <div className="w-full" >
        <Header />
      </div>
      <div className="w-full flex ">
        <div className="w-[20%] h-full ">
          <div className="home-page">
            <MenuLeft />
          </div>
        </div>
        <div className="w-[80%] mt-3">
          <h2 className="font-bold text-2xl">Khóa học {courseName}</h2>
          <button
            type="primary"
            onClick={showModalCreate}
            className="w-[250px] mr-[90px] rounded-md  bottom-1 right-3	 bg-orange-400 text-black font-bold py-3 px-4 opacity-100 hover:opacity-80 transition-opacity mt-3 "
          >
            Tạo buổi học
          </button>
          <Modal
            open={isModalCreateOpen}
            onCancel={handleCancelCreate}
            okText="123456"
            width={900}
            footer={null}
            styles={{
              backgroundColor: "orange-400",
            }}
          >
            <ModalCreatSession />
          </Modal>
          {/* <Modal
            style={{ top: 150 }}
            open={isModalDeleteOpen}
            onCancel={handleCancelDelete}
            okText="123456"
            width={500}
            footer={null}
            styles={{
              backgroundColor: "orange-400",
            }}
          >
            <h2 className="mx-auto text-center font-bold text-xl justify-center">
              Bạn có muốn xóa bài học này
            </h2>
            <div className=" flex ml-[300px]">
              <button className="w-[70px] rounded-xl mr-6 mt-4 bg-orange-400 justify-end">
                Cancle
              </button>
              <button className="w-[70px] rounded-xl mt-4 bg-orange-400 justify-end">
                OK
              </button>
            </div>

          </Modal> */}
          <div className="mt-10">
            <h1>
              <Table
                columns={columns}
                dataSource={sessions}
                onChange={onChange}
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
