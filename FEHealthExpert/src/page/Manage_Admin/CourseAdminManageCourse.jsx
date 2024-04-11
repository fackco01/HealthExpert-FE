import React, { useEffect, useState } from "react";
import MenuLeft from "../../components/MenuLeft";
import { Table, Modal, Button } from "antd";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CourseAdminManageCourse() {
    const [courses, setCourses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [centerName, setCenterName] = useState('');
    const [revenue, setRevenue] = useState(0); // Thêm state để lưu tổng doanh thu
    const navigate = useNavigate(); // Sử dụng useHistory

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            console.error("Không có người dùng trong localStorage!");
            return;
        }
        setCenterName(user);
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://20.2.73.15:8173/api/Course/`);
                const filteredCourses = response.data.filter(data => data.createBy === centerName);
                setCourses(filteredCourses);
            } catch (error) {
                console.error("Error fetching courses: ", error);
            }
        };
        if (centerName) {
            fetchCourses();
        }
    }, [centerName]);

    useEffect(() => {
        // Tính tổng doanh thu
        const totalRevenue = courses.reduce((acc, course) => {
            return acc + (course.studentNumber * course.price);
        }, 0);
        setRevenue(totalRevenue);
    }, [courses]);

    const formattedRevenue = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(revenue);

    const columns = [
        {
            title: "ID",
            dataIndex: "courseId",
            key: "courseId",
        },
        {
            title: "Tên khóa học",
            dataIndex: "courseName",
            key: "courseName",
        },
        {
            title: "Số lượng học viên",
            dataIndex: "studentNumber",
            key: "studentNumber",
        },
        {
            title: "Giá tiền",
            dataIndex: "price",
            key: "price",
            render: (text) => (
                <span>{new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                }).format(text)}</span>
            ),
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="w-full flex">
                <div className="w-[20%] h-full">
                    <div className="home-page">
                        <MenuLeft />
                    </div>
                </div>
                <div className="w-[80%] mt-3">
                    <h2 className="font-bold text-2xl">WELCOME {centerName}</h2>

                    <div className="absolute top-0 right-0">
                        <p className="box w-[250px] mr-[90px] rounded-md bg-orange-400 text-black font-bold py-3 px-4 rounded opacity-100 transition-opacity mt-3">
                            Tổng doanh thu của bạn: {formattedRevenue}
                        </p>
                    </div>
                    <div className="mt-10">
                        <Table
                            columns={columns}
                            dataSource={courses}
                            rowKey={(record) => record.courseId}
                            onRow={(record) => ({
                                onClick: () => navigate(`/course_admin_manager/${record.courseId}`),
                            })}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
