import React from 'react';
import { Form, Input, Checkbox, List } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Button from "../../components/button";
import backgroundImage from "../../img/nike.png";
import helpexpert from "../../img/logo.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
export default function Verify() {
    const [token, setToken] = useState('');
    const [userName, setUserName] = useState("");
    const [entityToken, setEntityToken] = useState('');
    const history = useNavigate();
    function getToken() {
        fetch(`https://localhost:7158/api/Account`, {
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
                        setEntityToken("Entity Token: " + foundUser.verificationToken);
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
    function verifyAccount() {
        // Make a GET request to the backend API for account verification
        fetch(`https://localhost:7158/api/Auth/Verify/verify?token=${token}`, { method: 'POST' })
            .then(data => {
                console.log(data.status);
                history("/signin");
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error verifying account. Please try again.');
            });
    }
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Account Verification</h2>
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
                <button
                    onClick={verifyAccount}
                    style={{ backgroundColor: '#FFA500', color: 'white' }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Verify Account
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