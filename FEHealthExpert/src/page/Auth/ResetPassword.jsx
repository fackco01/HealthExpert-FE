import React from 'react';
import { Form, Input, Checkbox, List, Password } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import backgroundImage from "../../img/nike.png";
import helpexpert from "../../img/logo.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function ResetPassword() {
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [entityToken, setEntityToken] = useState('');
    const history = useNavigate();
    function getToken() {
        fetch(`http://20.2.73.15:8173/api/Account/GetListAccount`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer YOUR_ACCESS_TOKEN",
            }
        })
            .then(response => {
                if (!response.ok) {
                    console.error(`Error: Failed to get Entity Token.`);
                    alert("Failed to get Entity Token");
                    throw new Error("Failed to get Entity Token");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (Array.isArray(data)) {
                    const foundUser = data.find(accountList => accountList.userName === userName);
                    if (foundUser) {
                        setEntityToken("Entity Token: " + foundUser.passwordResetToken);
                    } else {
                        setEntityToken("Failed to get Entity Token.");
                    }
                } else {
                    setEntityToken("Data is not an array.");
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
    function resetPassword() {
        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp nhau hay không
        if (password !== confirmPassword) {
          alert("Mật khẩu và xác nhận mật khẩu không khớp.");
          return;
        }
    
        // Gửi yêu cầu đặt lại mật khẩu đến API
        fetch(`http://20.2.73.15:8173/api/Account/ResettPassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            password: password,
            confirmPassword: confirmPassword,
          }),
        })
          .then(response => {
            if (response.ok) {
              history("/signin");
            } else {
              console.error('Error:', response.statusText);
              alert('Error resetting password. Please try again.');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Error resetting password. Please try again.');
          });
      }
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
            <div className="mb-4">
                <label htmlFor="token" className="block text-gray-700 font-medium mb-2">
                    Enter Token:
                </label>
                <input
                    type="text"
                    id="token"
                    placeholder="Enter your token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Enter Password:
                </label>
                <Input.Password
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3"
                />

                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                    Confirm Password:
                </label>
                <Input.Password
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full py-3"
                />

                <button
                    onClick={resetPassword}
                    style={{ backgroundColor: '#FFA500', color: 'white' }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Reset Password
                </button>
            </div>

            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                    Enter Username:
                </label>
                <Input
                    type="text"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    className="w-full py-3"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button
                    onClick={getToken}
                    style={{ backgroundColor: '#FFA500', color: 'white' }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Get Token
                </button>
                <div className="mt-3 text-gray-700">{entityToken}</div>
            </div>
        </div>
    );
}