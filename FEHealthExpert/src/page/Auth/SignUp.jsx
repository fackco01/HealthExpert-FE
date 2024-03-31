import React from "react";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import backgroundImage from "../../img/nike.png";
import helpexpert from "../../img/logo.png";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';
import { Select } from 'antd';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [birhday, setBirthday] = useState(null);
  const [gender, setGender] = useState(null);
  const history = useNavigate();

  const handleDatePickerChange = (selectedDate) => {
    setBirthday(selectedDate);
  };
  const handleSelectChange = (selectedOption) => {
    setGender(selectedOption.value);
  };

  async function SignUp() {
    let item = { userName, password, confirmPassword, email, fullname, phonenumber, birhday, gender }
    try {
      let response = await fetch('https://localhost:7158/api/Account', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error(`Error: ${errorMessage}`);
        alert(errorMessage);
      } else {
        history("/signin")
      }
      const responseData = await response.text();
      console.log(responseData);

    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <section className="h-screen">
      <div className="h-full flex items-center justify-center">
        <div className="w-1/2">
          <img
            src={backgroundImage}
            className=" w-3/4 h-full mx-auto  "
            alt="Sample"
          />
        </div>

        <div className="w-1/2 flex flex-col items-center ">
          <Form
            name="normal_login"
            className="w-[55%] "
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            {/* introduce */}
            <div className="introduce mb-10">
              {/* this is logoImage */}

              {/* contentd */}
              <div className="content mb-10">
                <h1 className="text-3xl mb-5 text-525252 text-center ">
                  Sign Up
                </h1>
                {/* <h1 className="text-base	">
                  Welcome to healexpert, a place that helps you change yourself
                </h1> */}
              </div>
            </div>
            <div className="mb-2">
              <p>UserName</p>
            </div>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              {/* email input */}
              <Input
                type="text"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="width:420px py-3 "
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Item>
            <div className="mb-2">
              <p>Password</p>
            </div>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="width:420px py-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <div className="mb-2">
              <p>Confirm Password</p>
            </div>
            <Form.Item
              name="confirm-password"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="width:420px py-3"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>
            <div className="mb-2">
              <p>Email</p>
            </div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              {/* email input */}
              <Input
                type="text"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                className="width:420px py-3 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <div className="mb-2">
              <p>Full Name</p>
            </div>
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="fullname"
                placeholder="fullname"
                className="width:420px py-3"
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Item>
            <div className="mb-2">
              <p>Phone Number</p>
            </div>
            <Form.Item
              name="phonenumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phome number!",
                },
              ]}
            >
              {/* email input */}
              <Input
                type="text"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Phone Number"
                className="width:420px py-3"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </Form.Item>
            <div className="mb-2 flex">
              <div className="mr-2">
                <p>Birthday</p>
                <Space direction="vertical" size={12}>
                  <DatePicker needConfirm onChange={handleDatePickerChange} />
                </Space>
              </div>

              <div>
                <p>Gender</p>
                <div className="flex">
                  <Select
                    defaultValue="Gender"
                    onChange={handleSelectChange}
                    options={[
                      {
                        options: [
                          { label: 'Male', value: 'true' },
                          { label: 'Female', value: 'false' },
                        ]
                      }
                    ]} />
                </div>
              </div>
            </div>

            <Form.Item>
              <Button
                type="primary"
                className="bg-black mt-1 w-full px-2 py-2 "
                onClick={SignUp}
              >
                <span className="text-orange-600">Sign Up </span>
              </Button>
              {/* register */}
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
