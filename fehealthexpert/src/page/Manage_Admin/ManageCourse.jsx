import React from "react";
import { useState } from "react";
import MenuLeft from "../../components/MenuLeft";
import { Table } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Button, Modal } from "antd";
import ModalCreatCourse from "../../components/ModalCreatCourse";

export default function ManageCourse() {
  const columns = [
    {
      title: "Khóa học",
      dataIndex: "name",
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
      title: "Tên khóa học",
      dataIndex: "name",
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
      width: "20%",
    },
    {
      title: "Số lượng học viên",
      dataIndex: "name",
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
      title: "Giá tiền",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tính năng",
      dataIndex: "address",
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
      width: "40%",
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
            onClick={showModal}
            className="w-[250px] mr-[90px] rounded-md  bottom-1 right-3	 bg-orange-400 text-black font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 "
          >
            Tạo khóa học
          </button>
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            okText="123456"
            width={900}
            footer={null}
          >
            <ModalCreatCourse />
          </Modal>
          <div className="mt-10">
            <h1>
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
