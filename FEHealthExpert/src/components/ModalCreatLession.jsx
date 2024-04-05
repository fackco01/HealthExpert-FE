import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Button, Form, Input, Upload, message } from "antd";
// khai báo up load
const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} Đã upload file thành công`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} Upload file thất bại`);
    }
  },
};

const ModalCreatSession = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [isModalCreatLessionOpen, setIsModalCreatLessionOpen] = useState(false);
  const showModalCreatLession = () => {
    setIsModalCreatLessionOpen(true);
  };
  const handleCancleCreatLession = () => {
    setIsModalCreatLessionOpen(false);
  };

  return (
    <>
      {" "}
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-[80%] items-center relative h-[580px] rounded-2xl	 bg-white mx-auto"
      >
        <h1 className="text-center text-3xl">Nội dung bài học</h1>
        <div
          className="w-[98%]  flex flex-col  h-[480px] flex   absolute top-[300px] rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
      mx-auto bg-orange-400"
          action=""
        >
          {/* id khóa học  */}
          {/* left_form */}
          <div className=" mx-auto my-5">
            <div className="mb-2">
              <p className="text-[18px]">Tiêu đề</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tiêu đề",
                },
              ]}
              name="caption"
            >
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p className="text-[18px]">Mô tả</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mô tả",
                },
              ]}
              name="cover"
            >
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Vui lòng đăng tải bài học của bạn",
                },
              ]}
              name="cover"
            >
              <Upload className="text-blue-900 font-bold " {...props}>
                <Button className="" icon={<UploadOutlined />}>
                  Click to Upload
                </Button>
              </Upload>
            </Form.Item>
          </div>
        </div>
        <button
          type="submit"
          className="w-[150px] mr-[90px] rounded-md absolute -bottom-4 -right-16	 bg-black text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 "
        >
          Tạo bài học
        </button>
      </Form>
    </>
  );
};

export default ModalCreatSession;
