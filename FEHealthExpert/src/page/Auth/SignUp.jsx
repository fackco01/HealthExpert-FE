import React from "react";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import backgroundImage from "../../img/nike.png";
import helpexpert from "../../img/logo.png";

export default function SignUp() {
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
  };

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
              <p>Email</p>
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
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="width:420px py-3"
              />
            </Form.Item>
            <div className="mb-2 flex">
              <div className="mr-2">
                <p>First name</p>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstname!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="First name"
                    className="width:200px py-3"
                  />
                </Form.Item>
              </div>

              <div>
                <p>Last name</p>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastname!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Last name"
                    className="width:200px py-3"
                  />
                </Form.Item>
              </div>
            </div>
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
              />
            </Form.Item>
            <div className="mb-2 flex">
              <div className="mr-2">
                <p>Birthday</p>
                <Form.Item
                  name="birthday"
                  rules={[
                    {
                      required: true,
                      message: "Please input your birthday!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Birthday"
                    className="width:200px py-3"
                  />
                </Form.Item>
              </div>

              <div>
                <p>Gender</p>
                <Form.Item
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select your gender!",
                    },
                  ]}
                >
                  <div className="flex py-4">
                    <Checkbox value="female">Female</Checkbox>
                    <Checkbox value="male">Male</Checkbox>
                    <Checkbox value="other">Other</Checkbox>
                  </div>
                </Form.Item>
              </div>
            </div>

            <Form.Item>
              <Button
                type="primary"
                className="bg-black mt-1 w-full px-2 py-2 "
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
