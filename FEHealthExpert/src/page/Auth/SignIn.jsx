import React from "react";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import backgroundImage from "../../img/nike.png";
import helpexpert from "../../img/logo.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
// export default function SignIn() {
//   // const onFinish = async (values) => {
//   // //  const payload = {
//   // //   email: values.email,
//   // //   password: values.password
//   // //  }
//   // //  const result = await loginAPI(payload);
//   // //  if()

//   // };
export default function SignIn() {
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values);
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function login() {
    let item = { userName, password }
    try {
      let response = await fetch('https://localhost:7158/api/Auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error(`Error: ${errorMessage}`);
        alert(errorMessage);
        if (errorMessage === 'Please verify your account!!!') {
          history("/verify")
        }
      } else {
        history("/manageUser")
      }
      const responseData = await response.text();
      console.log(responseData);
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  function signup() {
    history("/signup")
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
              <div className="logoImage mb-2 ">
                <img className="w-1/5 rounded-full " src={helpexpert} alt="" />
              </div>

              {/* contentd */}
              <div className="content mb-10">
                <h1 className="text-3xl mb-5 text-525252 ">
                  Login to your Account
                </h1>
                <h1 className="text-base	">
                  Welcome to healexpert, a place that helps you change yourself
                </h1>
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
                className="width:420px py-3"
                // id="userName"
                // name="userName"
                // value={userName}
                onChange={(e) => setUserName(e.target.value)}
              // required
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
                // id="password"
                // name="password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              // required
              />
            </Form.Item>
            <div className="flex justify-between mt-2 ">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <div>
                <a className="#" href="âsdasds">
                  Forgot password ?
                </a>
              </div>
            </div>

            <Form.Item>
              <Button
                type="primary"
                className="bg-black mt-5 w-full px-2 py-2 "
                onClick={login}
              >
                <span className="text-orange-600">Log in </span>
              </Button>
              {/* register */}
            </Form.Item>
            <div className="login ">
              <span className="text-gray-600">Not Registered Yet? </span>
              <a onClick={signup} className="text-orange-600">
                Create an account
              </a>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
