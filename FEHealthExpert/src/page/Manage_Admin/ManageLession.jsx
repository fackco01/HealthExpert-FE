import React, { useEffect } from "react";
import { useState } from "react";
import MenuLeft from "../../components/MenuLeft";
import { Table } from "antd";
import { MinusCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Space, Tag } from "antd";
import ModalCreatSession from "../../components/ModalCreatSession";
import ModalDelete from "../../components/ModalDelete";
export default function ManageCourse() {
  const [lessions, setLessions] = useState([]);

  console.log("lessions", lessions);

  const columns = [
    {
      title: "ID bài học",
      dataIndex: "lessonId",
      sorter: (a, b) => a.age - b.age,
      width: "10%",
    },
    {
      title: "Tên bài học",
      dataIndex: "caption",
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
      title: "Link video",
      dataIndex: "videoFile",
      render: (text) => <a href={text}>{text}</a>,

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
          <button className="bg-orange-400  w-[50px] py-1 rounded-xl">
            Edit
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

  useEffect(() => {
    fetch("http://20.2.73.15:8173/api/Lesson/GetLessons").then((data) => {
      data.json().then((data) => setLessions(data));
    });
  }, []);

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

          <Modal
            style={{ top: 150 }}
            open={isModalDeleteOpen}
            onCancel={handleCancelDelete}
            okText="123456"
            width={500}
            footer={null}
            bodyStyle={{
              backgroundColor: "orange-400",
            }}
          >
            <h2 className="mx-auto text-center font-bold text-xl justify-center">
              Bạn có muốn xóa bài học này
            </h2>
            <div className=" flex ml-[300px]">
              <button
                onClick={handleCancelDelete}
                className="w-[70px] rounded-xl mr-6 mt-4 bg-orange-400 justify-end"
              >
                Cancle
              </button>
              <button className="w-[70px] rounded-xl mt-4 bg-orange-400 justify-end">
                OK
              </button>
            </div>
            <ModalDelete />
          </Modal>

          <div className="mt-10">
            <h1>
              <Table
                columns={columns}
                dataSource={lessions}
                onChange={onChange}
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
