import React from 'react';
import { Form, Input, Checkbox, List } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { Link, useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";

const Forgotpassword = () => {
    const [userName, setUsername] = useState("");
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        fetch(`http://20.2.73.15:8173/api/Account/ForgotPassword?username=${userName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to request password reset.');
                }
                // Xử lý thành công ở đây, ví dụ: hiển thị thông báo cho người dùng
                console.log('Password reset request sent.');
                // Gửi yêu cầu thành công, điều hướng người dùng đến trang đặt lại mật khẩu
                navigate('/resetpassword');
            })

            .catch(error => {
                console.error('Error:', error);
                // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo lỗi cho người dùng
            });
    };

    return (
        <div className="forgot-password-container">
            <h1>Forgot Password</h1>
            <div className="form-box">
                <Form>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Enter your username"
                            value={userName}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={handleForgotPassword}>
                            Forgot Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );

};

export default Forgotpassword;