import React from "react";
import Header from "../../components/Header";
import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

export default function DetailCourse() {
  const items = [
    {
      label: "Tuần 1: Nội dung tuần 1",
      key: "mail",
      children: [
        {
          type: "group",
          label: "Ngày 1",
          children: [
            {
              label: "Bài 1: Video 1",
              key: "setting:1",
            },
            {
              label: "Bài 2: Video 2",
              key: "setting:2",
            },
            {
              label: "Bài 3: Video 3",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Ngày 2",
          children: [
            {
              label: "Bài 1: Video 1",
              key: "setting:3",
            },
            {
              label: "Bài 2: Video 2",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: "Tuần 2: Nội dung tuần 2",
      key: "app",
      children: [
        {
          type: "group",
          label: "Ngày 1",
          children: [
            {
              label: "Bài 1: Video 1",
              key: "setting:1",
            },
            {
              label: "Bài 2: Video 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Ngày 2",
          children: [
            {
              label: "Bài 1: Video 1",
              key: "setting:3",
            },
            {
              label: "Bài 2: Video 2",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: "Tuần 3: Nội dung tuần 3",
      key: "SubMenu",
      children: [
        {
          type: "group",
          label: "Ngày 1",
          children: [
            {
              label: "Bài 1: Video 1",
              key: "setting:1",
            },
            {
              label: "Bài 2: Video 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Ngày 2",
          children: [
            {
              label: "Bài 1: Video 1",
              key: "setting:3",
            },
            {
              label: "Bài 2: Video 2",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      key: "alipay",
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <div className="home-page">
        <Header />
      </div>

      <div className="flex justify-end">
        <div className="w-[80%] flex flex-col">
          <div className="bg-black w-full h-[550px] "></div>
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
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </div>
      </div>
    </>
  );
}
