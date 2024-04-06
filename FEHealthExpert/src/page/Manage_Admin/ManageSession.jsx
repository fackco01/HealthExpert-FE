import React, { useEffect } from "react";
import { useState } from "react";
import MenuLeft from "../../components/MenuLeft";
import { Table } from "antd";
import { MinusCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Space, Tag } from "antd";
import ModalCreatSession from "../../components/ModalCreatSession";
import ModalDelete from "../../components/ModalDelete";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ManageSession() {
  const [sessions, setSessions] = useState([]);
  const { id } = useParams();

  localStorage.setItem("currentCourse", id)
  //console.log("session", sessions);
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
      sorter: (a, b) => a.age - b.age,
      width: "10%",
    },
    {
      title: "Tên buổi học",
      dataIndex: "sessionName",
      filters: [
        {
          text: "Jim Green	",
          value: "Jim Green",
        },
        {
          text: "Jim Green	",
          value: "Jim Green",
        },
        {
          text: "Jim Green	",
          value: "Jim Green",
        },
        {
          text: "Jim Green	",
          value: "Jim Green",
        },
        {
          text: "Jim Green	",
          value: "Jim Green",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "10%",
    },

    {
      title: "Trạng thái",
      dataIndex: "learnProgress",
      render: (_, record) => (
        <Space size="middle">
          <Tag icon={<SyncOutlined spin />} color="processing">
            Đang học
          </Tag>

          <Tag icon={<MinusCircleOutlined />} color="red">
            Đã xóa
          </Tag>
        </Space>
      ),
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Thao tác",
      dataIndex: "name",
      render: (_, record) => (
        <Space size="middle">
          <button
            type="primary"
            onClick={showModalDelete}
            className="bg-orange-400  w-[50px] py-1 rounded-xl "
          >
            Delete
          </button>
          <ModalDelete onDelete={handleDelete} />
          <button className="bg-orange-400  w-[50px] py-1 rounded-xl">
            Edit
          </button>
          <button className="bg-orange-400  w-[100px] py-1 rounded-xl">
            Create Lession
          </button>
        </Space>
      ),
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];
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

  const handleDelete = () => {
    const api = "http://20.2.73.15:8173/api/Session/DeleteSession/:id"
    fetch(api.replace(":id", sessions.sessionId), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Xử lý khi xóa thành công
          console.log("Bài học đã được xóa thành công");
        } else {
          // Xử lý khi có lỗi xảy ra
          console.error("Đã xảy ra lỗi khi xóa bài học");
        }
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi khi xóa bài học:", error);
      });
  };

  return (
    <>
      <div className="w-full flex ">
        <div className="w-[20%] h-full ">
          <div className="home-page">
            <MenuLeft />
          </div>
        </div>
        <div className="w-[80%] mt-3">
          <h2 className="font-bold text-2xl">Trung tâm Trần Nhật Hoàng</h2>
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
          <Modal
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
            <ModalDelete onDelete={handleDelete} />;
          </Modal>
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
