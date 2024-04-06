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
import { UploadOutlined } from "@ant-design/icons";

const ModalCreatCourse = () => {
  const { TextArea } = Input;

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
      <Form className="w-[96%] items-center relative h-[780px] rounded-2xl	 bg-white mx-auto">
        <h1 className="text-center text-3xl">Tạo khóa học</h1>
        <Form
          className="w-[89%]   flex  mt-20 absolute top-[300px] rounded-2xl left-1/2 transform -translate-x-1/2 -translate-y-1/2
      mx-auto bg-orange-400"
          action=""
        >
          {/* id khóa học  */}
          {/* left_form */}

          <Form className="w-1/2 ml-4 mt-5">
            <div className="mb-2">
              <p>ID khóa học</p>
            </div>
            <Form.Item name="ID khóa học">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>

            <div className="mb-2">
              <p>Giá khóa học (VND)</p>
            </div>
            <Form.Item name="Giá khóa học">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Loại hình khóa học</p>
            </div>
            <Form.Item name="Loại hình khóa học">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Chứng chỉ</p>
            </div>
            <Form.Item name="Chứng chỉ">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Người tạo</p>
            </div>
            <Form.Item name="Mô tả khóa học">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Mô tả khóa học</p>
            </div>
            <Form.Item name="">
              <>
                <br />
                <TextArea
                  className="w-[300px]"
                  rows={4}
                  placeholder="Hãy viết vài dòng mô tả khóa học của bạn nhé"
                  maxLength={255}
                />
              </>
            </Form.Item>
          </Form>
          <Form className="w-1/2 mt-5">
            <div className="mb-2">
              <p>Tên khóa học</p>
            </div>
            <Form.Item name="Tên khóa học">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Rating </p>
            </div>
            <Form.Item name="Rating">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Chỉ số BMI </p>
            </div>
            <Form.Item className="flex" name="Chỉ số BMI">
              <Form className="flex">
                <Input type="text" className="w-[150px] w-1/2 py-2"></Input>
                <p className="w-[20px] text-3xl">~</p>
                <Input type="text" className="w-[150px] w-1/2 py-2"></Input>
              </Form>
            </Form.Item>
            <div className="mb-2">
              <p>Số lượng học viên </p>
            </div>
            <Form.Item name="Số lượng học viên">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <div className="mb-2">
              <p>Ngôn ngữ </p>
            </div>
            <Form.Item name="Ngôn ngữ">
              <Input type="text" className="w-[300px] py-2"></Input>
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload ảnh </Button>
            </Upload>
          </Form>
        </Form>
        <button className="w-[250px] mr-[90px] rounded-md absolute bottom-1 right-3	 bg-black hover:bg-blue-600 text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 ">
          Tạo khóa học
        </button>
      </Form>
    </>
  );
};

export default ModalCreatCourse;
