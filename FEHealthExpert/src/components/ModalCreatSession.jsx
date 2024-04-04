import React from "react";
import {
  Button,
  Cascader,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  message,
} from "antd";
import { Popconfirm } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Space } from "antd";

const { RangePicker } = DatePicker;

const ModalCreatSession = () => {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      {" "}
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-[90%] items-center relative h-[580px] rounded-2xl	 bg-white mx-auto"
      >
        <h1 className="text-center text-3xl">Tạo bài học</h1>
        <div
          className="w-[98%]   h-[480px] flex   absolute top-[300px] rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
      mx-auto bg-orange-400"
          action=""
        >
          {/* id khóa học  */}
          {/* left_form */}
          <div className="w-1/2 ml-4 mt-5">
            <div className="mb-2">
              <p>ID Buổi học</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập ID buổi học",
                },
              ]}
              name="ID_Course"
            >
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>

            <div className="mb-2">
              <p>Tên buổi học</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên buổi học",
                },
              ]}
              name="LessionName"
            >
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>

            <div className="mb-2">
              <p>Mô tả bài học</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: false,
                },
              ]}
              name=""
            >
              <>
                <br />
                <TextArea
                  className="w-[300px]"
                  rows={4}
                  placeholder="Hãy viết vài dòng mô tả bài học của bạn nhé"
                  maxLength={255}
                />
              </>
            </Form.Item>
          </div>
          <div className="w-1/2 mt-5">
            <div className="mb-2">
              <p>Thời hạn</p>
            </div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập thời gian buổi học",
                },
              ]}
            >
              <RangePicker />
            </Form.Item>
          </div>
        </div>
        <button
          type="submit"
          className="w-[250px] mr-[90px] rounded-md absolute bottom-0 right-3	 bg-black hover:bg-blue-600 text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 "
        >
          Tạo bài học
        </button>
      </Form>
    </>
  );
};

export default ModalCreatSession;
